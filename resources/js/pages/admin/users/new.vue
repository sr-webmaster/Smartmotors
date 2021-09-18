<template>
  <create-update
    is-new
    :is-loading="isLoading"
    :countries="countries"
    :industry-roles="industryRoles"
    :current-user="currentUser"
    :user-statuses="userStatuses"
    :user-levels="userLevels"
    :user-types="userTypes"
    :company-label="companyLabel"
    :autocomplete-company-url="autocompleteCompanyUrl"
    :read-only-fields="readonlyFields"
    :enabled-fields="enabledFields"
    :validation-rules="validationRules"
    :fields-labels="labels"
    @changed-type="changedType"
    @save="_save"
  >
    <template
      v-if="type != 1"
      v-slot:additionalFields
    >
      <v-layout>
        <v-flex>
          <v-text-field
            v-model="company_name"
            label="Company"
          />
        </v-flex>
        <v-flex>
          <v-switch
            v-model="text_enabled"
            label="Text"
          />
        </v-flex>
      </v-layout>
    </template>
  </create-update>
</template>

<script>
import BusPage from 'fresh-bus/pages/admin/users/new.vue'
import CreateUpdate from '~/components/users/CreateUpdate'

export default {
  components: { CreateUpdate },
  extends: BusPage,
  layout: 'admin-edit',
  beforeRouteEnterOrUpdate: BusPage.beforeRouteEnterOrUpdate,
  data () {
    return {
      company_name: '',
      text_enabled: false,
      type: null
    }
  },
  methods: {
    _save (data) {
      this.save({
        ...data,
        company_name: this.company_name,
        text_enabled: this.text_enabled
      })
    },
    changedType (type) {
      this.type = type
      this.$store.dispatch('userPermissions/setFilters', { type })
      this.$store.dispatch('userPermissions/getItems')
    }
  }
}
</script>
