<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Nest Interceptor: Case Conversion

## Introduction

This project is a Nest.js interceptor that facilitates the serialization of objects into both camelCase and snake_case formats. It's designed to be used as middleware within a Nest.js application.

## Features

- Convert object keys from snake_case to camelCase.
- Convert object keys from camelCase to snake_case.
- Customizable case conversion for flexibility.
- Seamless integration with Nest.js applications.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

```

## Test

```bash
# unit tests
$ yarn run test
```

## License

Nest is [MIT licensed](LICENSE).
