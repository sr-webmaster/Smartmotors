import { mount } from '@vue/test-utils'
import createStore from 'tests/createStore'
import { FIXTURE_CURRENT_USER } from 'fresh-bus/tests/__data__/user'
import createLocalVue from 'vue-cli-plugin-freshinup-ui/utils/testing/createLocalVue'
import Component from '~/components/users/UserProfile.vue'

describe('User Profile', () => {
  let localVue, store

  beforeEach(() => {
    const vue = createLocalVue()
    localVue = vue.localVue

    store = createStore({})
  })

  describe('Visuals', () => {
    test('with mocked user', () => {
      const wrapper = mount(Component, {
        localVue,
        store,
        propsData: {
          user: FIXTURE_CURRENT_USER
        }
      })

      expect(wrapper.html()).not.toContain('Teams')
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
