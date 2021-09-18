import createStore from 'tests/createStore'
import makePageStory from 'vue-cli-plugin-freshinup-ui/utils/makePageStory'
import { MAIN } from '../../../../../../.storybook/categories.js'
import { FIXTURE_USER } from 'tests/__data__/user'
import { FIXTURE_ELASTICSEARCH_DEAL_RESPONSE } from 'tests/__data__/sales'
import { FIXTURE_ELASTICSEARCH_VEHICLES } from 'tests/__data__/vehicles'
import Page from './index.vue'
import PageStoryInstances from 'tests/PageStoryInstances'

export default {
  title: `${MAIN} Pages|admin/financials/_id`,
  id: 'pages/admin/financials/_id'
}

/**
 * https://storybook.js.org/docs/guides/guide-vue/#step-4-write-your-stories
 */
export const PopulatedItem = () => {
  const store = createStore({
    currentUser: FIXTURE_USER
  })
  return makePageStory(Page, store, {
    ...PageStoryInstances,
    apiMockRoutes: [
      {
        path: 'api/sales/v1/vehicles',
        GET: [200, { data: FIXTURE_ELASTICSEARCH_VEHICLES }]
      },
      {
        path: /api\/sales\/v1\/sales\/(\w)+/,
        GET: [200, FIXTURE_ELASTICSEARCH_DEAL_RESPONSE]
      },
      {
        path: /api\/customers\/(\w)+/,
        GET: [200, { data: {} }]
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

export const NoItem = () => {
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
      Page.beforeRouteEnterOrUpdate(this)
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
