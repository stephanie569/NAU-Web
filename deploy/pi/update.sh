#!/usr/bin/env bash
# Pull-based deploy for nau-web. Run by nau-web-update.timer every 2 minutes.
#
# GitHub Actions builds and pushes ghcr.io/stephanie569/nau-web:latest (public
# image, no login needed). This script pulls it and, only when it differs from
# what the container is running, recreates the container. It replaces the
# self-hosted Actions runner, whose registration GitHub deletes whenever the
# Pi is offline for a couple of weeks.
#
# If the new image does not become healthy, the previous image (and compose
# file) is put back, the bad image is remembered in .bad-image so it is not
# retried every 2 minutes, and the unit exits non-zero. If that rollback also
# fails, .rollback-pending is written and every later run retries the rollback
# until it succeeds or a newer image deploys cleanly.
set -euo pipefail

# Overridable only so the rollback path can be tested against a throwaway
# compose project; production uses the defaults.
APP_DIR=${NAU_APP_DIR:-/home/svetlozarstoikov/apps/nau-web}
IMAGE=${NAU_IMAGE_REF:-ghcr.io/stephanie569/nau-web:latest}
CONTAINER=${NAU_CONTAINER:-nau-web}
REPO_RAW=https://raw.githubusercontent.com/stephanie569/NAU-Web
PREV_TAG="${IMAGE%:*}:previous"
BAD_FILE="$APP_DIR/.bad-image"
PENDING_FILE="$APP_DIR/.rollback-pending"

rollback() {
  NAU_IMAGE="$PREV_TAG" docker compose up -d --remove-orphans --wait --wait-timeout 120
}

cd "$APP_DIR"

[ -n "${NAU_SKIP_PULL:-}" ] || docker pull -q "$IMAGE" >/dev/null

latest=$(docker image inspect -f '{{.Id}}' "$IMAGE")
running=$(docker inspect -f '{{.Image}}' "$CONTAINER" 2>/dev/null || true)

# An earlier rollback failed, so the site may be down. Unless a newer image is
# waiting to be tried, keep retrying the rollback. This runs before the checks
# below because the broken container may still report the bad image as running.
if [ -f "$PENDING_FILE" ] && [ "$(cat "$BAD_FILE" 2>/dev/null)" = "$latest" ]; then
  echo "retrying rollback to $PREV_TAG after an earlier failure" >&2
  if rollback; then
    rm -f "$PENDING_FILE"
    echo "rolled back to $PREV_TAG; it is healthy" >&2
    exit 0
  fi
  echo "ERROR: rollback to $PREV_TAG failed again, site is down" >&2
  exit 1
fi

# Nothing new: stay silent so the journal only shows real deploys.
[ "$latest" = "$running" ] && exit 0

# This image already failed and was rolled back. Wait for the next push.
if [ -f "$BAD_FILE" ] && [ "$(cat "$BAD_FILE")" = "$latest" ]; then
  exit 0
fi

rev=$(docker image inspect -f '{{index .Config.Labels "org.opencontainers.image.revision"}}' "$IMAGE" 2>/dev/null || true)
echo "new image ${latest:7:12} (commit ${rev:-unknown}), was ${running:7:12}"

# Take docker-compose.yml from the exact commit the image was built from, so
# compose changes ship together with the image. Never deploy the image with the
# old file: once it runs, later runs exit early and would never fetch the new
# file. A network or server error is retried on the next timer run. A file that
# is missing at that commit or does not validate will not fix itself, so the
# image is rejected like an unhealthy one and the next push is awaited.
compose_changed=0
if [ -z "$rev" ]; then
  echo "warning: image has no revision label, keeping the current docker-compose.yml" >&2
else
  tmp=$(mktemp "$APP_DIR/.compose.XXXXXX")
  trap 'rm -f "$tmp"' EXIT
  code=$(curl -sS -m 20 -o "$tmp" -w '%{http_code}' "$REPO_RAW/$rev/docker-compose.yml" || true)
  if [ "$code" = 200 ] && docker compose -f "$tmp" config -q; then
    if ! cmp -s "$tmp" docker-compose.yml; then
      cp docker-compose.yml docker-compose.yml.prev
      cat "$tmp" > docker-compose.yml
      compose_changed=1
      echo "docker-compose.yml updated from $rev (old copy in docker-compose.yml.prev)"
    fi
  elif [ "$code" = 200 ] || [ "$code" = 404 ]; then
    echo "$latest" > "$BAD_FILE"
    echo "ERROR: docker-compose.yml at $rev is missing or invalid (HTTP $code); not deploying ${latest:7:12} until the next push" >&2
    exit 1
  else
    echo "ERROR: could not download docker-compose.yml for $rev (HTTP ${code:-none}), not deploying; will retry" >&2
    exit 1
  fi
fi

# Keep the running image under a tag so it survives pruning and can be
# restored if the new one is broken.
[ -z "$running" ] || docker tag "$running" "$PREV_TAG"

# --wait blocks on the compose healthcheck, so a container that starts and
# then crash-loops counts as a failed deploy.
if docker compose up -d --remove-orphans --wait --wait-timeout 120; then
  rm -f "$BAD_FILE" "$PENDING_FILE"
  docker image prune -f >/dev/null
  echo "deployed ${latest:7:12}"
  exit 0
fi

echo "ERROR: image ${latest:7:12} (commit ${rev:-unknown}) did not become healthy" >&2
docker logs --tail 40 "$CONTAINER" >&2 || true
echo "$latest" > "$BAD_FILE"

if [ -z "$running" ]; then
  echo "ERROR: no previous image to roll back to" >&2
  exit 1
fi

[ "$compose_changed" = 0 ] || cat docker-compose.yml.prev > docker-compose.yml
if rollback; then
  echo "rolled back to ${running:7:12}; it is healthy" >&2
else
  touch "$PENDING_FILE"
  echo "ERROR: rollback to ${running:7:12} also failed, site is down; will retry" >&2
fi
exit 1
