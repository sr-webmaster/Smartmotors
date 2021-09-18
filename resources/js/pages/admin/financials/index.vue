<template>
  <v-container
    grid-list-lg
    fluid
  >
    <success-modal
      v-model="successDialog"
    />
    <v-flex
      d-flex
      align-left
      justify-space-between
      ma-2
      mb-4
    >
      <h2 class="f-page__title f-page__title--admin">
        {{ pageTitle }}
      </h2>
      <v-flex text-xs-right>
        <v-btn
          color="primary"
          dark
        >
          Create Reports
        </v-btn>
        <v-btn
          :to="{ path: '/admin/financials/saved' }"
          type="default"
        >
          Saved Reports
        </v-btn>
      </v-flex>
    </v-flex>
    <v-divider />
    <v-card>
      <v-card-title>
        <v-flex
          px-2
        >
          Use the general parameters below to generate your report.
        </v-flex>
      </v-card-title>
      <v-card-text>
        <basic-filter
          :statuses="salesStatuses"
          :types="salesTypes"
          :lots="salesLots"
          :filters="filters"
          @generate="onFilter"
        />
      </v-card-text>
    </v-card>
    <v-flex
      my-4
    >
      <result-action
        :financial-modifiers="financialModifiers"
        :filters="filters"
        :save-loading="saveLoading"
        :headers="headers"
        @save-report="saveReport"
        @data-visibility="applyVisibility"
        @export-report="exportReport"
      />
    </v-flex>
    <v-flex
      my-4
    >
      <v-expansion-panel
        v-model="expansion"
        expand
      >
        <v-expansion-panel-content>
          <template v-slot:header>
            <div class="subheading font-weight-bold">
              Overview
            </div>
          </template>
          <v-divider />
          <sales-chart
            :is-loading="isLoading"
            :sales-data="salesAggregations"
          />
        </v-expansion-panel-content>
        <v-expansion-panel-content
          class="mt-4"
        >
          <template v-slot:header>
            <div
              v-if="sales"
              class="subheading"
            >
              <b>Showing {{ pagination.totalItems }} items</b>
            </div>
            <div class="text-xs-right">
              Tip: use the <b>Data visibility</b> settings to control the columns viewable
            </div>
          </template>
          <v-divider />
          <item-list
            :is-loading="isLoading || isListLoading"
            :items="sales"
            :headers="headers"
            :rows-per-page="rowsPerPage"
            :page="pagination.page"
            :total-items="pagination.totalItems"
            :sort-by="sorting.sortBy"
            :descending="sorting.descending"
            @paginate="onPaginate"
            @manage-view="goToDetails"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import BasicFilter from '~/components/reports/BasicFilter.vue'
import ResultAction from '~/components/reports/ResultAction.vue'
import SalesChart from '~/components/reports/SalesChart.vue'
import ItemList from '~/components/reports/ItemList.vue'
import SuccessModal from '~/components/reports/SuccessModal.vue'
import get from 'lodash/get'

