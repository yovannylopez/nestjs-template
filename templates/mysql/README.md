# {{projectName}}

> {{projectDescription}}

This template has an users CRUD example with a MySQL database.

---

## Pre-reqs ⚙️

<p align="center">
  <img src="https://img.shields.io/static/v1.svg?label=Node&message=v >= 16.16.0&labelColor=339933&color=757575&logoColor=FFFFFF&logo=node.js" alt="Node.js website"/>
  <img src="https://img.shields.io/static/v1.svg?label=Npm&message=v >= 8.11.0&labelColor=CB3837&logoColor=FFFFFF&color=757575&logo=npm" alt="Npm website"/>
  <img src="https://img.shields.io/static/v1.svg?label=Nest&message=v >=9.0.4&labelColor=444&logoColor=FFFFFF&color=757575&logo=NestJs" alt="NestJS website"/>
  <img src="https://img.shields.io/static/v1.svg?label=Typescript&message=v >= 4.7.4&labelColor=0678cc&logoColor=FFFFFF&color=757575&logo=Typescript" alt="Typescript website"/>
</p>

---

## Contents 📦

- [Installation](#installation-⚙️)
- [Docker](#docker-🐳)
- [Database config](#database-config-⚙️)
- [Database migrations](#database-migrations-🗄️)
- [Running the app](#running-the-app-🚀)
- [Test](#test-🧪)
- [Linter](#linter-✅)
- [Debug config](#debug-config-🧐)
- [API Docs](#api-docs-🗒️)
- [Conventions](#conventions-🚩)
- [Microservice status](#microservice-status-🟢)

---

## Installation ⚙️

### 1. Clone repo

### 2. Entry

```shell
$ cd {{projectName}}
```

### 3. Install dependencies

```shell
$ npm install
```

---

⏪️ - [Back](#contents-📦)

---

## Docker 🐳

For checking the containers status and some details just run:

```shell
$ sudo docker-compose ps -a
```

```bash
# Compose the docker containers
$ npm run docker:up

# To down the docker containers
$ npm run docker:down

# To debug
$ npm run docker:debug
```

---

⏪️ - [Back](#contents-📦)

---

## Database config ⚙️

This microservice has persistence with a database in Amazon Aurora with MySQL driver.

Configure the following values ​​in each environment inside the config folder:

| Option      | local              | production         |
| ----------- | ------------------ | ------------------ |
| host        | localhost          | localhost          |
| port        | 3306               | 3306               |
| username    | root               |                    |
| password    | root               |                    |
| name        | {{projectName}}-db | {{projectName}}-db |
| autoload    | true               | false              |
| synchronize | true               | false              |

synchronize only can be true at local environment, production environment, should be false.

---

⏪️ - [Back](#contents-📦)

---

## Database migrations 🗄️

Create a migration file:

```bash
$ npm run db:create <create-example-table>
```

Execute migrations:

```bash
$ npm run db:migrate
```

Rollback migrations:

```bash
$ npm run db:rollback
```

---

⏪️ - [Back](#contents-📦)

---

## Running the app 🚀

```bash
# development mode
$ npm run start

# watch development mode (recommended)
$ npm run dev

# debug mode
$ npm run debug

# production mode
$ npm run start:prod
```

---

⏪️ - [Back](#contents-📦)

---

## Test 🧪

```bash
# unit/integration tests
$ npm run test

# test coverage
$ npm run coverage
```

<small>Note:<i>You can see the testing coverage report in the coverage folder.</i></small>

```bash
# Debug mode
$ npm run test:debug

# Watch mode
$ npm run test:watch
```

---

⏪️ - [Back](#contents-📦)

---

## Linter ✅

We use ESlint and Prettier.

```bash
# Lint and fix
$ npm run lint

# code format
$ npm run format
```

---

⏪️ - [Back](#contents-📦)

---

## Debug config 🧐

1. Add new file `./vscode/launch.json`

```json
{
  "configurations": [
    {
      "name": "Attach",
      "port": 9229,
      "request": "attach",
      "skipFiles": ["<node_internals>/**"],
      "type": "pwa-node"
    }
  ]
}
```

2. Define breakpoints

3. Run debug command

```shell
$ npm run debug
```

---

⏪️ - [Back](#contents-📦)

---

## API Docs 🗒️

### 1. Endpoints documentation

Swagger is a tool to design and document API's at scale. In this repo we use openapi v3.

Only enabled on develop and staging mode.

Start your app in local mode and visit: http://localhost:3000/api

### 2. Code documentation

Like NestJS, in this project we use Compodoc, a documentation tool for Angular. By documenting the code, members of the development team can easily understand the features of the application or library. Documentation is annotated using JSDoc.

#### 2.1 Generate documentation with:

```shell
$ npm run doc
```

#### 2.2 View documentation:

Visit: http://localhost:8080

---

⏪️ - [Back](#contents-📦)

---

## Conventions 🚩

View info:

- [Semantic versioning](https://semver.org/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)

---

⏪️ - [Back](#contents-📦)

---

## Microservice status 🟢

You can check the status of the microservice:

```curl
curl --location --request GET '{{service}}/api/health'
```

```curl
curl --location --request GET '{{service}}/api/version'
```

---

⏪️ - [Back](#contents-📦)

---

## Contributors 👷

- Yovanny López (Backend Developer)

---

## Copyright ©️

Copyright (C) {{year}}. All rights reserved.

License: MIT
