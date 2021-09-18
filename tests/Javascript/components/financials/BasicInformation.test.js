import { mount } from '@vue/test-utils'
import Component from '~/components/financials/BasicInformation.vue'
import { FIXTURE_ELASTICSEARCH_DEAL } from 'tests/__data__/sales'

describe('BasicInformation', () => {
  describe('Snapshot', () => {
    test('default', async () => {
      const wrapper = mount(Component)
      await wrapper.vm.$nextTick()
      expect(wrapper.element).toMatchSnapshot()
    })
    test('with mocked data', async () => {
      const wrapper = mount(Component, {
        propsData: {
          pbsData: FIXTURE_ELASTICSEARCH_DEAL
        }
      })
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.f-basicInformation__dealId input').element.value).toEqual('4222ad753f914e20a4f7d63e5c4b35c0')
      expect(wrapper.find('.f-basicInformation__dealType input').element.value).toEqual('New - Trade In')
      expect(wrapper.find('.f-basicInformation__status input').element.value).toEqual('Delivered')
      expect(wrapper.element).toMatchSnapshot()
    })
  })
  describe('Computed', () => {
    test('dealType', async () => {
      const wrapper = mount(Component)
      expect(wrapper.vm.dealType).toEqual('')
      wrapper.setData({
        pbsData: {
          Vehicles: [{ IsNewVehicle: true }],
          Trades: []
        }
      })
      expect(wrapper.vm.dealType).toEqual('New')
      wrapper.setData({
        pbsData: {
          Vehicles: [{ IsNewVehicle: false }],
          Trades: []
        }
      })
      expect(wrapper.vm.dealType).toEqual('Used')
      wrapper.setData({
        pbsData: {
          Vehicles: [{ IsNewVehicle: true }],
          Trades: [{}]
        }
      })
      expect(wrapper.vm.dealType).toEqual('New - Trade In')
      wrapper.setData({
        pbsData: {
          Vehicles: [{ IsNewVehicle: false }],
          Trades: [{}]
        }
      })
      expect(wrapper.vm.dealType).toEqual('Used - Trade In')
    })
  })
})
