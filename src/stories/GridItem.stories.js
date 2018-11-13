import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import GridItem from '../components/GridItem.vue'

export const methods = {
  onFavoriteClicked: action('onFavoriteClicked')
}

storiesOf('GridItem', module)
  .add('default', () => ({
    components: { GridItem },
    template: `
      <grid-item
        url="https://picsum.photos/300/300"
        title="The item title"
        @favorite-clicked="onFavoriteClicked"
      />`,
    methods
  }))
  .add('with big title', () => ({
    components: { GridItem },
    template: `
      <grid-item
        url="https://picsum.photos/300/300"
        title="The item has a big big big title"
        @favorite-clicked="onFavoriteClicked"
      />`,
    methods
  }))
  .add('with favorite', () => ({
    components: { GridItem },
    template: `
      <grid-item
        url="https://picsum.photos/300/300"
        title="The item title"
        :is-favorite="true"
        @favorite-clicked="onFavoriteClicked"
      />`,
    methods
  }))
