import createStore from 'tests/createStore'
import { mount } from 'vue-cli-plugin-freshinup-ui/utils/testing'
import { FIXTURE_REPORTABLES, FIXTURE_REPORTABLES_RESPONSE } from 'tests/__data__/reportables'
import Page from '~/pages/admin/financials/saved.vue'
import * as Stories from '~/pages/admin/financials/saved.stories'

describe('Admin Saved Reports Page', () => {
  describe('Mount', () => {
    test('PopulatedList', done => {
      const wrapper = mount(Stories.PopulatedList())

      // Action: load the page data
      wrapper.beforeRouteEnterOrUpdate(null, null, async () => {
        await wrapper.vm.$nextTick()
        expect(wrapper.element).toMatchSnapshot()
        done()
      })
    })
  })

  describe('Methods', () => {
    let store
    const apiMockRoutes = [
      {
        path: 'api/financial-reports',
        GET: [200, FIXTURE_REPORTABLES_RESPONSE]
      }
    ]

    beforeEach(() => {
      store = createStore({
        financialReports: {
          items: FIXTURE_REPORTABLES_RESPONSE
        }
      })
    })
    test('deleteReport opens dialog', async () => {
      const wrapper = mount(Page, {
        apiMockRoutes,
        store
      })

      expect(wrapper.find('.v-dialog').isVisible()).toBe(false)
      wrapper.vm.deleteReport(FIXTURE_REPORTABLES[0])
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.v-dialog').isVisible()).toBe(true)
    })

    test('deleteMultipleReports opens dialog', async () => {
      const wrapper = mount(Page, {
        store,
        apiMockRoutes
      })

      expect(wrapper.find('.v-dialog').isVisible()).toBe(false)
      wrapper.vm.deleteMultipleReports(FIXTURE_REPORTABLES)
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.v-dialog').isVisible()).toBe(true)
    })

    test('filter calls api with param', async () => {
      const wrapper = mount(Page, {
        store,
        apiMockRoutes
      })
      await wrapper.vm.$nextTick()
      expect(wrapper.apiMocked.history.get).toHaveLength(1)
      await wrapper.vm.filter({ term: 'filter-term' })
      expect(wrapper.apiMocked.history.get).toHaveLength(2)
      expect(wrapper.apiMocked.history.get[1].params['filter[name]']).toEqual('filter-term')
    })

    test('deleteReports calls api', async () => {
      const wrapper = mount(Page, {
        store,
        apiMockRoutes
      })

      const reportsToDelete = [
        FIXTURE_REPORTABLES[0],
        FIXTURE_REPORTABLES[1]
      ]

      wrapper.vm.deleteMultipleReports(reportsToDelete)
      wrapper.vm.deleteReports()
      await wrapper.vm.$nextTick()
      expect(wrapper.apiMocked.history.delete).toHaveLength(reportsToDelete.length)
    })
  })
})
