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
# retried every 2 minutes, and the unit exits non-zero.
set -euo pipefail

# Overridable only so the rollback path can be tested against a throwaway
# compose project; production uses the defaults.
APP_DIR=${NAU_APP_DIR:-/home/svetlozarstoikov/apps/nau-web}
IMAGE=${NAU_IMAGE_REF:-ghcr.io/stephanie569/nau-web:latest}
CONTAINER=${NAU_CONTAINER:-nau-web}
REPO_RAW=https://raw.githubusercontent.com/stephanie569/NAU-Web
PREV_TAG="${IMAGE%:*}:previous"
BAD_FILE="$APP_DIR/.bad-image"

cd "$APP_DIR"

[ -n "${NAU_SKIP_PULL:-}" ] || docker pull -q "$IMAGE" >/dev/null

latest=$(docker image inspect -f '{{.Id}}' "$IMAGE")
running=$(docker inspect -f '{{.Image}}' "$CONTAINER" 2>/dev/null || true)

# Nothing new: stay silent so the journal only shows real deploys.
[ "$latest" = "$running" ] && exit 0

# This image already failed and was rolled back. Wait for the next push.
if [ -f "$BAD_FILE" ] && [ "$(cat "$BAD_FILE")" = "$latest" ]; then
  exit 0
fi

rev=$(docker image inspect -f '{{index .Config.Labels "org.opencontainers.image.revision"}}' "$IMAGE" 2>/dev/null || true)
echo "new image ${latest:7:12} (commit ${rev:-unknown}), was ${running:7:12}"

# Keep the running image under a tag so it survives pruning and can be
# restored if the new one is broken.
[ -z "$running" ] || docker tag "$running" "$PREV_TAG"

# Take docker-compose.yml from the exact commit the image was built from, so
# compose changes ship together with the image. Keep the current file if the
# download fails or the new file does not validate.
compose_changed=0
if [ -n "$rev" ]; then
  tmp=$(mktemp "$APP_DIR/.compose.XXXXXX")
  trap 'rm -f "$tmp"' EXIT
  if curl -fsS -m 20 -o "$tmp" "$REPO_RAW/$rev/docker-compose.yml" \
     && docker compose -f "$tmp" config -q; then
    if ! cmp -s "$tmp" docker-compose.yml; then
      cp docker-compose.yml docker-compose.yml.prev
      cat "$tmp" > docker-compose.yml
      compose_changed=1
      echo "docker-compose.yml updated from $rev (old copy in docker-compose.yml.prev)"
    fi
  else
    echo "warning: could not fetch a valid docker-compose.yml for $rev, keeping the current one" >&2
  fi
fi

# --wait blocks on the compose healthcheck, so a container that starts and
# then crash-loops counts as a failed deploy.
if docker compose up -d --remove-orphans --wait --wait-timeout 120; then
  rm -f "$BAD_FILE"
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
if NAU_IMAGE="$PREV_TAG" docker compose up -d --remove-orphans --wait --wait-timeout 120; then
  echo "rolled back to ${running:7:12}; it is healthy" >&2
else
  echo "ERROR: rollback to ${running:7:12} also failed, site is down" >&2
fi
exit 1
