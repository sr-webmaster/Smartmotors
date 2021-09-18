import { mount } from '@vue/test-utils'
import BaseComponent from '~/components/financials/Vehicle.vue'
import { FIXTURE_ELASTICSEARCH_DEAL } from 'tests/__data__/sales'
import { FIXTURE_ELASTICSEARCH_VEHICLES } from 'tests/__data__/vehicles'

const Component = {
  extends: BaseComponent,
  template: '<div />'
}

describe('SoldVehicle', () => {
  describe('Computed', () => {
    test('vehicleName', async () => {
      const wrapper = mount(Component, {
        propsData: {
          pbsData: FIXTURE_ELASTICSEARCH_DEAL.Vehicles[0],
          vehicles: FIXTURE_ELASTICSEARCH_VEHICLES
        }
      })
      expect(wrapper.vm.vehicleName).toEqual('TOYOTA RAV4 2018')
    })
  })
})
