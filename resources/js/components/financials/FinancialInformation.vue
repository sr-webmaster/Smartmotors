<template>
  <v-card>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout
          row
          wrap
        >
          <v-flex md6>
            Sale Price
            <v-alert
              :value="true"
              color="info"
              class="text-xs-center headline font-weight-bold f-financialInfo_salePrice"
            >
              {{ formatMoney(get(pbsData, 'Price')) }}
            </v-alert>
          </v-flex>
          <v-flex md6>
            Invoice
            <v-alert
              :value="true"
              color="secondary"
              class="text-xs-center headline font-weight-bold f-financialInfo_invoice"
            >
              {{ formatMoney(get(pbsData, 'FinanceInfo.TotalBalanceDue')) }}
            </v-alert>
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-text-field
              label="List Price"
              class="f-financialInfo_listPrice"
              :value="formatMoney(get(pbsData, 'FinanceInfo.MSRP'))"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Accessory Retail"
              class="f-financialInfo_accessoryRetail"
              :value="formatMoney(get(pbsData, 'Gross.AccessoryGross'))"
              readonly
            />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-text-field
              label="Holdback"
              value="$ 0.00"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Bonus Cash"
              value="$ 0.00"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Dealer Fee"
              value="$ 0.00"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Used Warranty"
              value="$ 0.00"
              readonly
            />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-text-field
              label="Dealer Trade Fee"
              value="$ 0.00"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Misc. Cost"
              value="$ 0.00"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Trade Gross"
              value="$ 0.00"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Sales Gross"
              value="$ 0.00"
              readonly
            />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-text-field
              label="Desk Payment"
              value="$ 0.00"
              readonly
            />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md6>
            <v-text-field
              label="F&I Manager"
              class="f-financialInfo_fiManager"
              :value="get(fiManager, 'Name', '')"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="F&I Gross"
              class="f-financialInfo_fiGross"
              :value="formatMoney(get(pbsData, 'Gross.FinanceGross'))"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="F&I Payment"
              value=""
              readonly
            />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-text-field
              label="F&I Type"
              value=""
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Lender"
              class="f-financialInfo_lender"
              :value="get(pbsData, 'FinanceInfo.Bank')"
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-switch label="F&I Declined" />
          </v-flex>
          <v-flex md3>
            <v-switch label="Reconciled" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-btn>Cancel</v-btn>
          <v-btn color="primary">
            Save Changes
          </v-btn>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import FormatMoney from '@freshinup/core-ui/src/mixins/FormatMoney'
import get from 'lodash/get'

export default {
  mixins: [ FormatMoney ],
  props: {
    pbsData: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    fiManager () {
      return get(this.pbsData, 'UserRoles', []).find(user => user.Role === 'BusinessManager')
    }
  },
  methods: {
    get
  }
}
</script>
