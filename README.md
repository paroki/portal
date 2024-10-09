# Portal PKRBT

Portal Paroki Kristus Raja Barong Tongkok

- [live server](https://pkrbt.id/)
- [dev server](https://dev.pkrbt.id/)

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/paroki/pkrbt/ci.yml?branch=next&style=flat-square)](https://github.com/paroki/pkrbt/actions/workflows/ci.yml?branch=next)
[![Codecov](https://img.shields.io/codecov/c/github/paroki/pkrbt?style=flat-square&label=coverage)](https://app.codecov.io/gh/paroki/pkrbt)

### TL;DR

#### Install turbo

```sh
cd path/to/project
npm install -g turbo
```

#### Copy configuration files

```sh
cd path/to/project
cp apps/strapi/.env.default apps/strapi/.env
cp apps/web/.env.default apps/web/.env
```

#### Install packages

```sh
cd path/to/project
pnpm install
```

#### Seeds api test data

```sh
cd path/to/project
pnpm seed:dev
```

#### Start dev servers

```sh
cd path/to/project
pnpm dev
```

# Strapi Credentials

- You can login to strapi in [this url](https://localhost:1337) with:
  - email: **test@pkrbt.id**
  - password: **admin**

# Thats It!

Happy coding!
