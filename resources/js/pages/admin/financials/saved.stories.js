import createStore from 'tests/createStore'
import makePageStory from 'vue-cli-plugin-freshinup-ui/utils/makePageStory'
import { MAIN } from '../../../../../.storybook/categories.js'
import { FIXTURE_USER } from 'tests/__data__/user'
import { FIXTURE_FINANCIAL_SEARCHES } from 'tests/__data__/financialSavedReports'
import Page from './saved.vue'
import PageStoryInstances from 'tests/PageStoryInstances'

export default {
  title: `${MAIN} Pages|admin/financials/saved`,
  id: 'pages/admin/financials/saved'
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
        path: /.*api\/financial-reports.*/,
        GET: [200, { data: FIXTURE_FINANCIAL_SEARCHES.slice(0, 10) }]
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
        path: /.*api\/finacial-reports.*/,
        GET: [200, { data: [] }]
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

export const IsLoadingPage = () => {
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
      store.dispatch('page/setLoading', true)
    }
  })
}

export const IsLoadingList = () => {
  const store = createStore({
    page: {
      isLoading: false
    },
    currentUser: FIXTURE_USER,
    financialReports: {
      pending: {
        items: true
      }
    }
  })
  return makePageStory(Page, store, {
    ...PageStoryInstances,
    apiMockRoutes: [
      {
        path: 'api/currentUser',
        GET: [200, FIXTURE_USER]
      }
    ]
  })
}
