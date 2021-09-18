<template>
  <v-card>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout column>
          <v-flex>
            <h3 class="primary--text">
              {{ type }} {{ vehicleName }}
            </h3>
            <v-chip
              color="info"
              text-color="white"
              small
            >
              Stock #: {{ get(pbsData, 'StockNumber', '') }}
            </v-chip>
          </v-flex>
          <v-flex>
            <v-text-field
              label="VIN #"
              class="f-soldVehicle_VIN"
              :value="get(vehicle, 'VIN', '')"
              readonly
            />
          </v-flex>
          <v-flex>
            <v-text-field
              label="Days in stock"
              class="f-soldVehicle_daysInStock"
              readonly
            />
          </v-flex>
          <v-flex>
            <v-text-field
              label="Mileage"
              class="f-soldVehicle_mileage"
              :value="get(pbsData, 'SaleOdometer', '')"
              readonly
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import Vehicle from './Vehicle'
import isEmpty from 'lodash/isEmpty'

export default {
  extends: Vehicle,
  computed: {
    type () {
      if (isEmpty(this.pbsData)) return ''
      return this.pbsData.IsNewVehicle ? 'NEW' : 'USED'
    }
  }
}
</script>
