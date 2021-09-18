import { mount } from '@vue/test-utils'
import createLocalVue from 'vue-cli-plugin-freshinup-ui/utils/testing/createLocalVue'
import Component from '~/components/reports/ExportModal.vue'

describe('Export Modal', () => {
  let localVue

  beforeEach(() => {
    const vue = createLocalVue()
    localVue = vue.localVue
  })

  describe('Methods', () => {
    test('exportReport emits export event with payload', () => {
      const wrapper = mount(Component, { localVue })

      wrapper.setData({
        option: 'usque'
      })

      wrapper.vm.exportReport()
      expect(wrapper.emitted().export).toHaveLength(1)
      expect(wrapper.emitted().export[0][0]).toEqual('usque')
    })
  })

  describe('Visuals', () => {
    test('default', () => {
      const wrapper = mount(Component, { localVue })

      expect(wrapper.find('.v-dialog').isVisible()).toBe(false)
      expect(wrapper.element).toMatchSnapshot()
    })

    test('click on export button', async () => {
      const wrapper = mount(Component, { localVue })

      wrapper.find('.sm-ReportsExportModal__activator').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.v-dialog').isVisible()).toBe(true)
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
