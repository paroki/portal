# Portal PKRBT

Portal Paroki Kristus Raja Barong Tongkok

- [live server](https://pkrbt.id/)
- [dev server](https://dev.pkrbt.id/)

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/paroki/portal/ci.yml?branch=main&style=flat-square)](https://github.com/paroki/portal/actions/workflows/ci.yml?branch=main)
[![Codecov](https://img.shields.io/codecov/c/github/paroki/portal?style=flat-square&label=coverage)](https://app.codecov.io/gh/paroki/portal)

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

#### Generate strapi API token

- Open [this url](https://localhost:1337) and login to strapi with:
  - email: **test@pkrbt.id**
  - password: **admin**
- Create new API Token ty opening [this url](http://localhost:1337/admin/settings/api-tokens/create).
- Copy API Token, and replace `STRAPI_READER_TOKEN` value in file `apps/web/.env` with copied value

#### Thats it

Happy coding!
