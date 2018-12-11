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
