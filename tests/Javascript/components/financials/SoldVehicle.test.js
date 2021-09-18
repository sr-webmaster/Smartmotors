import { mount } from '@vue/test-utils'
import Component from '~/components/financials/SoldVehicle.vue'
import { FIXTURE_ELASTICSEARCH_DEAL } from 'tests/__data__/sales'
import { FIXTURE_ELASTICSEARCH_VEHICLES } from 'tests/__data__/vehicles'

describe('SoldVehicle', () => {
  describe('Snapshot', () => {
    test('default', async () => {
      const wrapper = mount(Component)
      await wrapper.vm.$nextTick()
      expect(wrapper.element).toMatchSnapshot()
    })
    test('with mocked data', async () => {
      const wrapper = mount(Component, {
        propsData: {
          pbsData: FIXTURE_ELASTICSEARCH_DEAL.Vehicles[0],
          vehicles: FIXTURE_ELASTICSEARCH_VEHICLES
        }
      })
      await wrapper.vm.$nextTick()
      expect(wrapper.find('h3').text()).toEqual('NEW TOYOTA RAV4 2018')
      expect(wrapper.find('.v-chip').text()).toContain('M464621')
      expect(wrapper.find('.f-soldVehicle_VIN input').element.value).toEqual('JTMBFREV6HJ116034')
      expect(wrapper.find('.f-soldVehicle_mileage input').element.value).toEqual('0')
      expect(wrapper.element).toMatchSnapshot()
    })
  })
  describe('Computed', () => {
    test('type used', async () => {
      const wrapper = mount(Component, {
        propsData: {
          pbsData: FIXTURE_ELASTICSEARCH_DEAL.Vehicles[1]
        }
      })
      expect(wrapper.vm.type).toEqual('USED')
    })
  })
})
