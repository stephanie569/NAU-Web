#!/usr/bin/env bash
# Pull-based deploy for nau-web. Run by nau-web-update.timer every 2 minutes.
#
# GitHub Actions builds and pushes ghcr.io/stephanie569/nau-web:latest (public
# image, no login needed). This script pulls it and, only when it differs from
# what the container is running, recreates the container. It replaces the
# self-hosted Actions runner, whose registration GitHub deletes whenever the
# Pi is offline for a couple of weeks.
set -euo pipefail

APP_DIR=/home/svetlozarstoikov/apps/nau-web
IMAGE=ghcr.io/stephanie569/nau-web:latest
REPO_RAW=https://raw.githubusercontent.com/stephanie569/NAU-Web
CONTAINER=nau-web

cd "$APP_DIR"

docker pull -q "$IMAGE" >/dev/null

latest=$(docker image inspect -f '{{.Id}}' "$IMAGE")
running=$(docker inspect -f '{{.Image}}' "$CONTAINER" 2>/dev/null || true)

# Nothing new: stay silent so the journal only shows real deploys.
[ "$latest" = "$running" ] && exit 0

rev=$(docker image inspect -f '{{index .Config.Labels "org.opencontainers.image.revision"}}' "$IMAGE" 2>/dev/null || true)
echo "new image ${latest:7:12} (commit ${rev:-unknown}), was ${running:7:12}"

# Take docker-compose.yml from the exact commit the image was built from, so
# compose changes ship together with the image. Keep the current file if the
# download fails or the new file does not validate.
if [ -n "$rev" ]; then
  tmp=$(mktemp "$APP_DIR/.compose.XXXXXX")
  trap 'rm -f "$tmp"' EXIT
  if curl -fsS -m 20 -o "$tmp" "$REPO_RAW/$rev/docker-compose.yml" \
     && docker compose -f "$tmp" config -q; then
    if ! cmp -s "$tmp" docker-compose.yml; then
      cp docker-compose.yml docker-compose.yml.prev
      cat "$tmp" > docker-compose.yml
      echo "docker-compose.yml updated from $rev (old copy in docker-compose.yml.prev)"
    fi
  else
    echo "warning: could not fetch a valid docker-compose.yml for $rev, keeping the current one" >&2
  fi
fi

# --wait blocks on the compose healthcheck, so a container that starts and
# then crash-loops fails this unit instead of looking like a good deploy.
docker compose up -d --remove-orphans --wait --wait-timeout 120
docker image prune -f >/dev/null
echo "deployed ${latest:7:12}"
