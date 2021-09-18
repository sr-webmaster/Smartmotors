<template>
  <v-dialog
    v-model="dialog"
    max-width="400px"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        color="primary"
        round
        class="sm-ReportsExportModal__activator"
        v-on="on"
      >
        Export
      </v-btn>
    </template>

    <v-card>
      <v-toolbar>
        <v-toolbar-title>Export Report</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            icon
            @click="dialog = false"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-card-text>
        <v-form>
          <v-radio-group v-model="option">
            <v-radio
              label="PDF"
              value="pdf"
            />
            <v-radio
              label="CSV"
              value="csv"
            />
          </v-radio-group>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="secondary"
          block
          flat
          @click="dialog = false"
        >
          Cancel
        </v-btn>

        <v-btn
          color="primary"
          block
          @click="exportReport"
        >
          Export
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      option: 'csv'
    }
  },
  methods: {
    exportReport () {
      let { option } = this
      this.$emit('export', option)
      this.dialog = false
    }
  }
}
</script>
