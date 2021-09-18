import { storiesOf } from '@storybook/vue'
import { MAIN } from '../../../../.storybook/categories'

// Components
import SalesChart from './SalesChart.vue'

const salesData = [
  { title: 'Total Deals Written This period', value: 415 },
  { title: 'Total Deals Scheduled This period', value: 398 },
  { title: 'Total Deals Delivered This period', value: 311 },
  { title: 'Total Deals Pending This period', value: 311 },
  { title: 'Accessory Sales This period', value: '$100,000' },
  { title: 'FI Gross Sales This period', value: '$100,000' },
  { title: 'Gross Sales This period', value: '$100,000' },
  { title: 'Total Gross This period', value: '$100,000' }
]

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

storiesOf(`${MAIN}|SalesChart`, module)
  .addParameters({
    backgrounds: [
      { name: 'default', value: '#f1f3f6', default: true }
    ]
  })
  .add('default', () => {
    return {
      components: { SalesChart },
      data () {
        return {
          columnsData: columnsData,
          ringGraphData: ringGraphData
        }
      },
      template: `
        <v-container>
          <sales-chart
            :salesData="salesData"
            :columnsData="columnsData"
            :ringGraphData="ringGraphData"
          />
        </v-container>
      `
    }
  })
  .add('with sales data', () => {
    return {
      components: { SalesChart },
      data () {
        return {
          salesData: salesData,
          columnsData: columnsData,
          ringGraphData: ringGraphData
        }
      },
      template: `
        <v-container>
          <sales-chart
            :salesData="salesData"
            :columnsData="columnsData"
            :ringGraphData="ringGraphData"
          />
        </v-container>
      `
    }
  })
