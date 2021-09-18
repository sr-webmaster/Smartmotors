import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { MAIN } from '../../../../.storybook/categories'

// Components
import ItemList from './ItemList.vue'

const items = [
  {
    _id: '1',
    _source: {
      uuid: '1',
      deal_date: 'July 19, 2019',
      deal_number: '7878979878',
      type: 'Used',
      lot: 'Main Used',
      sales_rep: 'John McSalesman',
      sale_price: 234000,
      invoice_price: 987000
    }
  },
  {
    _id: '2',
    _source: {
      uuid: '2',
      deal_date: 'July 19, 2019',
      deal_number: '7878979878',
      type: 'Used',
      lot: 'Main Used',
      sales_rep: 'John McSalesman',
      sale_price: 234000,
      invoice_price: 987000
    }
  },
  {
    _id: '3',
    _source: {
      uuid: '3',
      deal_date: 'July 19, 2019',
      deal_number: '7878979878',
      type: 'Used',
      lot: 'Main Used',
      sales_rep: 'John McSalesman',
      sale_price: 234000,
      invoice_price: 987000
    }
  },
  {
    _id: '4',
    _source: {
      uuid: '4',
      deal_date: 'July 19, 2019',
      deal_number: '7878979878',
      type: 'Used',
      lot: 'Main Used',
      sales_rep: 'John McSalesman',
      sale_price: 234000,
      invoice_price: 987000
    }
  }
]

const headers = [
  { text: 'Deal #', active: true, sortable: false, value: 'deal_number', align: 'left', class: 'font-weight-bold' },
  { text: 'Deal Written', active: true, sortable: false, value: 'deal_date', align: 'left', class: 'font-weight-bold' },
  { text: 'Type', active: true, sortable: false, value: 'type', align: 'left', class: 'font-weight-bold' },
  { text: 'Lot', active: true, sortable: false, value: 'lot', align: 'left', class: 'font-weight-bold' },
  { text: 'Sales rep', active: true, sortable: false, value: 'sales_rep', align: 'left', class: 'font-weight-bold' },
  { text: 'Sale Price', active: true, sortable: false, value: 'sale_price', align: 'right', class: 'font-weight-bold' },
  { text: 'Invoice Price', active: true, sortable: false, value: 'invoice_price', align: 'right', class: 'font-weight-bold' },
  { text: 'Manage', active: true, sortable: false, value: 'Manage', align: 'center' }
]

storiesOf(`${MAIN}|ItemList`, module)
  .addParameters({
    backgrounds: [
      { name: 'white', value: '#c5dbe3', default: true },
      { name: 'blue', value: '#205a80' }
    ]
  })
  .add('items array empty', () => {
    return {
      components: { ItemList },
      data () {
        return {
          items: [],
          headers
        }
      },
      template: `
          <v-container>
            <ItemList
              :items="items"
              :headers="headers"
            />
          </v-container>
      `
    }
  })
  .add('items is set', () => {
    return {
      components: { ItemList },
      data () {
        return {
          items,
          headers
        }
      },
      methods: {
        onClickView (params) {
          action('manage-view')(params)
        }
      },
      template: `
          <v-container>
            <ItemList
              :items="items"
              :headers="headers"
              @manage-view="onClickView"
            />
          </v-container>
      `
    }
  })
