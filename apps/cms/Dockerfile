#syntax=docker/dockerfile:1.4

FROM node:20-alpine AS base

ENV PNPM_HOME "/pnpm"
ENV PATH "$PNPM_HOME:$PATH"
RUN apk update && apk add --no-cache \
  libc6-compat \
  build-base \
  gcc \
  autoconf \
  automake \
  zlib-dev \
  libpng-dev \
  nasm \
  bash \
  vips-dev \
  git

RUN corepack enable && \
	corepack prepare --activate pnpm@9.12.1 && \
	pnpm config -g set store-dir /pnpm/store && \
  npm install -g \
    turbo \
    node-gyp

COPY --chmod=755 apps/cms/docker/docker-entrypoint.sh /bin/docker-entrypoint
ENTRYPOINT [ "docker-entrypoint" ]

WORKDIR /pkrbt

FROM base AS build

COPY pnpm-lock.yaml /pkrbt
RUN pnpm fetch --prod --filter=api
COPY . /pkrbt

WORKDIR /pkrbt

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --filter=api --frozen-lockfile
RUN turbo prune --docker @pkrbt/cms
RUN pnpm deploy --filter=cms /prod/cms

WORKDIR /prod/cms
# RUN pnpm build

FROM base AS prod

USER node

COPY --link --from=build --chown=node:node /prod/cms /cms

WORKDIR /cms
EXPOSE 1337
VOLUME [ "/cms/public" ]

ENTRYPOINT [ "docker-entrypoint" ]
