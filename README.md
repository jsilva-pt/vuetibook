# vue-vuetify-storybook
Experimenting the integration between Vue.js, Vuetify and Storybook.

Some tools like Vue I18n and Vuex are also used in order to make the project similar
to what a real application would be.

## Dockerize for development
https://gist.github.com/jessedearing/2351836
https://superuser.com/questions/437330/how-do-you-add-a-certificate-authority-ca-to-ubuntu
``` bash
docker-compose up

http://localhost:8080/ # App
http://localhost:8081/ # Storybook
http://localhost:8082/ # Documentation
http://localhost:8090/ # Mock Server
```

## Local Installation

### Project setup
```
yarn install
```

### Available Commands

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

## Built With
### Base Tools
- [Vue.js](https://vuejs.org/)
- [Vue CLI 3](https://cli.vuejs.org/guide/)
- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Axios](https://github.com/axios/axios)
- [Storybook](https://storybook.js.org/)
- [Docker](https://www.docker.com/)

### Internationalization
- [Vue I18n](https://kazupon.github.io/vue-i18n/)

### Material Design
- [Vuetify](https://vuetifyjs.com/en/)

### mock Server
- [Mock Json Server](https://github.com/typicode/json-server)

### Analytics
- Google Tag Manager
- Google Analytics

### Testing
- [Vue Test Utils](https://vue-test-utils.vuejs.org/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

### Documentation
- [VuePress](https://vuepress.vuejs.org/)

## Versioning

We use [SemVer](http://semver.org/) for versioning and [Keep a Changelog](http://keepachangelog.com/) for the format of the ChangeLog. For the versions available, see the [tags on this repository](https://github.com/jsilva-pt/vue-vuetify-storybook/tags).
