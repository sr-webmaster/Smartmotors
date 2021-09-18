import { mount } from '@vue/test-utils'
import createLocalVue from 'vue-cli-plugin-freshinup-ui/utils/testing/createLocalVue'
import createStore from 'tests/createStore'
import Page from '~/pages/admin/users/index'
import { FIXTURE_USERS_RESPONSE } from 'tests/__data__/users'
import { FIXTURE_USER_LEVELS_RESPONSE } from 'tests/__data__/userLevels'
import { FIXTURE_USER_TYPES_RESPONSE } from 'tests/__data__/userTypes'
import { FIXTURE_USER_STATUSES_RESPONSE } from 'tests/__data__/userStatuses'
import VueRouter from 'vue-router'

describe('Users Page', () => {
  let mock, localVue, router

  router = new VueRouter()

  beforeEach(() => {
    const v = createLocalVue()
    localVue = v.localVue
    localVue.use(VueRouter)
    mock = v.mock

    mock.onGet('/users').reply(200, FIXTURE_USERS_RESPONSE)
    mock.onGet('/user-types').reply(200, FIXTURE_USER_TYPES_RESPONSE)
    mock.onGet('/userlevels').reply(200, FIXTURE_USER_LEVELS_RESPONSE)
    mock.onGet('/userstatuses').reply(200, FIXTURE_USER_STATUSES_RESPONSE)

    mock.onAny().reply(200, {})
  })
  afterEach(() => {
    mock.restore()
  })

  describe('Snapshots', () => {
    test('mocking data', (done) => {
      const wrapper = mount(Page, {
        localVue,
        router,
        store: createStore()
      })

      Page.beforeRouteEnterOrUpdate(wrapper.vm, { params: {} }, null, async () => {
        await wrapper.vm.$nextTick()
        expect(wrapper.element).toMatchSnapshot()
        done()
      })
    })
  })
})
