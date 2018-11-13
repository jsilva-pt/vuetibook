import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Vue from 'vue'
import { VTextField, VBtn, VSelect } from 'vuetify/lib'

import 'vuetify/src/stylus/app.styl'

import i18n from '../i18n'
import store from '../store'

import PetForm from '../components/PetForm.vue'

Vue.component('v-text-field', VTextField)
Vue.component('v-select', VSelect)
Vue.component('v-btn', VBtn)

export const data = {
  pet: 'dog',
  name: 'Pepi',
  size: 'small',
  gender: 'male',
  age: 'young',
  breed: 'breed_1'
}

export const methods = {
  onPetFormSubmit: action('onPetFormSubmit')
}

storiesOf('PetForm', module)
  .addDecorator(() => ({
    template: '<v-app><story/></v-app>'
  }))
  .add('create', () => ({
    components: { PetForm },
    template: `
      <pet-form
        @pet-form-submit="onPetFormSubmit" />`,
    methods,
    i18n,
    store
  }))
  .add('edit', () => ({
    components: { PetForm },
    template: `
      <pet-form
        :data="data"
        @pet-form-submit="onPetFormSubmit" />`,
    data: () => ({
      data
    }),
    methods,
    i18n,
    store
  }))
  .add('loading sizes', () => ({
    components: { PetForm },
    template: `
      <pet-form
        @pet-form-submit="onPetFormSubmit" />`,
    methods,
    i18n,
    store
  }))
