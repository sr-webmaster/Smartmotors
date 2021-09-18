import { mount } from '@vue/test-utils'
import createLocalVue from 'vue-cli-plugin-freshinup-ui/utils/testing/createLocalVue'
import createStore from 'tests/createStore'
import Page from '~/pages/admin/users/_id/index.vue'
import { FIXTURE_USER } from 'tests/__data__/user'
import VueRouter from 'vue-router'

describe('Edit User Page', () => {
  let mock, localVue, router

  router = new VueRouter()

  beforeEach(() => {
    const v = createLocalVue()
    localVue = v.localVue
    localVue.use(VueRouter)
    mock = v.mock

    mock
      .onGet('api/users/1').reply(200, { data: FIXTURE_USER })
      .onGet('api/currentUser').reply(200, FIXTURE_USER)
      .onAny().reply(config => {
        // Fault-tolerantly ignore api/companies
        if (config.url.indexOf('s/') >= -1) {
          return [200, { data: [] }]
        }
        console.warn('No mock match for ' + config.url, config)
        return [200, { data: [] }]
      })
  })
  afterEach(() => {
    mock.restore()
  })

  describe('Snapshots', () => {
    test('mocking data', (done) => {
      const store = createStore()

      const wrapper = mount(Page, {
        localVue,
        router,
        store
      })

      Page.beforeRouteEnterOrUpdate(wrapper.vm, { params: { id: 1 } }, null, async () => {
        await wrapper.vm.$nextTick()
        expect(wrapper.element).toMatchSnapshot()
        done()
      })
    })
  })
})
