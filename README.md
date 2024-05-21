# Acquire TC103

[![Build](https://github.com/sureifylabs/acquire_tc103/actions/workflows/build.yml/badge.svg)](https://github.com/sureifylabs/acquire_tc103/actions/workflows/build.yml)

## Requirements

> See package.json engines
> ([nvm](https://github.com/nvm-sh/nvm) is a great tool for managing versions)

- node >= 18.17.0
- nvm >= 0.39.1
- npm >= 9.6.7
- nve >= 16.0.0
- yarn >= 1.22.19
- nx >= 15.9.2
  - python >= 3.9.6
- docker >= 23.0.5

## Structure

    .
    ├── dist                            # compiled files
    │   ├── acquire-applications-api
    │   ├── acquire-models
    │   └── xml
    ├── modules                         # modules or external applications
    ├── packages                        # source files
    │   ├── acquire-applications-api    # api for acquire applications (includes tc103 support)
    │   ├── acquire-models              # shared acquire database models
    │   └── xml                         # xml compilation tools (includes tc103 support)
    ├── tools                           # tools and utilities
    ├── LICENSE
    └── README.md

## Setup

Install or update `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Install `node`:

```bash
nvm install 18
nvm alias default 18
```

Install global node package dependencies, `yarn`, `nx`, `nve`:

```bash
npm install -g yarn nx nve
```

## Start

TL;DR

```bash
nx run --target=serve --project=xml --quiet
```

## Lint

```bash
nx run-many --target=lint --all
```

## Test

### Unit Test

```bash
yarn test # run tests once
yarn test --watch # watch tests
```

### Automation / E2E

... TODO

## Build

```bash
yarn build
```

- The API framework for acquire-api is [Nest JS](https://docs.nestjs.com/)
- Models and Migrations via [TypeORM](https://typeorm.io/)

## Migrate

Migration are generated in the acquire-api `src/migrations` folder.

```bash
yarn migration:create -n MyMigration
yarn migration:up
yarn migration:down
```

## Seed

Seed migrations are generated in the acquire-api `src/seeds` folder.

```bash
yarn seeds:create -n MySeed
yarn seeds:up
yarn seeds:down
```

<!-- ts-node --project=tsconfig.base.json ./node_modules/typeorm/cli.js -->

### Run with Docker

```bash
docker compose up
```

### Build Production Docker Image

```bash
docker compose -f docker-compose.production.yml build
```

# new repo
