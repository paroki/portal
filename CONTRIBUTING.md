# Contributing to Paroki Portal

## Development setup

### Fork

Pastikan anda telah menginstall aplikasi `gh`

```sh
# Ubuntu/WSL
gh --version
```

Jika belum install gh dengan menggunakan command:

```sh
# Ubuntu/WSL
sudo apt update
sudo apt install gh
```

Jika gh belum login maka gunakan command berikut:

```sh
# login gh cli
gh auth login
```

Pilih GitHub.com, SSH, n, dan Paste authentication token

Fork repository paroki/portal:

```sh
cd path/to/codes
gh repo fork paroki/portal --fork-name youusername/pkrbt-portal --clone
```

### Install

```sh
pnpm install
```

### Start dev server

Perintah ini akan menstart strapi dan pwa (nextjs):

```sh
pnpm dev
```

## Development

Buat branch baru dengan nama misalnya wip (work in progress):

```sh
cd path/to/codes/pkrbt-portal

# sync paroki/portal to yourusername/pkrbt-portal
git pull upstream main
git push upstream main

# buat branch baru
git checkout -b wip
```

## Testing

```sh
cd path/to/codes/pkrbt-portal
# unit testing
pnpm test
```

## e2e Testing

```sh
cd path/to/codes/pkrbt-portal
# start server jika belum di start
pnpm dev
# e2e testing command
pnpm e2e
```

## Pull request

Commit perubahan kode:

```sh
cd path/to/codes/pkrbt-portal

git add . -A
git commit -am "your commit message"
git push origin main
```

Perhatikan balasan pesan dari server, ada kata kata `create new pull request bla bla bla`
ikuti link tersebut untuk membuat pull request baru.

Pastikan pull request anda ada di [halaman ini](https://github.com/paroki/portal/pulls)

## Commit Message

Sedapat mungkin gunakan pesan commit dengan standar [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/), misalnya:

Penjelasan:

- `fix`: bug fix
- `feat`: new feature
- `docs`: change in the documentation
- `spec`: spec change
- `test`: test-related change
- `perf`: performance optimization
- `ci`: CI-related change
- `chore`: updating dependencies and related changes

Examples:

    fix(pwa): diperbaiki error pada halaman /sakramen

    feat(pwa): fitur validasi username

    docs(pwa): diperbaiki typo pada README.md

    test(pwa): ditambahkan unit test untuk komponen JadwalMisa
