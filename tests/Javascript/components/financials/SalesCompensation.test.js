import { mount } from '@vue/test-utils'
import Component from '~/components/financials/SalesCompensation.vue'

describe('SalesCompensation', () => {
  describe('Snapshot', () => {
    test('default', async () => {
      const wrapper = mount(Component)
      await wrapper.vm.$nextTick()
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
