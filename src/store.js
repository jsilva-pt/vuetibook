import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sizes: {
      dog: [
        { code: 'small', label: 'sizes.small' },
        { code: 'medium', label: 'sizes.medium' },
        { code: 'large', label: 'sizes.large' }
      ],
      cat: [
        { code: 'small', label: 'sizes.small' }
      ]
    },
    ages: {
      dog: [
        { code: 'puppy', label: 'ages.puppy' },
        { code: 'young', label: 'ages.young' },
        { code: 'adult', label: 'ages.adult' },
        { code: 'senior', label: 'ages.senior' }
      ],
      cat: [
        { code: 'kitten', label: 'ages.kitten' },
        { code: 'young', label: 'ages.young' },
        { code: 'adult', label: 'ages.adult' },
        { code: 'senior', label: 'ages.senior' }
      ]
    },
    breeds: {
      dog: [
        { code: 'breed_1', label: 'Breed_1' },
        { code: 'breed_2', label: 'Breed_2' },
        { code: 'breed_3', label: 'Breed_3' }
      ],
      cat: [
        { code: 'breed_1', label: 'Breed_1' },
        { code: 'breed_2', label: 'Breed_2' },
        { code: 'breed_3', label: 'Breed_3' }
      ]
    },
    hairs: {
      cat: [
        { code: 'short', label: 'hairs.short' },
        { code: 'medium', label: 'hairs.medium' },
        { code: 'long', label: 'hairs.long' }
      ]
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    sizes: state => state.sizes,
    ages: state => state.ages,
    breeds: state => state.breeds,
    hairs: state => state.hairs
  }
})
