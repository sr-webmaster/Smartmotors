import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import Component from '~/components/reports/ItemList.vue'
const FIXTURE_ITEMS = [
  {
    uuid: '1',
    deal_date: 'July 19, 2019',
    deal_number: '7878979878',
    type: 'Used',
    lot: 'Main Used',
    sales_rep: 'John McSalesman',
    customer: {
      id: '234525',
      name: 'John McSalesman'
    },
    sale_price: 234000,
    invoice_price: 987000
  }
]

const headers = [
  { text: 'Deal #', sortable: false, value: 'deal_number', align: 'left', class: 'font-weight-bold' },
  { text: 'Deal Written', sortable: false, value: 'deal_date', align: 'left', class: 'font-weight-bold' },
  { text: 'Type', sortable: false, value: 'type', align: 'left', class: 'font-weight-bold' },
  { text: 'Lot', sortable: false, value: 'lot', align: 'left', class: 'font-weight-bold' },
  { text: 'Sales rep', sortable: false, value: 'sales_rep', align: 'left', class: 'font-weight-bold' },
  { text: 'Customer', sortable: false, value: 'customer', align: 'left', class: 'font-weight-bold' },
  { text: 'Sale Price', sortable: false, value: 'sale_price', align: 'right', class: 'font-weight-bold' },
  { text: 'Invoice Price', sortable: false, value: 'invoice_price', align: 'right', class: 'font-weight-bold' },
  { text: 'Manage', sortable: false, value: 'manage', align: 'center' }
]

describe('ItemList', () => {
  // Component instance "under test"
  let localVue
  describe('Snapshots', () => {
    test('default', () => {
      localVue = createLocalVue()
      const wrapper = mount(Component, {
        localVue
      })
      expect(wrapper.element).toMatchSnapshot()
    })
    test('items set', () => {
      localVue = createLocalVue()
      const wrapper = mount(Component, {
        localVue: localVue,
        propsData: {
          items: FIXTURE_ITEMS,
          headers
        }
      })
      expect(wrapper.element).toMatchSnapshot()
    })
    test('item is empty', () => {
      localVue = createLocalVue()
      const wrapper = mount(Component, {
        localVue: localVue,
        propsData: {
          items: [],
          headers
        }
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })
  describe('Methods', () => {
    beforeEach(() => {
      localVue = createLocalVue()
    })
    test('onClickView() will emitted manage-view', () => {
      const wrapper = shallowMount(Component, {
        propsData: {
          items: FIXTURE_ITEMS,
          headers
        }
      })
      wrapper.vm.onClickView('123')
      expect(wrapper.emitted()['manage-view']).toBeTruthy()
      expect(wrapper.emitted()['manage-view'][0][0]).toEqual('123')
    })
  })
})
