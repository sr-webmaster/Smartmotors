import { createLocalVue, mount } from '@vue/test-utils'
import Component from '~/components/FilterLabel.vue'

describe('FilterLabel', () => {
  // Component instance "under test"
  let localVue
  describe('Snapshots', () => {
    test('defaults', () => {
      localVue = createLocalVue()
      const wrapper = mount(Component, {
        localVue: localVue
      })
      expect(wrapper.element).toMatchSnapshot()
    })
    test('color is black', () => {
      localVue = createLocalVue()
      const wrapper = mount(Component, {
        localVue: localVue,
        propsData: {
          color: 'black'
        }
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
