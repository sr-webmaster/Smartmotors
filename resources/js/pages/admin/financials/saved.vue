<template>
  <v-container
    grid-list-md
    fluid
  >
    <v-container
      grid-list-md
      px-0
      mb-1
      fluid
    >
      <v-layout
        row
        wrap
        justify-space-between
        align-center
      >
        <v-flex x4>
          <h2 class="f-page__title f-page__title--admin white--text">
            {{ pageTitle }}
          </h2>
        </v-flex>
        <v-flex text-xs-right>
          <v-btn
            :to="{ path: '/admin/financials' }"
          >
            Create Reports
          </v-btn>
          <v-btn
            color="primary"
            dark
            type="default"
          >
            Saved Reports
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>

    <v-divider />

    <filter-sorter
      without-sort-by
      @run="filter"
    />

    <f-saved-search-list
      base-url="/admin/financials/"
      :items="reportables"
      :selectables="selectables"
      :rows-per-page="pagination.rowsPerPage"
      :page="pagination.page"
      :total-items="pagination.totalItems"
      :sort-by="sorting.sortBy"
      :descending="sorting.descending"
      :is-loading="isLoadingList"
      @paginate="onPaginate"
      @delete="deleteReport"
      @manage-multiple-delete="deleteMultipleReports"
      @open="openReport"
    />

    <v-dialog
      v-model="deleteReportDialog"
      max-width="500"
    >
      <simple-confirm
        :class="{ 'deleting': deletablesProcessing }"
        :title="deleteDialogTitle"
        ok-label="Yes"
        cancel-label="No"
        @ok="deleteReports"
        @cancel="deleteReportDialog = false"
      >
        <div class="py-5 px-2">
          <template v-if="deletablesProcessing">
            <div class="text-xs-center">
              <p class="subheading">
                Processing, please wait...
              </p>
              <v-progress-circular
                :rotate="-90"
                :size="200"
                :width="15"
                :value="deletablesProgress"
                color="primary"
              >
                {{ deletablesStatus }}
              </v-progress-circular>
            </div>
          </template>
          <template v-else>
            <p class="subheading">
              <span v-if="deletables.length < 2">Report</span>
              <span v-else> Reports</span>
              : {{ deleteableNames }}
            </p>
          </template>
        </div>
      </simple-confirm>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import get from 'lodash/get'
import FSavedSearchList from '@freshinup/report-ui/src/components/FSavedSearchList'
import FilterSorter from 'fresh-bus/components/search/filter-sorter.vue'
import SimpleConfirm from 'fresh-bus/components/SimpleConfirm.vue'
import { deletables } from 'fresh-bus/components/mixins/Deletables'

export default {
  layout: 'admin-edit',
  components: {
    FSavedSearchList,
    FilterSorter,
    SimpleConfirm
  },
  mixins: [deletables],
  data () {
    return {
      deleteReportDialog: false,
      lastFilterParams: {}
    }
  },
  computed: {
    isLoadingList () {
      return get(this.$store, 'state.financialReports.pending.items', true)
    },
    ...mapGetters('page', {
      isLoading: 'isLoading',
      pageTitle: 'title'
    }),
    ...mapGetters('financialReports', {
      reportables: 'items',
      pagination: 'pagination',
      sorting: 'sorting',
      sortBy: 'sortBy'
    }),
    selectables () {
      return {
        'deal-types': this.$store.getters['salesTypes/items'],
        'deal-statuses': this.$store.getters['salesStatuses/items']
      }
    },
    deleteDialogTitle () {
      return this.deletables.length < 2 ? 'Are you sure you want to delete this report?' : 'Are you sure you want to delete the following reports?'
    },
    deleteableNames () {
      return this.deletables.map((report) => {
        return report.name
      }).join(', ')
    }
  },
  async beforeRouteEnterOrUpdate (vm, to, from, next) {
    vm.$store.dispatch('page/setTitle', 'Financial Reporting')
    vm.$store.dispatch('page/setLoading', true)
    try {
      await vm.$store.dispatch('financialModifiers/getItems')
      await vm.$store.dispatch('salesStatuses/getItems')
      await vm.$store.dispatch('salesTypes/getItems')
    } finally {
      vm.$store.dispatch('page/setLoading', false)
      next && next()
    }
  },
  methods: {
    filter (params) {
      this.$store.dispatch('page/setLoading', true)
      this.$store.dispatch('financialReports/setFilters', {
        'filter[name]': params.term
      })
      this.lastFilterParams = params
      return this.$store.dispatch('financialReports/getItems').then(() => {
        this.$store.dispatch('page/setLoading', false)
      })
    },
    openReport (url) {
      this.$router.push({ path: url })
    },
    onPaginate (value) {
      this.$store.dispatch('page/setLoading', true)
      this.$store.dispatch('financialReports/setPagination', value)
      return this.$store.dispatch('financialReports/getItems').then(() => {
        this.$store.dispatch('page/setLoading', false)
      })
    },
    deleteDialogUp (reports) {
      if (!Array.isArray(reports)) {
        reports = [reports]
      }
      this.deleteReportDialog = true
      this.deletables = reports
    },
    deleteReport (report) {
      this.deleteDialogUp(report)
    },
    async deleteReports () {
      this.deletablesProcessing = true
      this.deletablesProgress = 0
      this.deletablesStatus = ''
      let dispatcheables = []

      this.deletables.forEach((report) => {
        dispatcheables.push(this.$store.dispatch('financialReports/deleteItem', { getItems: false, params: { id: report.id } }))
      })

      let chunks = this.chunk(dispatcheables, this.deletablesParallelRequests)
      let doneCount = 0

      for (let i in chunks) {
        await Promise.all(chunks[i])
        doneCount += chunks[i].length
        this.deletablesStatus = doneCount + ' / ' + this.deletables.length + ' Done'
        this.deletablesProgress = doneCount / this.deletables.length * 100
        await this.sleep(this.deletablesSleepTime)
      }

      await this.filter(this.lastFilterParams)
      this.deleteReportDialog = false
      this.deletaReportProcessing = false
      this.deletablesProgress = 0
      this.deletablesStatus = ''
    },
    deleteMultipleReports (reports) {
      this.deleteDialogUp(reports)
    }
  }
}
</script>
