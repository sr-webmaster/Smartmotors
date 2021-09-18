import { mount } from '@vue/test-utils'
import createLocalVue from 'vue-cli-plugin-freshinup-ui/utils/testing/createLocalVue'
import createStore from 'tests/createStore'
import Page from '~/pages/admin/users/_id/edit.vue'
import { FIXTURE_USER } from 'tests/__data__/user'
import { FIXTURE_DEALS } from 'tests/__data__/deals'
import { FIXTURE_USER_PERMISSIONS } from 'tests/__data__/userPermissions'
import VueRouter from 'vue-router'
import customerDeals from '~/store/modules/customerDeals'

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
      .onGet('api/deals/v1/deals').reply(200, { data: FIXTURE_DEALS })
      .onGet('api/bus/v1/permissions/users').reply(200, { data: FIXTURE_USER_PERMISSIONS })
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
      const store = createStore({}, {
        modules: {
          customerDeals: customerDeals()
        }
      })

      const wrapper = mount(Page, {
        localVue,
        router,
        store
      })

      Page.beforeRouteEnterOrUpdate(wrapper.vm, { params: { id: 1 } }, null, async () => {
        wrapper.vm.addNewOpportunity()
        await wrapper.vm.$nextTick()
        expect(wrapper.element).toMatchSnapshot()
        done()
      })
    })
  })

  describe('Watch', () => {
    test('user', async () => {
      const store = createStore()

      const wrapper = mount(Page, {
        localVue,
        router,
        store
      })

      await wrapper.vm.$store.dispatch('users/getItem', { params: { id: 1 } })
      expect(wrapper.vm.company_name).toEqual('Laravel')
      expect(wrapper.vm.pbs_id).toEqual('0695ad4783864740a253b660adc5e17a')
      expect(wrapper.vm.text_enabled).toEqual(1)
    })
  })

  describe('Methods', () => {
    test('changedType gets permissions', async () => {
      const store = createStore()

      const wrapper = mount(Page, {
        localVue,
        router,
        store
      })

      wrapper.vm.changedType(2)
      await wrapper.vm.$nextTick()
      const lastGet = mock.history.get.pop()
      expect(lastGet.url).toContain('bus/v1/permissions/users')
      expect(lastGet.params['filter[type]']).toEqual(2)
    })

    test('_save', async () => {
      const store = createStore()

      const wrapper = mount(Page, {
        localVue,
        router,
        store
      })
      wrapper.setData({
        company_name: 'Test',
        text_enabled: true
      })
      wrapper.vm._save({ key: 'value' })
      await wrapper.vm.$nextTick()
      const lastPut = mock.history.put.pop()
      expect(lastPut.url).toContain('users')
      expect(lastPut.data).toEqual(JSON.stringify({
        key: 'value',
        company_name: 'Test',
        text_enabled: true
      }))
    })
  })
})
