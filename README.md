# vue-vuetify-storybook
Experimenting the integration between Vue.js, Vuetify and Storybook.

Vue I18n and Vuex are also used in order to make the project similar
to what a real application would be.

## Tools
- Vue.js
- Vuetify
- Vuex
- Vue Router
- Vue I18n
- Storybook
- VuePress
- Vue Test Utils
- Jest
- Cypress

## Project setup
```
yarn install
```

## Available Commands

``` bash
# Compiles and hot-reloads for development
yarn serve

# Compiles and minifies for production
yarn build

# Compiles and hot-reloads storybook for development
yarn serve:storybook

# Compiles and minifies storybook for production
yarn build:storybook

# Compiles and hot-reloads for development
yarn docs:dev

# Compiles and minifies for production
yarn docs:build

# Run unit tests
yarn test:unit
```

## Docker Available Commands

``` bash
docker build --target dev-stage -t my-app .
docker run -it -p 8080:8080 --rm -v $(pwd):/app my-app

or 

docker-compose up
```
