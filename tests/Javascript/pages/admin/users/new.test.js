import { mount } from '@vue/test-utils'
import createLocalVue from 'vue-cli-plugin-freshinup-ui/utils/testing/createLocalVue'
import createStore from 'tests/createStore'
import Page from '~/pages/admin/users/new.vue'
import { FIXTURE_USER } from 'tests/__data__/user'
import { FIXTURE_USER_PERMISSIONS } from 'tests/__data__/userPermissions'
import VueRouter from 'vue-router'

describe('New User Page', () => {
  let mock, localVue, router

  router = new VueRouter()

  beforeEach(() => {
    const v = createLocalVue()
    localVue = v.localVue
    localVue.use(VueRouter)
    mock = v.mock

    mock
      .onGet('api/users/new').reply(200, { data: {} })
      .onGet('api/currentUser').reply(200, FIXTURE_USER)
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
      const lastPost = mock.history.post.pop()
      expect(lastPost.url).toContain('users')
      expect(lastPost.data).toEqual(JSON.stringify({
        key: 'value',
        company_name: 'Test',
        text_enabled: true,
        id: 'new'
      }))
    })
  })
})
