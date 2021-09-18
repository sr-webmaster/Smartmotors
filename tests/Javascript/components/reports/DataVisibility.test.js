import { mount } from '@vue/test-utils'
import createLocalVue from 'vue-cli-plugin-freshinup-ui/utils/testing/createLocalVue'
import Component from '~/components/reports/DataVisibility.vue'

const items = [
  { value: 'pensiero', text: 'Pensiero', active: true },
  { value: 'finitura', text: 'Finitura', active: true },
  { value: 'sopportare', text: 'Sopportare', active: true },
  { value: 'insegnare', text: 'Insegnare', active: false },
  { value: 'industria', text: 'Industria', active: false },
  { value: 'tenere', text: 'Tenere', active: false }
]

describe('Data Visibility', () => {
  let localVue

  beforeEach(() => {
    const vue = createLocalVue()
    localVue = vue.localVue
  })

  describe('Methods', () => {
    test('apply emits apply event with payload', () => {
      const wrapper = mount(Component, { localVue })

      wrapper.setData({ items })

      wrapper.vm.open()
      wrapper.vm.apply()
      expect(wrapper.emitted().apply).toHaveLength(1)
      expect(wrapper.emitted().apply[0]).toEqual([items])
    })
  })

  describe('Visuals', () => {
    test('default with mocked items', () => {
      const wrapper = mount(Component, {
        localVue,
        propsData: { items }
      })

      expect(wrapper.find('.v-navigation-drawer').classes()).toContain('v-navigation-drawer--close')
      expect(wrapper.element).toMatchSnapshot()
    })

    test('click on data visibility button', async () => {
      const wrapper = mount(Component, {
        localVue,
        propsData: { items }
      })

      wrapper.find('.sm-ReportsDataVisibility__activator').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.v-navigation-drawer').classes()).toContain('v-navigation-drawer--open')
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
