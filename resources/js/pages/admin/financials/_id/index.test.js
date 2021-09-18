import { mount } from 'vue-cli-plugin-freshinup-ui/utils/testing'
import { FIXTURE_ELASTICSEARCH_DEAL_RESPONSE } from 'tests/__data__/sales'
import * as Stories from './index.stories'

describe('Financial Report Details Page', () => {
  describe('snapshot', () => {
    test('default', (done) => {
      const wrapper = mount(Stories.PopulatedItem())
      wrapper.beforeRouteEnterOrUpdate({
        params: { id: FIXTURE_ELASTICSEARCH_DEAL_RESPONSE.DealId }
      }, null, async () => {
        await wrapper.vm.$nextTick()
        expect(wrapper.element).toMatchSnapshot()
        done()
      })
    })
  })
})
