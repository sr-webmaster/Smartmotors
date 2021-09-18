import { mount } from '@vue/test-utils'
import Component from '~/components/financials/FinancialInformation.vue'
import { FIXTURE_ELASTICSEARCH_DEAL } from 'tests/__data__/sales'

describe('FinancialInformation', () => {
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
      expect(wrapper.find('.f-financialInfo_salePrice').text()).toEqual('$33,145.00')
      expect(wrapper.find('.f-financialInfo_invoice').text()).toEqual('$39,078.00')
      expect(wrapper.find('.f-financialInfo_listPrice input').element.value).toEqual('$31,490.00')
      expect(wrapper.find('.f-financialInfo_accessoryRetail input').element.value).toEqual('$0.00')
      expect(wrapper.find('.f-financialInfo_fiManager input').element.value).toEqual('NARAYANAN KUTTY')
      expect(wrapper.find('.f-financialInfo_fiGross input').element.value).toEqual('$911.83')
      expect(wrapper.find('.f-financialInfo_lender input').element.value).toEqual('TD FINANCING SERVICES INC')
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
