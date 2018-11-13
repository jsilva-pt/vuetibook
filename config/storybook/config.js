/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue'
import { configure } from '@storybook/vue'
import Vuetify, { VApp } from 'vuetify/lib'

import 'vuetify/src/stylus/app.styl'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.component('v-app', VApp)

const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
