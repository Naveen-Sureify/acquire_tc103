FROM node:18-alpine

COPY . /app

WORKDIR /app

RUN npm install -g nx
RUN yarn install --no-lockfile
RUN nx run-many --target=build --projects=xml,acquire-models,acquire-applications-api