import { shallowMount } from '@vue/test-utils'
import createStore from 'tests/createStore'
import createLocalVue from 'vue-cli-plugin-freshinup-ui/utils/testing/createLocalVue'
import { mount } from 'vue-cli-plugin-freshinup-ui/utils/testing'
import { FIXTURE_SALES_STATUSES_RESPONSE } from 'tests/__data__/salesStatuses'
import { FIXTURE_SALES_TYPES_RESPONSE } from 'tests/__data__/salesTypes'
import Page from './index.vue'
import * as Stories from './index.stories'

describe('Financial Reports Page', () => {
  describe('snapshot', () => {
    test('default', (done) => {
      const wrapper = mount(Stories.PopulatedList(), {
        stubs: {
          'sales-chart': true
        }
      })

      wrapper.beforeRouteEnterOrUpdate({ params: {} }, null, async () => {
        await wrapper.vm.$nextTick()
        expect(wrapper.element).toMatchSnapshot()
        done()
      })
    })

    test('advanced filters', (done) => {
      const wrapper = mount(Stories.AdvancedFilters(), {
        stubs: {
          'sales-chart': true,
          'vue-ctk-date-time-picker': true,
          'item-list': true
        }
      })

      wrapper.beforeRouteEnterOrUpdate({ params: {} }, null, async () => {
        await wrapper.vm.$nextTick()

        for (let i in FIXTURE_SALES_STATUSES_RESPONSE.data) {
          expect(wrapper.text()).toContain(FIXTURE_SALES_STATUSES_RESPONSE.data[i].text)
        }
        for (let i in FIXTURE_SALES_TYPES_RESPONSE.data) {
          expect(wrapper.text()).toContain(FIXTURE_SALES_TYPES_RESPONSE.data[i].text)
        }

        expect(wrapper.element).toMatchSnapshot()
        done()
      })
    })
  })

  describe.skip('Methods', () => {
    let localVue, mockApi
    beforeEach(() => {
      localVue = createLocalVue({
        router: false,
        mockApi,
        apiMockRoutes: [
          {
            path: 'api/sales/v1/export',
            GET: [200, 'http://path-to-file']
          }
        ]
      }).localVue
    })
    test('saveReport function show success dialog', (done) => {
      let store = createStore()

      const wrapper = shallowMount(Page, {
        store,
        mocks: {
          $route: {
            query: {}
          }
        }
      })

      wrapper.vm.saveReport().then(() => {
        expect(wrapper.vm.successDialog).toBeTruthy()
        done()
      })
    })

    test('exportReport', done => {
      let store = createStore()

      global.open = jest.fn()

      const wrapper = shallowMount(Page, {
        localVue,
        store,
        mocks: {
          $route: {
            query: {}
          }
        }
      })

      wrapper.vm.exportReport('csv').then(response => {
        expect(response).toEqual('http://path-to-file')
        done()
      })
    })

    test('goToDetails', () => {
      global.open = jest.fn()

      const wrapper = shallowMount(Page, {
        localVue,
        mocks: {
          $route: {
            query: {}
          },
          $router: {
            resolve: function (i) { return i }
          }
        }
      })

      let response = wrapper.vm.goToDetails('1234')
      expect(response).toBeUndefined()
    })
  })
})
