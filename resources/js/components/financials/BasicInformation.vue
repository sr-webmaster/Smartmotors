<template>
  <v-card>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout
          row
          wrap
        >
          <v-flex md6>
            <v-text-field
              label="Deal #"
              readonly
              class="f-basicInformation__dealId"
              :value="get(pbsData, 'DealId', '')"
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Deal Type"
              readonly
              class="f-basicInformation__dealType"
              :value="dealType"
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Status"
              readonly
              class="f-basicInformation__status"
              :value="get(pbsData, 'SystemStatus', '')"
            />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex md4>
            <v-text-field
              label="Date written"
              readonly
              class="f-basicInformation__contractDate"
              :value="date('ContractDate')"
            />
          </v-flex>
          <v-flex md4>
            <v-text-field
              label="Est. Delivery Date"
              readonly
              class="f-basicInformation__estDeliveryDate"
              :value="date('DeliveryDate')"
            />
          </v-flex>
          <v-flex md4>
            <v-text-field
              label="Delivery date"
              readonly
              class="f-basicInformation__deliveryDate"
              :value="date('SystemDeliveryDate')"
            />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex md3>
            <v-switch label="Secured Trade" />
          </v-flex>
          <v-flex md3>
            <v-switch label="Unfunded" />
          </v-flex>
          <v-flex md3>
            <v-switch label="Scheduled" />
          </v-flex>
          <v-flex md3>
            <v-switch label="Carry-over" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex md12>
            <v-textarea label="Notes" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-btn>Cancel</v-btn>
          <v-btn color="primary">
            Save Changes
          </v-btn>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import FormatDate from '@freshinup/core-ui/src/mixins/FormatDate'

export default {
  mixins: [ FormatDate ],
  props: {
    pbsData: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    dealType () {
      if (isEmpty(this.pbsData)) { return '' }
      const isNew = get(this.pbsData, 'Vehicles[0].IsNewVehicle', false)
      const isTradeIn = !isEmpty(get(this.pbsData, 'Trades', []))
      if (isNew && isTradeIn) { return 'New - Trade In' }
      if (!isNew && isTradeIn) { return 'Used - Trade In' }
      if (isNew) { return 'New' }
      return 'Used'
    }
  },
  methods: {
    get,
    date (key) {
      return this.formatDate(get(this.pbsData, key, '')) || ''
    }
  }
}
</script>
