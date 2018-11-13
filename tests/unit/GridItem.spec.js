import { mount } from '@vue/test-utils'
import GridItem from '@/components/GridItem.vue'

describe('GridItem', () => {
  it('emits event when clicking the card', () => {
    const wrapper = mount(GridItem)

    wrapper.findAll('.material-icons').trigger('click')
    expect(wrapper.emitted()['favorite-clicked']).toBeTruthy()
  })
})
