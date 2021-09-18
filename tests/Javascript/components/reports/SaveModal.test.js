import { mount } from '@vue/test-utils'
import createLocalVue from 'vue-cli-plugin-freshinup-ui/utils/testing/createLocalVue'
import Component from '~/components/reports/SaveModal.vue'

describe('User Profile', () => {
  let localVue

  beforeEach(() => {
    const vue = createLocalVue()
    localVue = vue.localVue
  })

  describe('Methods', () => {
    test('save emits save event with payload', () => {
      const wrapper = mount(Component, { localVue })

      wrapper.setData({
        name: 'usque',
        modifierOne: 1,
        modifierTwo: 2
      })

      wrapper.vm.save()
      expect(wrapper.emitted().save).toHaveLength(1)
      expect(wrapper.emitted().save[0]).toEqual([{
        name: 'usque',
        modifier_1_id: 1,
        modifier_2_id: 2
      }])
    })
  })

  describe('Visuals', () => {
    test('mocked props', async () => {
      const wrapper = mount(Component, {
        localVue,
        propsData: {
          itemsOne: [
            { id: 1, name: 'usque' },
            { id: 2, name: 'bianco' }
          ],
          itemsTwo: [
            { id: 3, name: 'leggere' },
            { id: 4, name: 'mescolare' }
          ]
        }
      })
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.v-dialog').isVisible()).toBe(false)
      expect(wrapper.element).toMatchSnapshot()
    })

    test('click on save report button', async () => {
      const wrapper = mount(Component, {
        localVue,
        propsData: {
          itemsOne: [
            { id: 1, name: 'usque' },
            { id: 2, name: 'bianco' }
          ],
          itemsTwo: [
            { id: 3, name: 'leggere' },
            { id: 4, name: 'mescolare' }
          ]
        }
      })

      wrapper.find('.sm-ReportsSaveModal__activator').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.v-dialog').isVisible()).toBe(true)
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
