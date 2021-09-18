<template>
  <div>
    <create-update
      title-text="User Details"
      :user="user"
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
      @delete="deleteUser"
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
            <v-text-field
              v-model="pbs_id"
              readonly
              label="Customer #"
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

    <v-container
      v-if="!isLoading"
      fluid
      fill-height
      justify-space-between
    >
      <v-flex d-flex>
        <v-card>
          <v-card-title primary-title>
            <v-layout justify-space-between>
              <h3>Related Opportunities</h3>
              <v-btn
                color="primary"
                @click="addNewOpportunity"
              >
                Add New Opportunity
              </v-btn>
            </v-layout>
          </v-card-title>

          <v-card-text>
            <p
              v-if="opportunities.length == 0"
              class="text-xs-center"
            >
              Nothing here. Create a new opportunity for this customer
            </p>
            <v-layout
              v-else
              row
              wrap
            >
              <v-flex
                v-for="deal in opportunities"
                :key="deal.uuid"
                md3
                p-2
              >
                <deal-card :deal="deal" />
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import BusPage from 'fresh-bus/pages/admin/users/_id/edit.vue'
import CreateUpdate from '~/components/users/CreateUpdate'
import DealCard from '@freshinup/deals-ui/src/components/DealCard'
import { mapGetters } from 'vuex'

export default {
  components: {
    DealCard,
    CreateUpdate
  },
  extends: BusPage,
  layout: 'admin-edit',
  beforeRouteEnterOrUpdate (vm, to, from, next) {
    BusPage.beforeRouteEnterOrUpdate(vm, to, from, () => {
      vm.$store.dispatch('customerDeals/setFilters', {
        customer_uuid: vm.user.uuid
      })
      vm.$store
        .dispatch('customerDeals/getItems', {
          params: { include: 'manager,customer,status,type,salesrep' }
        })
        .then(() => {
          if (next) next()
        })
    })
  },
  data () {
    return {
      company_name: '',
      pbs_id: '',
      text_enabled: false,
      type: null
    }
  },
  computed: {
    ...mapGetters('customerDeals', { opportunities: 'items' })
  },
  watch: {
    user (user) {
      this.company_name = user.company_name
      this.pbs_id = user.pbs_id
      this.text_enabled = user.text_enabled
    }
  },
  methods: {
    addNewOpportunity () {
      alert('Not implemented')
    },
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
