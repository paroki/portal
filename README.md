# Portal PKRBT

Portal Paroki Kristus Raja Barong Tongkok

- [live server](https://pkrbt.id/)
- [dev server](https://dev.pkrbt.id/)

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/paroki/portal/ci.yml?branch=main&style=flat-square)](https://github.com/paroki/portal/actions/workflows/ci.yml?branch=main)
[![Codecov](https://img.shields.io/codecov/c/github/paroki/portal?flag=pwa&style=flat-square&label=pwa-coverage)](https://app.codecov.io/gh/paroki/portal)

### Local Development

Install turbo

```sh
cd path/to/project
npm install -g turbo
```

Configure strapi

```sh
cd path/to/project
cp apps/strapi/.env.default apps/strapi/.env
```

Install packages

```sh
cd path/to/project
pnpm install
```

Start dev servers

```sh
cd path/to/project
pnpm dev
```
