# player-api-test

A simple Restful API - PLAYER Stats
exposing two GET requests on 'localhost:3000' or '127.0.0.1:3000'

1. GET /players
2. GET /players/<id> id (integer)

This project use Fastify

## Prerequisites

- You should make sure you are using you have node and yarn@3.6.0 installed
- A console to run commands
- A tool (Postman ...) or browser to make requests

## How to start the server

\*\* On terminal run :

1- First you need to install the project

```console
yarn install
```

2-a (For starting the server in build mode)

```console
yarn build && yarn start
```

2-b (For starting the server in dev watch mode)

```console
yarn start:dev
```

## How to run the tests

\*\* On terminal run :

```console
yarn test
```
