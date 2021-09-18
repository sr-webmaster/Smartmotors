<template>
  <v-card>
    <v-card-text>
      <v-container grid-list-md>
        <h3 class="primary--text">
          TCUV Warranty
          <v-chip
            color="info"
            text-color="white"
            small
          >
            Certificate #: XXXXXX
          </v-chip>
        </h3>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-switch label="Exterior" />
          </v-flex>
          <v-flex md3>
            <v-switch label="Interior" />
          </v-flex>
          <v-flex md3>
            <v-switch label="Diamon Fusion" />
          </v-flex>
          <v-flex md3>
            <v-switch label="Nose Mask" />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md6>
            <vue-ctk-date-time-picker label="Date RDR" />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Bonus Points"
              value="0"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Total Points"
              value="0"
              readonly
            />
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
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

export default {
  components: {
    VueCtkDateTimePicker
  }
}
</script>
