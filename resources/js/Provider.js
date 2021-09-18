import { version, name } from '../../composer.json'
import page from '~/store/modules/page'
import financialReports from '~/store/modules/financialReports'
import salesAggregations from '~/store/modules/salesAggregations'
import salesLots from '~/store/modules/salesLots'
import salesStatuses from '~/store/modules/salesStatuses'
import salesTypes from '~/store/modules/salesTypes'
import customers from '~/store/modules/customers'
import salesReps from '~/store/modules/salesReps'
import financialModifiers from '~/store/modules/financialModifiers'
import customerDeals from '~/store/modules/customerDeals'
import vehicles from '~/store/modules/vehicles'
import sales from '~/store/modules/sales'
const pages = require.context('./pages', true, /\.vue$/)

export default () => {
  return {
    name,
    pages,
    store: {
      page,
      financialReports,
      sales,
      salesAggregations,
      salesLots,
      salesStatuses,
      salesTypes,
      customers,
      salesReps,
      financialModifiers,
      customerDeals,
      vehicles
    },
    version
  }
}
