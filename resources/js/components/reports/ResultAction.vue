<template>
  <v-container class="pa-0">
    <v-layout
      mb-2
    >
      <h3
        class="headline font-weight-bold"
      >
        Financial Report Results
      </h3>
    </v-layout>
    <v-layout
      flex
      wrap
    >
      <v-flex
        xs6
        sm2
        :class="{'px-2': true, 'mt-3': $vuetify.breakpoint.xs}"
      >
        <v-btn
          xs6
          block
          round
          disabled
          type="default"
        >
          Advanced filters
        </v-btn>
      </v-flex>
      <v-flex
        xs6
        sm2
        :class="{'px-2': true, 'mt-3': $vuetify.breakpoint.xs}"
      >
        <DataVisibility
          :items="headers"
          @apply="dataVisibility"
        />
      </v-flex>
      <v-flex
        xs6
        sm2
        :class="{'px-2': true, 'mt-3': $vuetify.breakpoint.xs}"
      >
        <save-modal
          :items-one="financialModifiers"
          :items-two="financialModifiers"
          :save-loading="saveLoading"
          @save="saveReport"
        />
      </v-flex>
      <v-flex
        xs6
        sm2
        :class="{'px-2': true, 'mt-3': $vuetify.breakpoint.xs}"
      >
        <export-modal
          @export="exportReport"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SaveModal from '~/components/reports/SaveModal.vue'
import ExportModal from '~/components/reports/ExportModal.vue'
import DataVisibility from '~/components/reports/DataVisibility.vue'

export default {
  components: {
    SaveModal,
    ExportModal,
    DataVisibility
  },
  props: {
    financialModifiers: {
      type: Array,
      default: () => []
    },
    filters: {
      type: [ Object, Array ],
      default: () => ({})
    },
    saveLoading: {
      type: Boolean,
      default: false
    },
    headers: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    dataVisibility (data) {
      this.$emit('data-visibility', data)
    },
    saveReport (data) {
      this.$emit('save-report', {
        filters: JSON.stringify(this.filters),
        ...data
      })
    },
    exportReport (option) {
      this.$emit('export-report', option)
    }
  }
}
</script>
<style lang="styl" scoped>
  /deep/ .sm-ReportsSaveModal__activator,
  /deep/ .sm-ReportsExportModal__activator,
  /deep/ .sm-ReportsDataVisibility__activator{
    width: 100%;
  }
</style>
