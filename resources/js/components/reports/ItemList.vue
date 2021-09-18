<template>
  <div>
    <v-data-table
      class="elevation-1"
      :headers="activeHeaders"
      :items="items"
      :pagination.sync="pagination"
      :loading="isLoading"
      :total-items="totalItems"
      hide-actions
    >
      <template slot="no-data">
        <v-alert
          :value="true"
          color="error"
          icon="warning"
        >
          Sorry, nothing to display here :(
        </v-alert>
      </template>

      <template
        slot="items"
        slot-scope="props"
      >
        <template v-for="( _header, headerIndex) in activeHeaders">
          <slot
            v-if="['CreationDate', 'ContractDate', 'PaymentDate'].includes(_header.value)"
            :name="'item-' + _header.value"
            :item="props.item._source"
          >
            <td
              :key="headerIndex"
              :class="_header.class"
            >
              <slot
                :name="'item-inner-' + _header.value"
                :item="props.item._source"
              >
                {{ formatDate(props.item._source[_header.value], 'MMM DD, YYYY') }}
              </slot>
            </td>
          </slot>
          <slot
            v-else-if="_header.value === 'Price'"
            :name="'item-' + _header.value"
            :item="props.item._source"
          >
            <td
              :key="headerIndex"
              :class="_header.class"
            >
              <slot
                :name="'item-inner-' + _header.value"
                :item="props.item._source"
              >
                {{ formatMoney(props.item._source[_header.value], { format: '$0,0.00', precision: 2 }) }}
              </slot>
            </td>
          </slot>
          <slot
            v-else-if="_header.value === 'Manage'"
            :name="'item-' + _header.value"
            :item="props.item"
          >
            <td
              :key="headerIndex"
              :class="_header.class"
            >
              <slot
                :name="'item-inner-' + _header.value"
                :item="props.item"
              >
                <v-btn
                  round
                  color="primary"
                  @click="onClickView(props.item._id)"
                >
                  View
                </v-btn>
              </slot>
            </td>
          </slot>
          <slot
            v-else
            :name="'item-' + _header.value"
            :item="props.item"
          >
            <td
              :key="headerIndex"
              :class="_header.class"
            >
              <slot
                :name="'item-inner-' + _header.value"
                :item="props.item"
              >
                {{ props.item._source[_header.value] }}
              </slot>
            </td>
          </slot>
        </template>
      </template>
    </v-data-table>

    <v-layout
      align-center
    >
      <v-flex
        grow
        justify-center
      >
        <v-layout
          justify-center
        >
          <v-pagination
            :value="page"
            :length="pagination.totalPages"
            :disabled="isLoading"
            :total-visible="6"
            @input="onPageChange"
          />
        </v-layout>
      </v-flex>
      <v-flex
        shrink
      >
        <v-select
          :value="rowsPerPage"
          :items="[5, 10, 15, 25, 30, 50]"
          label="Results Per Page"
          @input="onRowsPerPageChange"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Pagination from 'fresh-bus/components/mixins/Pagination'
import FormatMoney from 'fresh-bus/components/mixins/FormatMoney'
import FormatDate from 'fresh-bus/components/mixins/FormatDate'

export default {
  mixins: [FormatMoney, FormatDate, Pagination],
  props: {
    items: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    activeHeaders () {
      return this.headers.filter(item => item.active)
    }
  },
  methods: {
    onClickView (uuid) {
      this.$emit('manage-view', uuid)
    }
  }
}
</script>
