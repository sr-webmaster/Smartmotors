import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '~/components/reports/SalesChart'

const salesData = {
  Statuses: [
    { key: 'cancelled', doc_count: 10 },
    { key: 'lead', doc_count: 20 },
    { key: 'delivered', doc_count: 30 },
    { key: 'prospect', doc_count: 40 },
    { key: 'sold', doc_count: 50 },
    { key: 'quote', doc_count: 60 }
  ],
  AccessoryGross: { value: 100000 },
  FinanceCharges: { value: 110000 },
  FinanceGross: { value: 120000 },
  DealGross: { value: 130000 }
}

const columnsData = {
  data: [
    { label: 'Delivered', red: 10, green: 20, blue: 30 },
    { label: 'Pending', red: 20, green: 30, blue: 40 },
    { label: 'Secured', red: 30, green: 40, blue: 50 },
    { label: 'Incoming', red: 30, green: 40, blue: 50 },
    { label: 'Order Out', red: 30, green: 40, blue: 50 },
    { label: 'Dead', red: 30, green: 40, blue: 50 }
  ],
  sets: [
    { field: 'red', color: 'red' },
    { field: 'green', color: 'green' },
    { field: 'blue', color: 'blue' }
  ]
}

const ringGraphData = {
  data: [
    { label: 'Delivered', value: 10 },
    { label: 'Pending', value: 20 },
    { label: 'Secured', value: 30 },
    { label: 'Incoming', value: 30 },
    { label: 'Order Out', value: 30 },
    { label: 'Dead', value: 30 }
  ]
}

describe('SalesChart', () => {
  let localVue

  describe('Snapshot', () => {
    test('default', () => {
      global.SVGPathElement = jest.fn()
      localVue = createLocalVue()

      const wrapper = shallowMount(Component, {
        propsData: {
          columnsData: columnsData,
          ringGraphData: ringGraphData
        },
        localVue: localVue
      })

      expect(wrapper.element).toMatchSnapshot()
    })
    test('with sales data', () => {
      global.SVGPathElement = jest.fn()
      localVue = createLocalVue()

      const wrapper = shallowMount(Component, {
        propsData: {
          salesData: salesData,
          columnsData: columnsData,
          ringGraphData: ringGraphData
        },
        localVue: localVue
      })

      expect(wrapper.text()).toContain('210')
      expect(wrapper.text()).toContain('50')
      expect(wrapper.text()).toContain('30')
      expect(wrapper.text()).toContain('60')
      expect(wrapper.text()).toContain('$100,000.00')
      expect(wrapper.text()).toContain('$110,000.00')
      expect(wrapper.text()).toContain('$120,000.00')
      expect(wrapper.text()).toContain('$130,000.00')
      expect(wrapper.element).toMatchSnapshot()
    })

    test('loading', () => {
      const wrapper = shallowMount(Component, {
        propsData: {
          isLoading: true
        }
      })

      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('Computed', () => {
    global.SVGPathElement = jest.fn()
    localVue = createLocalVue()

    const wrapper = shallowMount(Component, { localVue })
    wrapper.setData({ salesData })

    expect(wrapper.vm._salesData).toEqual([
      { title: 'Total Deals Written This period', value: 210 },
      { title: 'Total Deals Sold This period', value: 50 },
      { title: 'Total Deals Delivered This period', value: 30 },
      { title: 'Total Deals Quote This period', value: 60 },
      { title: 'Accessory Sales This period', value: 100000, money: true },
      { title: 'Finance Charges This period', value: 110000, money: true },
      { title: 'Finance Gross This period', value: 120000, money: true },
      { title: 'Gross Sales This period', value: 130000, money: true }
    ])
  })
})
