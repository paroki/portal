#syntax=docker/dockerfile:1.4

# Versions
FROM node:20-alpine AS node_upstream


# Base stage for dev and build
FROM node_upstream AS base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# hadolint ignore=DL3018
RUN apk add --no-cache libc6-compat

WORKDIR /srv/app

RUN corepack enable && \
	corepack prepare --activate pnpm@latest && \
	pnpm config -g set store-dir /.pnpm-store && \
  npm install -g turbo@^2 && \
  npm install -g node-gyp

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Delete the following line in case you want to enable telemetry during dev and build.
# ENV NEXT_TELEMETRY_DISABLED 1


# Development image
FROM base as dev

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME localhost

CMD ["sh", "-c", "pnpm install; pnpm dev"]


FROM base AS prod
ENV NODE_ENV production

COPY --link /pnpm-lock.yaml ./
RUN pnpm fetch --prod

COPY --link . .

RUN	pnpm install --filter=strapi... --frozen-lockfile --offline --prod && \
	pnpm run --filter=strapi... build

RUN addgroup --system --gid 1001 nodejs; \
	adduser --system --uid 1001 nodejs

# COPY --from=builder --link /srv/app/public ./public

# Set the correct permission for prerender cache
#RUN mkdir .next; \
#	chown nodejs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing

USER nodejs

EXPOSE 1337

ENV PORT 1337
ENV HOSTNAME "0.0.0.0"

WORKDIR /srv/app/apps/strapi

CMD ["pnpm", "start"]
