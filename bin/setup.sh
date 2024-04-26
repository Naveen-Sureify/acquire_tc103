#!/bin/bash

yarn install
docker compose pull

mkdir modules

git clone -b dev https://github.com/sureifylabs/acquire-app-web/ modules/acquire-frontend
rm -f modules/acquire-frontend/package-lock.json

cd modules/acquire-frontend && nve 16 yarn install

cd ../..

cp ./tools/life.co.api.config.json ./modules/acquire-frontend/server/api-config/life.co.api.config.json
