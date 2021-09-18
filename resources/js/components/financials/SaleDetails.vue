<template>
  <v-card>
    <v-card-text>
      <h5>Final Sale Price:</h5>
      <v-alert
        :value="true"
        color="info"
        class="text-xs-center headline font-weight-bold f-saleDetails_salePrice"
      >
        {{ formatMoney(get(pbsData, 'Price')) }}
      </v-alert>
      <h5>List Sale Price:</h5>
      <v-alert
        :value="true"
        color="secondary"
        class="text-xs-center headline font-weight-bold f-saleDetails_listPrice"
      >
        {{ formatMoney(get(pbsData, 'FinanceInfo.MSRP')) }}
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script>
import FormatMoney from '@freshinup/core-ui/src/mixins/FormatMoney'
import get from 'lodash/get'

export default {
  mixins: [ FormatMoney ],
  props: {
    pbsData: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    get
  }
}
</script>
