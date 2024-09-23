# Alpine image
FROM node:20-alpine AS base

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
	corepack prepare --activate pnpm@latest && \
	pnpm config -g set store-dir /pnpm/store && \
  npm install -g \
    turbo \
    node-gyp

FROM base AS build

RUN mkdir /pkrbt
COPY --link pnpm-lock.yaml /pkrbt
WORKDIR /pkrbt
RUN pnpm fetch --prod --filter=strapi
COPY --link . /pkrbt

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --filter=strapi --frozen-lockfile
RUN turbo prune --docker strapi
RUN pnpm deploy --filter=strapi /prod/strapi

WORKDIR /prod/strapi
RUN pnpm build

FROM base AS prod
COPY --from=build --chown=node:node /prod/strapi /strapi
USER node
WORKDIR /strapi
EXPOSE 1337
CMD [ "pnpm", "start" ]
