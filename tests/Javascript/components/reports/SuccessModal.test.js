import { mount } from '@vue/test-utils'
import createLocalVue from 'vue-cli-plugin-freshinup-ui/utils/testing/createLocalVue'
import Component from '~/components/reports/SuccessModal.vue'

describe('Export Modal', () => {
  let localVue

  beforeEach(() => {
    const vue = createLocalVue()
    localVue = vue.localVue
  })

  describe('Methods', () => {
    test('hide', async () => {
      const wrapper = mount(Component, {
        localVue,
        propsData: {
          value: true
        }
      })

      wrapper.vm.hide()
      expect(wrapper.emitted().change[0]).toEqual([false])
    })
  })

  describe('Visuals', () => {
    test('default', () => {
      const wrapper = mount(Component, { localVue })

      expect(wrapper.find('.v-dialog').isVisible()).toBe(false)
      expect(wrapper.element).toMatchSnapshot()
    })

    test('visible', async () => {
      const wrapper = mount(Component, {
        localVue,
        propsData: {
          value: true
        }
      })

      expect(wrapper.find('.v-dialog').isVisible()).toBe(true)
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