export default {
  layout: 'admin-list',
  components: {
    BasicFilter,
    ResultAction,
    SalesChart,
    ItemList,
    SuccessModal
  },
  data () {
    return {
      rowsPerPage: 30,
      expansion: [ true, true ],
      successDialog: false,
      saveLoading: false,
      isListLoading: false,
      headers: [
        { text: 'Deal #', sortable: false, value: 'DealKey', class: 'text-xs-center', active: true },
        { text: 'Deal Type', sortable: false, value: 'DealType', class: 'text-xs-center', active: true },
        { text: 'Date Written', sortable: true, value: 'ContractDate', class: 'text-xs-center', active: true },
        { text: 'Payment Date', sortable: true, value: 'PaymentDate', class: 'text-xs-center', active: true },
        { text: 'Status', sortable: false, value: 'SystemStatus', class: 'text-xs-center', active: true },
        { text: 'Sale Type', sortable: false, value: 'SaleType', class: 'text-xs-center', active: true },
        { text: 'Tax Code', sortable: false, value: 'TaxCode', class: 'text-xs-center', active: false },
        { text: 'Price', sortable: true, value: 'Price', class: 'text-xs-center', active: true },
        { text: 'Invoice', sortable: true, value: 'TotalBalanceDue', class: 'text-xs-center', active: false },
        { text: 'Amortization Term', sortable: true, value: 'AmortizationTerm', class: 'text-xs-center', active: false },
        { text: 'Payment Term', sortable: true, value: 'PaymentTerm', class: 'text-xs-center', active: false },
        { text: 'Payments Per Year', sortable: true, value: 'PaymentsPerYear', class: 'text-xs-center', active: false },
        { text: 'Manage', sortable: false, value: 'Manage', class: 'text-xs-center', active: true }
      ]
    }
  },
  computed: {
    ...mapState('sales', {
      filters: state => state.filters
    }),
    ...mapGetters('page', { isLoading: 'isLoading', pageTitle: 'title' }),
    ...mapGetters(['currentUser']),
    ...mapGetters('sales', {
      sales: 'items',
      pagination: 'pagination',
      sorting: 'sorting',
      sortBy: 'sortBy',
      total: 'total'
    }),
    ...mapGetters('salesAggregations', {
      _salesAggregations: 'items'
    }),
    ...mapGetters('salesLots', { salesLots: 'items' }),
    ...mapGetters('salesStatuses', { salesStatuses: 'items' }),
    ...mapGetters('salesTypes', { salesTypes: 'items' }),
    ...mapGetters('financialModifiers', { financialModifiers: 'items' }),
    salesAggregations () {
      if (Array.isArray(this._salesAggregations)) return {}
      return this._salesAggregations
    },
    isLoading () {
      return get(this.$store, 'state.sales.pending.items', true) ||
        get(this.$store, 'state.salesAggregations.pending.items', true)
    }
  },
  methods: {
    ...mapActions('page', {
      setPageLoading: 'setLoading'
    }),
    onPaginate (value) {
      this.$store.dispatch('sales/patchFilters', value)
      this.$store.dispatch('sales/setPagination', value)
      this.$store.dispatch('sales/getItems')
    },
    onFilter (value) {
      this.$store.dispatch('sales/patchFilters', value)
      this.$store.dispatch('salesAggregations/patchFilters', value)
      this.$store.dispatch('sales/getItems')
      this.$store.dispatch('salesAggregations/getItems')
    },
    saveReport (data) {
      this.saveLoading = true
      return this.$store.dispatch('financialReports/createItem', { data })
        .then((result) => {
          this.successDialog = true
        })
        .finally(() => {
          this.saveLoading = false
        })
    },
    goToDetails (uuid) {
      let route = this.$router.resolve({ path: `/admin/financials/${uuid}` })
      window.open(route.href, '_blank')
    },
    applyVisibility (data) {
      this.headers = data
    },
    exportReport (filetype) {
      return this.$store.dispatch('sales/export/createItem', {
        data: {
          filetype,
          headers: this.headers.filter(h => h.active).map(h => h.value),
          filter: this.$store.state.sales.filters
        }
      }).then(response => {
        window.open(response.data, '_blank')
        return response.data
      })
    }
  },
  /**
   * Stateless Static method; immutable and must receive the instance of the VueModel (vm)
   * @param vm
   * @param to
   * @param from
   * @param next
   */
  beforeRouteEnterOrUpdate (vm, to = {}, from = {}, next) {
    const queryParams = get(to, 'query', {})
    const urlFilters = {
      ...queryParams,
      status: queryParams.status ? queryParams.status.split(',') : null
    }
    vm.$store.dispatch('page/setLoading', true)
    vm.$store.dispatch('page/setTitle', 'Financial Reporting')
    vm.$store.dispatch('sales/patchFilters', urlFilters)
    vm.$store.dispatch('salesAggregations/patchFilters', urlFilters)
    Promise.all([
      vm.$store.dispatch('salesLots/getItems'),
      vm.$store.dispatch('salesStatuses/getItems'),
      vm.$store.dispatch('salesTypes/getItems'),
      vm.$store.dispatch('salesAggregations/getItems'),
      vm.$store.dispatch('financialModifiers/getItems')
    ]).then(() => {
      vm.$store.dispatch('page/setLoading', false)
      if (next) next()
    })
  }
}
</script>
