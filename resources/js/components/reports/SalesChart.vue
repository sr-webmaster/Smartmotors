<template>
  <v-progress-linear
    v-if="isLoading"
    :indeterminate="true"
  />
  <div v-else>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="item in _salesData"
        :key="item.title"
        sm3
        :class="{'pa-2': $vuetify.breakpoint.smAndUp, 'mt-2': $vuetify.breakpoint.xs}"
      >
        <v-card class="px-1 py-3 text-xs-center">
          <div class="card-title ellipsis-text">
            {{ item.title }}
          </div>
          <div class="headline pt-1">
            {{ item.money ? formatMoney(item.value, { format: '$0,0.00', precision: 2 }) : item.value }}
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-if="columnsData"
        sm7
        :class="{'pa-2': $vuetify.breakpoint.smAndUp, 'mt-2': $vuetify.breakpoint.xs}"
      >
        <div class="card-title">
          Total Sales By Status / Location
        </div>
        <columns
          :chart-data="columnsData"
        />
      </v-flex>
      <v-flex
        :class="{'pa-2': $vuetify.breakpoint.smAndUp, 'mt-2': $vuetify.breakpoint.xs}"
      >
        <div class="card-title">
          Total Sales by Status
        </div>
        <ring-graph
          :chart-data="ringGraphData"
        />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Columns from '~/components/charts/Columns'
import RingGraph from '~/components/charts/RingGraph'
import FormatMoney from '@freshinup/core-ui/src/mixins/FormatMoney'
import get from 'lodash/get'
import capitalize from 'lodash/capitalize'

export default {
  components: {
    Columns,
    RingGraph
  },
  mixins: [FormatMoney],
  props: {
    salesData: {
      type: Object,
      default: () => ([])
    },
    /**
     * Please rename me later - this is actually going to be used for the Bar Charts
     */
    columnsData: {
      type: Object,
      default: null
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _salesData () {
      return [
        { title: 'Total Deals Written This period', value: this.dealsCount },
        { title: 'Total Deals Sold This period', value: this.statusCount('sold') },
        { title: 'Total Deals Delivered This period', value: this.statusCount('delivered') },
        { title: 'Total Deals Quote This period', value: this.statusCount('quote') },
        { title: 'Accessory Sales This period', value: get(this.salesData, 'AccessoryGross.value', ''), money: true },
        { title: 'Finance Charges This period', value: get(this.salesData, 'FinanceCharges.value', ''), money: true },
        { title: 'Finance Gross This period', value: get(this.salesData, 'FinanceGross.value', ''), money: true },
        { title: 'Gross Sales This period', value: get(this.salesData, 'DealGross.value', ''), money: true }
      ]
    },
    dealsCount () {
      if (!this.salesData.Statuses) { return 0 }
      return this.salesData.Statuses.reduce((prev, cur) => prev + cur.doc_count, 0)
    },
    ringGraphData () {
      return {
        data: get(this.salesData, 'Statuses', []).map(item => ({
          label: capitalize(item.key),
          value: item.doc_count
        }))
      }
    }
  },
  methods: {
    statusCount (status) {
      if (!this.salesData.Statuses) { return 0 }
      return get(this.salesData.Statuses.find(item => item.key === status), 'doc_count', 0)
    }
  }
}
</script>
<style lang="styl" scoped>
  .card-title{
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .ellipsis-text{
    height: 40px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
