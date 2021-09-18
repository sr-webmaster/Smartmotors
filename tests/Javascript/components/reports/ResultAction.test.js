import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import Component from '~/components/reports/ResultAction.vue'

describe('ResultAction', () => {
  // Component instance "under test"
  let localVue
  describe('Snapshots', () => {
    test('defaults', () => {
      localVue = createLocalVue()
      const wrapper = mount(Component, {
        localVue: localVue,
        propsData: {
          dateBefore: 'Oct 7',
          dateAfter: 'Oct 13'
        }
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('Methods', () => {
    beforeEach(() => {
      localVue = createLocalVue()
    })

    test('dataVisibility function emitted data-visibility', () => {
      const wrapper = shallowMount(Component)
      wrapper.vm.dataVisibility()
      expect(wrapper.emitted()['data-visibility']).toBeTruthy()
    })

    describe('saveReport()', () => {
      test('emitted save-report', () => {
        const wrapper = shallowMount(Component)
        wrapper.vm.saveReport()
        expect(wrapper.emitted()['save-report']).toBeTruthy()
      })
    })

    test('exportReport function emitted export-report', () => {
      const wrapper = shallowMount(Component)
      wrapper.vm.exportReport('csv')
      expect(wrapper.emitted()['export-report']).toBeTruthy()
      expect(wrapper.emitted()['export-report'][0][0]).toEqual('csv')
    })
  })
})
