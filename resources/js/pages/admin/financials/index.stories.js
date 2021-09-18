import createStore from 'tests/createStore'
import makePageStory from 'vue-cli-plugin-freshinup-ui/utils/makePageStory'
import { MAIN } from '../../../../../.storybook/categories.js'
import { FIXTURE_USER } from 'tests/__data__/user'
import { FIXTURE_ELASTICSEARCH_DEALS_RESPONSE } from 'tests/__data__/sales'
import { FIXTURE_SALES_STATUSES_RESPONSE } from 'tests/__data__/salesStatuses'
import { FIXTURE_FINANCIAL_MODIFIERS } from 'tests/__data__/modifiers'
import { FIXTURE_SALES_TYPES_RESPONSE } from 'tests/__data__/salesTypes'
import Page from './index.vue'
import PageStoryInstances from 'tests/PageStoryInstances'

export default {
  title: `${MAIN} Pages|admin/financials`,
  id: 'pages/admin/financials'
}

/**
 * https://storybook.js.org/docs/guides/guide-vue/#step-4-write-your-stories
 */
export const PopulatedList = () => {
  const store = createStore({
    currentUser: FIXTURE_USER
  })
  return makePageStory(Page, store, {
    ...PageStoryInstances,
    apiMockRoutes: [
      {
        path: /.*api\/financial-modifiers.*/gi,
        GET: [200, { data: FIXTURE_FINANCIAL_MODIFIERS }]
      },
      {
        path: /.*api\/financial-reports.*/gi,
        GET: [200, { data: {} }]
      },
      {
        path: /.*api\/sales\/v1\/sales.*/gi,
        GET: [200, FIXTURE_ELASTICSEARCH_DEALS_RESPONSE]
      },
      {
        path: 'api/sales/v1/types',
        GET: [200, FIXTURE_SALES_TYPES_RESPONSE]
      },
      {
        path: 'api/sales/v1/export',
        GET: [200, 'http://path-to-file']
      },
      {
        path: 'api/currentUser',
        GET: [200, FIXTURE_USER]
      }
    ],
    beforeMount () {
      Page.beforeRouteEnterOrUpdate(this)
    }
  })
}

export const AdvancedFilters = () => {
  const store = createStore({
    currentUser: FIXTURE_USER
  })
  return makePageStory(Page, store, {
    ...PageStoryInstances,
    apiMockRoutes: [
      {
        path: /.*api\/financial-modifiers.*/gi,
        GET: [200, { data: FIXTURE_FINANCIAL_MODIFIERS }]
      },
      {
        path: /.*api\/financial-reports.*/gi,
        GET: [200, { data: {} }]
      },
      {
        path: /.*api\/sales\/v1\/sales.*/gi,
        GET: [200, FIXTURE_ELASTICSEARCH_DEALS_RESPONSE]
      },
      {
        path: 'api/sales/v1/types',
        GET: [200, FIXTURE_SALES_TYPES_RESPONSE]
      },
      {
        path: 'api/sales/v1/statuses',
        GET: [200, FIXTURE_SALES_STATUSES_RESPONSE]
      },
      {
        path: 'api/sales/v1/export',
        GET: [200, 'http://path-to-file']
      },
      {
        path: 'api/currentUser',
        GET: [200, FIXTURE_USER]
      }
    ],
    beforeMount () {
      Page.beforeRouteEnterOrUpdate(this)
    }
  })
}

export const EmptyList = () => {
  const store = createStore({
    currentUser: FIXTURE_USER
  })
  return makePageStory(Page, store, {
    ...PageStoryInstances,
    apiMockRoutes: [
      {
        path: 'api/currentUser',
        GET: [200, FIXTURE_USER]
      }
    ],
    beforeMount () {
      Page.beforeRouteEnterOrUpdate(this, {}, {})
    }
  })
}

export const IsLoading = () => {
  const store = createStore({
    currentUser: FIXTURE_USER,
    page: {
      loadingColor: 'accent'
    }
  })
  return makePageStory(Page, store, {
    ...PageStoryInstances,
    apiMockRoutes: [
      {
        path: 'api/currentUser',
        GET: [200, FIXTURE_USER]
      }
    ],
    beforeMount () {
      store.dispatch('page/setLoading', true)
    }
  })
}
