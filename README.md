# vuetibook

![David](https://img.shields.io/david/jsilva-pt/vuetibook.svg)
[![HitCount](http://hits.dwyl.io/j-silva/vuetibook.svg)](http://hits.dwyl.io/j-silva/vuetibook)
![GitHub All Releases](https://img.shields.io/github/downloads/jsilva-pt/vuetibook/total.svg)

Experimenting the integration between Vue.js, Vuetify and Storybook.

Some tools like Vue I18n and Vuex are also used in order to make the project similar
to what a real application would be.

## Deployed on Netlify
- [![Netlify Status](https://api.netlify.com/api/v1/badges/27f26b57-41de-4cc7-8e15-b1db81235862/deploy-status)](https://app.netlify.com/sites/vuetibook/deploys) https://vuetibook.netlify.com
- [![Netlify Status](https://api.netlify.com/api/v1/badges/fc4b6992-770b-447f-af8c-b77722e85ab9/deploy-status)](https://app.netlify.com/sites/components-vuetibook/deploys) https://components-vuetibook.netlify.com
- [![Netlify Status](https://api.netlify.com/api/v1/badges/faac7f1b-8957-4cc1-8193-ea2843dd6ff1/deploy-status)](https://app.netlify.com/sites/docs-vuetibook/deploys) https://docs-vuetibook.netlify.com

## Dockerize for development
``` bash
docker-compose up
```

- App: http://vuetibook.local:8080/
- Storybook: http://components.vuetibook.local:8080/
- Documentation: http://docs.vuetibook.local:8080/
- Mock Server: http://mocks.vuetibook.local:8080/


## Local Installation

### Project setup
``` bash
# app & storybook
yarn install

# docs
cd docs
yarn install

# mocks
cd mocks
yarn install
```

### Available Commands

``` bash
# app
yarn serve # Compiles and hot-reloads for development
yarn build # Compiles and minifies for production

# Storybook
yarn serve:storybook # Compiles and hot-reloads for development
yarn build:storybook # Compiles and minifies for production

# Run unit tests
yarn test:unit

# Documentation
cd docs
yarn serve:docs # Compiles and hot-reloads for development
yarn build:docs # Compiles and minifies for production

# Mock Server
cd mocks
yarn serve # Hot-reloads for development
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

We use [SemVer](http://semver.org/) for versioning and [Keep a Changelog](http://keepachangelog.com/) for the format of the ChangeLog. For the versions available, see the [tags on this repository](https://github.com/jsilva-pt/vuetibook/tags).
