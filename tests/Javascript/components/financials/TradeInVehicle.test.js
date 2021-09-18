import { mount } from '@vue/test-utils'
import Component from '~/components/financials/TradeInVehicle.vue'
import { FIXTURE_ELASTICSEARCH_DEAL } from 'tests/__data__/sales'
import { FIXTURE_ELASTICSEARCH_VEHICLES } from 'tests/__data__/vehicles'

describe('TradeInVehicle', () => {
  describe('Snapshot', () => {
    test('default', async () => {
      const wrapper = mount(Component)
      await wrapper.vm.$nextTick()
      expect(wrapper.element).toMatchSnapshot()
    })

    test('with mocked data', async () => {
      const wrapper = mount(Component, {
        propsData: {
          pbsData: FIXTURE_ELASTICSEARCH_DEAL.Trades[0],
          vehicles: FIXTURE_ELASTICSEARCH_VEHICLES
        }
      })
      await wrapper.vm.$nextTick()
      expect(wrapper.find('h3').text()).toEqual('USED TOYOTA RAV4 2017')
      expect(wrapper.find('.f-tradeInVehicle_mileage input').element.value).toEqual('25000')
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
