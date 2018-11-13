import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Grid from '../components/Grid.vue'

export const items = [{
  url: 'https://picsum.photos/150/150',
  favorite: true
},
{
  url: 'https://picsum.photos/151/151'
},
{
  url: 'https://picsum.photos/152/152'
},
{
  url: 'https://picsum.photos/153/153'
},
{
  url: 'https://picsum.photos/154/154',
  favorite: true
},
{
  url: 'https://picsum.photos/155/155'
},
{
  url: 'https://picsum.photos/156/156',
  favorite: true
},
{
  url: 'https://picsum.photos/157/157'
},
{
  url: 'https://picsum.photos/158/158'
},
{
  url: 'https://picsum.photos/159/159'
},
{
  url: 'https://picsum.photos/160/160'
}]

export const methods = {
  onItemClicked: action('onItemClicked'),
  onItemFavoriteClicked: action('onItemFavoriteClicked')
}

storiesOf('Grid', module)
  .add('default', () => ({
    components: { Grid },
    template: '<grid :items="items" @item-clicked="onItemClicked" @item-favorite-clicked="onItemFavoriteClicked"/>',
    data: () => ({
      items
    }),
    methods
  }))

storiesOf('Grid', module)
  .add('2 cols', () => ({
    components: { Grid },
    template: '<grid :items="items" :number-of-cols="numberOfCols" @item-clicked="onItemClicked"/>',
    data: () => ({
      items: items,
      numberOfCols: 2
    }),
    methods
  }))
