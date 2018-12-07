# dev stage
FROM node:10.14.1-alpine as dev-stage
WORKDIR /app
EXPOSE 8080
CMD yarn install && yarn serve

# build stage
FROM node:10.14.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# production stage
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
