# app
FROM node:10.14.1-alpine as app
WORKDIR /app
EXPOSE 8080
CMD yarn install && yarn serve

# storybook
FROM node:10.14.1-alpine as storybook
WORKDIR /app
EXPOSE 8081
CMD yarn install && yarn serve:storybook

# docs
FROM node:10.14.1-alpine as docs
WORKDIR /app
EXPOSE 8082
CMD yarn install && yarn docs:dev

# mock server
FROM node:10.14.1-alpine as mockserver
RUN npm install -g json-server
WORKDIR /data
EXPOSE 8090
CMD json-server --watch db.json --port 8090 --host 0.0.0.0
