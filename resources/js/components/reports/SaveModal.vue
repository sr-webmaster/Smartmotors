<template>
  <v-dialog
    v-model="dialog"
    max-width="400px"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        color="primary"
        round
        class="sm-ReportsSaveModal__activator"
        :loading="saveLoading"
        :disabled="saveLoading"
        v-on="on"
      >
        Save report
      </v-btn>
    </template>

    <v-card>
      <v-toolbar>
        <v-toolbar-title>Save Report</v-toolbar-title>
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
          <v-text-field
            v-model="name"
            label="Report name"
          />

          <v-select
            v-model="modifierOne"
            :items="itemsOne"
            item-text="label"
            item-value="id"
            label="Modifier 1"
          />

          <v-select
            v-model="modifierTwo"
            :items="itemsTwo"
            item-text="label"
            item-value="id"
            label="Modifier 2"
          />
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
          @click="save"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    itemsOne: {
      type: Array,
      default: () => []
    },
    itemsTwo: {
      type: Array,
      default: () => []
    },
    saveLoading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: false,
      name: null,
      modifierOne: null,
      modifierTwo: null
    }
  },
  methods: {
    save () {
      let { name, modifierOne, modifierTwo } = this
      this.$emit('save', { name, modifier_1_id: modifierOne, modifier_2_id: modifierTwo })
      this.dialog = false
    }
  }
}
</script>
