import { mount } from '@vue/test-utils'
import Component from '~/components/financials/SaleDetails.vue'
import { FIXTURE_ELASTICSEARCH_DEAL } from 'tests/__data__/sales'

describe('SaleDetails', () => {
  describe('Snapshot', () => {
    test('default', async () => {
      const wrapper = mount(Component)
      await wrapper.vm.$nextTick()
      expect(wrapper.element).toMatchSnapshot()
    })
  })
  test('with mocked data', async () => {
    const wrapper = mount(Component, {
      propsData: {
        pbsData: FIXTURE_ELASTICSEARCH_DEAL
      }
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.f-saleDetails_salePrice').text()).toEqual('$33,145.00')
    expect(wrapper.find('.f-saleDetails_listPrice').text()).toEqual('$31,490.00')
    expect(wrapper.element).toMatchSnapshot()
  })
})
