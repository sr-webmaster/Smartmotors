<template>
  <v-card>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-select label="Specialist" />
          </v-flex>
          <v-flex md3>
            <v-select label="Delivery" />
          </v-flex>
          <v-flex md3>
            <v-switch label="Safety Set-up" />
          </v-flex>
          <v-flex md3>
            <v-select label="Safety" />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-switch label="Safety Upsell" />
          </v-flex>
          <v-flex md3>
            <v-select label="Upsell" />
          </v-flex>
          <v-flex md3>
            <vue-ctk-date-time-picker label="Service Appt Date" />
          </v-flex>
          <v-flex md3>
            <v-select label="Service Appt" />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-text-field
              label="Appt. Time"
              value="03:00 pm"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <vue-ctk-date-time-picker label="Follow-up Appt" />
          </v-flex>
          <v-flex md3>
            <v-select label="Follow-up" />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Total Compensation"
              value="$0.00"
              readonly
            />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md4>
            <v-textarea label="Comments" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

export default {
  components: {
    VueCtkDateTimePicker
  }
}
</script>
