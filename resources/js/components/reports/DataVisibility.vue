<template>
  <div>
    <v-btn
      color="primary"
      round
      class="sm-ReportsDataVisibility__activator"
      @click.stop="open"
    >
      Data Visibility
    </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
    >
      <v-container class="sm-ReportsDataVisibility__container">
        <h2 class="mb-4">
          Data Visibility
        </h2>

        <h3 class="sm-ReportsDataVisibility__sectionTitle">
          Active
        </h3>

        <draggable
          tag="span"
          :list="options"
          class="list-group"
          handle=".handle"
        >
          <v-layout
            v-for="item in active"
            :key="item.value"
          >
            <v-icon
              class="handle"
              v-text="'drag_indicator'"
            />

            <v-checkbox
              v-model="item.active"
              class="mt-0"
              :label="item.text"
            />
          </v-layout>
        </draggable>

        <h3 class="sm-ReportsDataVisibility__sectionTitle">
          Inctive
        </h3>

        <v-text-field
          v-model="search"
          label="Search Parameters"
        />

        <v-checkbox
          v-for="item in inactive"
          :key="item.value"
          v-model="item.active"
          class="mt-0"
          :label="item.text"
        />

        <v-layout>
          <v-btn
            color="secondary"
            block
            flat
            @click="drawer = false"
          >
            Cancel
          </v-btn>

          <v-btn
            color="primary"
            block
            @click="apply"
          >
            Apply
          </v-btn>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  model: {
    prop: 'items',
    event: 'apply'
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      drawer: false,
      options: [],
      search: ''
    }
  },
  computed: {
    active () {
      return this.options.filter(item => item.active)
    },
    inactive () {
      return this.options.filter(
        item => !item.active && item.text.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      )
    }
  },
  methods: {
    open () {
      this.drawer = true
      this.options = JSON.parse(JSON.stringify(this.items))
    },
    apply () {
      this.$emit('apply', this.options)
      this.drawer = false
    }
  }
}
</script>

<style scoped>
/deep/ .sm-ReportsDataVisibility__container .v-input__slot {
  margin-bottom: 0 !important;
}

.sm-ReportsDataVisibility__sectionTitle {
  color: #c9c9c9;
  font-size: 18px;
  border-bottom: 1px solid #c9c9c9;
  margin: 10px 0;
}
</style>
