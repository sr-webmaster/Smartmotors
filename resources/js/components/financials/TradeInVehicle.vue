<template>
  <v-card>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout column>
          <v-flex>
            <h3 class="primary--text">
              USED {{ vehicleName }}
            </h3>
          </v-flex>
          <v-flex>
            <v-text-field
              label="Trade Allowance"
              class="f-tradeInVehicle_allowance"
              :value="formatMoney(get(pbsData, 'Allowance'))"
              readonly
            />
          </v-flex>
          <v-flex>
            <v-text-field
              label="Trade ACV"
              class="f-tradeInVehicle_ACV"
              :value="formatMoney(get(pbsData, 'ActualCashValue'))"
              readonly
            />
          </v-flex>
          <v-flex>
            <v-text-field
              label="Trade Difference"
              class="f-tradeInVehicle_difference"
              readonly
            />
          </v-flex>
          <v-flex>
            <v-text-field
              label="Mileage"
              class="f-tradeInVehicle_mileage"
              :value="get(pbsData, 'Odometer', '')"
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

export default {
  extends: Vehicle
}
</script>
