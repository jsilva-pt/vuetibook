import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import i18n from '../i18n'
import PetInfo from '../components/PetInfo.vue'

export const data = {
  name: 'Pepi',
  size: 'small',
  gender: 'male',
  age: 'young',
  breed: 'breed_1'
}

export const methods = {
  onPetFormSubmit: action('onPetFormSubmit')
}

storiesOf('PetInfo', module)
  .add('default', () => ({
    components: { PetInfo },
    template: `
      <pet-info
        :data="data"
        @pet-form-submit="onPetFormSubmit" />`,
    data: () => ({
      data
    }),
    methods,
    i18n
  }))
