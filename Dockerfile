FROM node:10.14.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./
COPY . .
RUN \
  yarn install && \
  yarn build

# production stage
FROM nginx:1.15.2-alpine as production-stage
COPY --from=build-stage /app/dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf
COPY ssl /etc/ssl
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
