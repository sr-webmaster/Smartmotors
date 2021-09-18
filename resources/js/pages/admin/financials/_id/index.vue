<template>
  <v-container
    grid-list-lg
    fluid
  >
    <h2 class="f-page__title f-page__title--admin my-4">
      {{ pageTitle }}
    </h2>
    <v-layout
      row
      wrap
    >
      <v-flex
        lg8
        xs12
      >
        <f-expansion-panel title="Basic Information">
          <basic-information :pbs-data="pbsData" />
        </f-expansion-panel>
        <v-layout
          row
          wrap
        >
          <v-flex
            lg6
            xs12
          >
            <f-expansion-panel
              v-for="(data, index) in get(pbsData, 'Vehicles', [])"
              :key="index"
              title="Sold Vehicle"
            >
              <sold-vehicle
                :pbs-data="data"
                :vehicles="vehicles"
              />
            </f-expansion-panel>
          </v-flex>
          <v-flex
            lg6
            xs12
          >
            <f-expansion-panel
              v-for="(data, index) in get(pbsData, 'Trades', [])"
              :key="index"
              title="Trade in Vehicle"
            >
              <trade-in-vehicle
                :pbs-data="data"
                :vehicles="vehicles"
              />
            </f-expansion-panel>
          </v-flex>
        </v-layout>
        <f-expansion-panel title="Protection Products">
          <protection-products :pbs-data="pbsData" />
        </f-expansion-panel>
        <f-expansion-panel title="Financial Information">
          <financial-information :pbs-data="pbsData" />
        </f-expansion-panel>
        <f-expansion-panel title="Sales Compensation">
          <sales-compensation :pbs-data="pbsData" />
        </f-expansion-panel>
        <f-expansion-panel title="Orientation Specialist">
          <orientation-specialist :pbs-data="pbsData" />
        </f-expansion-panel>
      </v-flex>
      <v-flex
        lg4
        xs12
      >
        <f-expansion-panel title="Sale Details">
          <sale-details :pbs-data="pbsData" />
        </f-expansion-panel>
        <f-expansion-panel title="Customer Details">
          <customer-details
            :customer="customer"
          />
        </f-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import FExpansionPanel from '~/components/financials/ExpansionPanel.vue'
import BasicInformation from '~/components/financials/BasicInformation.vue'
import TradeInVehicle from '~/components/financials/TradeInVehicle.vue'
import SoldVehicle from '~/components/financials/SoldVehicle.vue'
import ProtectionProducts from '~/components/financials/ProtectionProducts.vue'
import FinancialInformation from '~/components/financials/FinancialInformation.vue'
import SalesCompensation from '~/components/financials/SalesCompensation.vue'
import OrientationSpecialist from '~/components/financials/OrientationSpecialist.vue'
import CustomerDetails from '@freshinup/deals-ui/src/components/CustomerDetails'
import SaleDetails from '~/components/financials/SaleDetails.vue'
import get from 'lodash/get'

export default {
  layout: 'admin-edit',
  components: {
    FExpansionPanel,
    BasicInformation,
    TradeInVehicle,
    SoldVehicle,
    ProtectionProducts,
    FinancialInformation,
    SalesCompensation,
    OrientationSpecialist,
    CustomerDetails,
    SaleDetails
  },
  async beforeRouteEnterOrUpdate (vm, to, from, next) {
    const id = to.params.id
    vm.$store.dispatch('page/setLoading', true)
    vm.$store.dispatch('page/setTitle', `Financial Reporting  - Detail #${id}`)
    try {
      await vm.$store.dispatch('sales/getItem', { params: { id } })
      vm.$store.dispatch('vehicles/setFilters', { ids: vm.vehiclesIds })
      await Promise.all([
        vm.$store.dispatch('vehicles/getItems'),
        vm.$store.dispatch('customers/getItem', { params: { id: vm.pbsData.BuyerRef } })
      ])
    } finally {
      vm.$store.dispatch('page/setLoading', false)
      if (next) next()
    }
  },
  computed: {
    ...mapGetters('page', { isLoading: 'isLoading', pageTitle: 'title' }),
    ...mapGetters('sales', { pbsData: 'item' }),
    ...mapGetters('vehicles', { vehicles: 'items' }),
    ...mapGetters('customers', { customer: 'item' }),
    vehiclesIds () {
      return get(this.pbsData, 'Vehicles', []).concat(get(this.pbsData, 'Trades', [])).map(item => item.VehicleRef)
    }
  },
  methods: {
    get
  }
}
</script>
