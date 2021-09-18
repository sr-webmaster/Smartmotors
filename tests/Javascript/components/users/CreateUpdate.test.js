import { mount } from '@vue/test-utils'
import createLocalVue from 'vue-cli-plugin-freshinup-ui/utils/testing/createLocalVue'
import Component from '~/components/users/CreateUpdate.vue'

describe('User CreateUpdate Component', () => {
  const vue = createLocalVue({ validation: true })
  const localVue = vue.localVue
  describe('Watch', () => {
    it('type emits changed-type event', async () => {
      const wrapper = mount(Component, { localVue })
      wrapper.setData({
        userModel: { type: 2 }
      })
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted()['changed-type']).toBeTruthy()
      expect(wrapper.emitted()['changed-type'][0][0]).toEqual(2)
    })
  })
})
