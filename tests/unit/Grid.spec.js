import { mount } from '@vue/test-utils'
import Grid from '@/components/Grid.vue'
import { items } from '@/stories/Grid.stories.js'

describe('Grid', () => {
  it('emits event when clicking the card', () => {
    const wrapper = mount(Grid, {
      propsData: { items }
    })

    const emitted = wrapper.emitted()

    wrapper.findAll('.grid-item').at(3).trigger('click')
    expect(emitted['item-clicked'][0]).toEqual([3])

    wrapper.findAll('.grid-item').at(5).trigger('click')
    expect(emitted['item-clicked'][1]).toEqual([5])
  })

  it('emits event when adding or removing from favorites', () => {
    const wrapper = mount(Grid, {
      propsData: { items }
    })

    const emitted = wrapper.emitted()

    wrapper.findAll('.grid-item').at(3).find('.material-icons').trigger('click')
    expect(emitted['item-favorite-clicked'][0]).toEqual([3])

    wrapper.findAll('.grid-item').at(5).find('.material-icons').trigger('click')
    expect(emitted['item-favorite-clicked'][1]).toEqual([5])
  })
})
