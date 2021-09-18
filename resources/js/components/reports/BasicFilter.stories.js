import { action } from '@storybook/addon-actions'
import { withKnobs, number } from '@storybook/addon-knobs'
import { MAIN } from '../../../../.storybook/categories'
import { resetRoutes } from 'tests/PageStoryInstances'
import { FIXTURE_SALES_TYPES } from 'tests/__data__/salesTypes'

// Components
import BasicFilter from './BasicFilter.vue'

const FILTERS_NULL = {
  status: null,
  type: null,
  lot: null,
  sales_rep_uuid: null,
  customer_uuid: null,
  date_after: null,
  date_before: null
}

const FILTERS_DATE_RANGE = {
  status: null,
  type: null,
  lot: null,
  sales_rep_uuid: null,
  customer_uuid: null,
  date_after: '2019-01-08',
  date_before: '2019-01-08'
}

const STATUSES = [
  { id: 1, text: 'Active' },
  { id: 2, text: 'Pending' },
  { id: 3, text: 'Deferred' },
  { id: 4, text: 'Closed' }
]

const types = FIXTURE_SALES_TYPES

const lots = [
  { id: 1, name: 'lot1' },
  { id: 2, name: 'lot2' },
  { id: 3, name: 'lot3' },
  { id: 4, name: 'lot4' }
]

export default {
  title: `${MAIN}|BasicFilter`,
  id: 'BasicFilter',
  decorators: [
    withKnobs,
    () => ({
      template: `
        <v-container grid-list-md>
          <story />
        </v-container>
      `,
      beforeMount () {
        resetRoutes([
          {
            path: /.*\/users.*/gi,
            GET: [200, {
              data: [
                { id: 1, name: 'User 1' },
                { id: 2, name: 'User 2' },
                { id: 3, name: 'User 3' },
                { id: 4, name: 'User 4' }
              ]
            }]
          },
          {
            path: /.*\/sales.*/gi,
            GET: [200, {
              data: [
                { id: 1, name: 'Sale 1' },
                { id: 2, name: 'Sale 2' },
                { id: 3, name: 'Sale 3' },
                { id: 4, name: 'Sale 4' }
              ]
            }]
          }
        ])
      }
    })
  ]
}

/**
 * https://storybook.js.org/docs/guides/guide-vue/#step-4-write-your-stories
 */
export const SetFiltersNullValues = () => ({
  components: { BasicFilter },
  data () {
    return {
      filters: FILTERS_NULL
    }
  },
  methods: {
    generate (params) {
      action('generate')(params)
    }
  },
  template: `
      <basic-filter
          :filters="filters"
          @generate="generate"
      />
    `
})

export const WithFiltersValues = () => ({
  components: { BasicFilter },
  props: {
    _status: {
      default: number('Status', 2)
    },
    _type: {
      default: number('Type', 2)
    },
    _lot: {
      default: number('Lot', 2)
    },
    _sales_rep_uuid: {
      default: number('Sales Rep', 2)
    },
    _customer_uuid: {
      default: number('Customer', 2)
    }
  },
  data () {
    return {
      statuses: STATUSES,
      types: types,
      lots: lots
    }
  },
  computed: {
    filters () {
      return {
        status: this._status,
        type: this._type,
        lot: this._lot,
        sales_rep_uuid: this._sales_rep_uuid,
        customer_uuid: this._customer_uuid,
        date_after: '2019-01-01',
        date_before: '2020-03-26'
      }
    }
  },
  methods: {
    generate (params) {
      action('generate')(params)
    }
  },
  template: `
      <v-container>
        <basic-filter
          :filters="filters"
          :statuses="statuses"
          :types="types"
          :lots="lots"
          @generate="generate"
        />
      </v-container>
    `
})

export const DateRangeFiltersValues = () => ({
  components: { BasicFilter },
  data () {
    return {
      filters: FILTERS_DATE_RANGE
    }
  },
  methods: {
    generate (params) {
      action('generate')(params)
    }
  },
  template: `
      <v-container>
        <basic-filter
            :filters="filters"
            @generate="generate"
        />
      </v-container>
    `
})
