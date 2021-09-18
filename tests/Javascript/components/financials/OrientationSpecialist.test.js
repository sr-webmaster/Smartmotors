import { mount } from '@vue/test-utils'
import Component from '~/components/financials/OrientationSpecialist.vue'

describe('OrientationSpecialist', () => {
  describe('Snapshot', () => {
    test('default', async () => {
      const wrapper = mount(Component)
      await wrapper.vm.$nextTick()
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
