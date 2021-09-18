import { mount } from '@vue/test-utils'
import Component from '~/components/financials/DeliveryDetails.vue'

describe('DeliveryDetails', () => {
  describe('Snapshot', () => {
    test('default', async () => {
      const wrapper = mount(Component)
      await wrapper.vm.$nextTick()
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
