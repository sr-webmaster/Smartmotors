<template>
  <v-layout
    row
    wrap
    align-end
  >
    <v-flex
      sm2
      :class="{'px-2': $vuetify.breakpoint.smAndUp, 'mt-3': $vuetify.breakpoint.xs, 'pb-0': true }"
    >
      <v-layout
        row
        mb-1
      >
        <filter-label
          class="ml-2"
          color="black"
        >
          Filter by date
        </filter-label>
        <clear-button
          v-if="filters.date_after || filters.date_before"
          @clear="filters.date_after = filters.date_before = range = null"
        />
      </v-layout>
      <vue-ctk-date-time-picker
        v-model="range"
        class="data-time-picker no-border"
        only-date
        range
        no-clear-button
        format="YYYY-MM-DD"
        formatted="MM-DD-YYYY"
        input-size="lg"
        label="Select date"
        :color="$vuetify.theme.primary"
        :button-color="$vuetify.theme.primary"
      />
    </v-flex>
    <v-flex
      sm2
      :class="{'px-2': $vuetify.breakpoint.smAndUp, 'mt-3': $vuetify.breakpoint.xs}"
    >
      <v-layout
        row
        mb-2
      >
        <filter-label
          class="ml-1"
          color="black"
        >
          Statuses
        </filter-label>
        <clear-button
          v-if="status"
          @clear="status = null"
        />
      </v-layout>
      <multi-select
        v-model="status"
        :items="statuses"
        item-value="id"
        item-text="text"
        placeholder="All Statuses"
        select-all-name="All Statuses"
        solo
        hide-details
      />
    </v-flex>
    <v-flex
      sm2
      :class="{'px-2': $vuetify.breakpoint.smAndUp, 'mt-3': $vuetify.breakpoint.xs}"
    >
      <v-layout
        row
        mb-2
      >
        <filter-label
          color="black"
        >
          Deal types
        </filter-label>
        <clear-button
          v-if="type"
          @clear="type = null"
        />
      </v-layout>
      <v-select
        :value="type"
        :items="types"
        item-value="value"
        item-text="text"
        return-object
        placeholder="All Types"
        select-all-name="All Types"
        solo
        hide-details
        @input="selectType"
      />
    </v-flex>
    <v-flex
      v-if="showLots"
      sm2
      :class="{'px-2': $vuetify.breakpoint.smAndUp, 'mt-3': $vuetify.breakpoint.xs}"
    >
      <v-layout
        row
        mb-2
      >
        <filter-label
          color="black"
        >
          Lot
        </filter-label>
        <clear-button
          v-if="lot"
          @clear="lot = null"
        />
      </v-layout>
      <multi-select
        v-model="lot"
        :items="lots"
        item-value="id"
        item-text="text"
        placeholder="All Lots"
        select-all-name="All Lots"
        solo
        hide-details
      />
    </v-flex>
    <v-flex
      sm2
      :class="{'px-2': $vuetify.breakpoint.smAndUp, 'mt-3': $vuetify.breakpoint.xs}"
    >
      <v-layout
        row
        justify-space-between
        mb-2
      >
        <filter-label
          color="black"
        >
          Sales Reps
        </filter-label>
        <clear-button
          v-if="salesrep_uuid"
          @clear="salesrep_uuid = null && $refs.salesRep.resetTerm()"
        />
      </v-layout>
      <f-search-simple
        ref="salesRep"
        v-model="salesrep_uuid"
        results-id-key="uuid"
        url="/users?filter[type]=1"
        placeholder="Search"
        background-color="white"
        class="mt-0 pt-0"
        height="48"
        not-clearable
        solo
        @input="selectSalesRep"
      />
    </v-flex>
    <v-flex
      sm2
      :class="{'px-2': $vuetify.breakpoint.smAndUp, 'mt-3': $vuetify.breakpoint.xs}"
    >
      <v-layout
        row
        justify-space-between
        mb-2
      >
        <filter-label
          color="black"
        >
          Customer Name / ID
        </filter-label>
        <clear-button
          v-if="customer_uuid"
          @clear="customer_uuid = null && $refs.customer.resetTerm()"
        />
      </v-layout>
      <f-search-simple
        ref="customer"
        v-model="customer_uuid"
        results-id-key="uuid"
        url="/users?filter[type]=2"
        placeholder="Search"
        background-color="white"
        class="mt-0 pt-0"
        height="48"
        not-clearable
        solo
        @input="selectCustomer"
      />
    </v-flex>
    <v-flex
      sm2
      :class="{'px-2': $vuetify.breakpoint.smAndUp, 'mt-3': $vuetify.breakpoint.xs}"
      fill-height
      justify-end
    >
      <v-btn
        large
        round
        class="primary"
        :class="{'mx-0': $vuetify.breakpoint.xsOnly}"
        @click="generate"
      >
        Generate
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import ClearButton from '@freshinup/core-ui/src/components/FClearButton'
import FilterLabel from '~/components/FilterLabel'
import FSearchSimple from '@freshinup/core-ui/src/components/FSearchSimple'
import MultiSelect from '@freshinup/core-ui/src/components/FMultiSelect'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
import find from 'lodash/find'
import pick from 'lodash/pick'
import isObject from 'lodash/isObject'
import isNumber from 'lodash/isNumber'

export default {
  components: {
    ClearButton,
    FilterLabel,
    FSearchSimple,
    MultiSelect,
    VueCtkDateTimePicker
  },
  props: {
    filters: {
      type: Object,
      default: () => ({})
    },
    statuses: {
      type: Array,
      default: () => []
    },
    types: {
      type: Array,
      default: () => []
    },
    lots: {
      type: Array,
      default: () => []
    },
    showLots: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const _filters = this.filters || {}
    return {
      range: {
        start: _filters.date_after,
        end: _filters.date_before
      },
      type: _filters.type,
      status: _filters.status,
      customer_uuid: _filters.customer_uuid,
      salesrep_uuid: _filters.salesrep_uuid,
      lot: _filters.lot
    }
  },
  watch: {
    'filters.type' (value) {
      this.type = value
    },
    'filters.status' (value) {
      this.status = value
    },
    'filters.salesrep_uuid' (value) {
      this.salesrep_uuid = value
    },
    'filters.customer_uuid' (value) {
      this.customer_uuid = value
    },
    'filters.lot' (value) {
      this.lot = value
    }
  },
  methods: {
    selectType (value) {
      const item = find(this.types, (type) => {
        if (isObject(value)) {
          return type.value === value.value
        } else if (isNumber(value)) {
          return type.value === value
        }
      })
      if (item) {
        this.type = item.value
      }
    },
    selectSalesRep (salesRep) {
      this.salesrep_uuid = salesRep ? salesRep.pbs_id : null
    },
    selectCustomer (customer) {
      this.customer_uuid = customer ? customer.pbs_id : null
    },
    generate () {
      const dateAfter = this.range ? this.range.start : null
      const dateBefore = this.range ? this.range.end : null
      this.$emit('generate', {
        ...pick(this, ['salesrep_uuid', 'customer_uuid', 'lot', 'status', 'type']),
        date_before: dateBefore,
        date_after: dateAfter
      })
    }
  }
}
</script>
<style lang="styl" scoped>
  /deep/ .data-time-picker.no-border input.field-input{
    border: none !important;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2),
                0 2px 2px 0 rgba(0,0,0,0.14),
                0 1px 5px 0 rgba(0,0,0,0.12);
  }
</style>
