<template>
  <v-dialog
    v-model="dialog"
    max-width="400px"
  >
    <v-card>
      <v-toolbar>
        <v-toolbar-title>Save Report</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            icon
            @click="hide"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-card-text>
        <v-layout
          column
          align-center
        >
          <v-icon color="green">
            check_circle
          </v-icon>
          <h1>SUCCESS!</h1>
          <h3>Your report was saved</h3>
        </v-layout>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="secondary"
          block
          flat
          @click="hide"
        >
          Back to report
        </v-btn>

        <v-btn
          color="primary"
          block
          :to="{ path: '/admin/financials/saved' }"
        >
          View saved reports
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: this.value
    }
  },
  watch: {
    value (val) {
      this.dialog = val
    }
  },
  methods: {
    hide () {
      this.$emit('change', false)
    }
  }
}
</script>
