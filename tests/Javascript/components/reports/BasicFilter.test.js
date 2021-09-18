import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import { FIXTURE_SALES_TYPES } from 'tests/__data__/salesTypes'
import Component from '~/components/reports/BasicFilter.vue'

describe('BasicFilter', () => {
  // Component instance "under test"
  let localVue
  describe('Snapshots', () => {
    test('defaults', () => {
      localVue = createLocalVue()
      const wrapper = mount(Component, {
        localVue: localVue
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })
  describe('Props and Data', () => {
    describe('data.type === props.filters.type', () => {
      test('data.type is reactive to props.filters.type', async () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            filters: { type: null },
            types: []
          }
        })
        expect(wrapper.vm.type).toBeNull()
        wrapper.setProps({
          filters: {
            type: 2
          }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.type).toEqual(2)
      })
    })
    describe('data.status === props.filters.status', () => {
      test('data.status is reactive to props.filters.status', async () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            filters: { status: null },
            types: []
          }
        })
        expect(wrapper.vm.status).toBeNull()
        wrapper.setProps({
          filters: {
            status: 2
          }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.status).toEqual(2)
      })
    })
    describe('data.customer_uuid === props.filters.customer_uuid', () => {
      test('data.customer_uuid is reactive to props.filters.customer_uuid', async () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            filters: { customer_uuid: null },
            types: []
          }
        })
        expect(wrapper.vm.customer_uuid).toBeNull()
        wrapper.setProps({
          filters: {
            customer_uuid: 2
          }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.customer_uuid).toEqual(2)
      })
    })
    describe('data.salesrep_uuid === props.filters.salesrep_uuid', () => {
      test('data.salesrep_uuid is reactive to props.filters.salesrep_uuid', async () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            filters: { salesrep_uuid: null },
            types: []
          }
        })
        expect(wrapper.vm.salesrep_uuid).toBeNull()
        wrapper.setProps({
          filters: {
            salesrep_uuid: 2
          }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.salesrep_uuid).toEqual(2)
      })
    })
    describe('data.lot === props.filters.lot', () => {
      test('data.lot is reactive to props.filters.lot', async () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            filters: { lot: null },
            types: []
          }
        })
        expect(wrapper.vm.lot).toBeNull()
        wrapper.setProps({
          filters: {
            lot: 2
          }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.lot).toEqual(2)
      })
    })
  })
  describe('Methods', () => {
    beforeEach(() => {
      localVue = createLocalVue()
    })
    describe('selectType()', () => {
      [
        {
          paramDesc: 'object::text,value',
          goodValue: FIXTURE_SALES_TYPES[1],
          badValue: { value: 3425564, text: 'nope' }
        },
        {
          paramDesc: 'number',
          goodValue: 2,
          badValue: 2341243
        }
      ].forEach((item) => {
        test(`with param ${item.paramDesc} property "type" is set from the types list`, () => {
          const wrapper = shallowMount(Component, {
            propsData: {
              types: FIXTURE_SALES_TYPES
            }
          })
          wrapper.vm.selectType(item.goodValue)
          expect(wrapper.vm.type).toEqual(2)
        })
        test(`with param ${item.paramDesc} does not alter filter property "type"`, () => {
          const wrapper = shallowMount(Component, {
            propsData: {
              filters: {
                type: 3
              },
              types: FIXTURE_SALES_TYPES
            }
          })
          wrapper.vm.selectType(item.goodValue)
          expect(wrapper.props().filters).toHaveProperty('type', 3)
          expect(wrapper.vm.filters).toHaveProperty('type', 3)
        })
        test(`with param ${item.paramDesc} no errors thrown and nothing set if types is empty`, () => {
          const wrapper = shallowMount(Component, {
            propsData: {
              types: []
            }
          })
          wrapper.vm.selectType(item.goodValue)
          expect(wrapper.vm.type).toBeUndefined()
        })
        test(`with param ${item.paramDesc} no errors thrown and nothing set if there is no match`, () => {
          const wrapper = shallowMount(Component, {
            propsData: {
              filters: { type: null },
              types: []
            }
          })
          wrapper.vm.selectType(item.badValue)
          expect(wrapper.vm.type).toBeNull()
        })
      })
    })
    describe('selectSalesRep', () => {
      test('sets salesrep_uuid', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            filters: {
              status: null,
              type: null,
              lot: null,
              salesrep_uuid: null,
              customer_uuid: null,
              date_after: null,
              date_before: null
            }
          }
        })
        wrapper.vm.selectSalesRep({ pbs_id: 1 })
        expect(wrapper.vm.salesrep_uuid).toBe(1)
        wrapper.vm.selectSalesRep()
        expect(wrapper.vm.salesrep_uuid).toBeNull()
      })

      test('does not alter filters prop', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            filters: {
              status: null,
              type: null,
              lot: null,
              salesrep_uuid: null,
              customer_uuid: null,
              date_after: null,
              date_before: null
            }
          }
        })
        wrapper.vm.selectSalesRep({ pbs_id: '9991.qa/4222ad75-3f91-4e20-a4f7-d63e5c4b35c0' })
        expect(wrapper.vm.filters).toHaveProperty('salesrep_uuid', null)
        expect(wrapper.props().filters).toHaveProperty('salesrep_uuid', null)
      })
    })
    describe('selectCustomer', () => {
      test('sets customer_uuid', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            filters: {
              status: null,
              type: null,
              lot: null,
              salesrep_uuid: null,
              customer_uuid: null,
              date_after: null,
              date_before: null
            }
          }
        })
        wrapper.vm.selectCustomer({ pbs_id: '9991.qa/4222ad75-3f91-4e20-a4f7-d63e5c4b35c0' })
        expect(wrapper.vm.customer_uuid).toBe('9991.qa/4222ad75-3f91-4e20-a4f7-d63e5c4b35c0')
        wrapper.vm.selectCustomer()
        expect(wrapper.vm.customer_uuid).toBeNull()
      })
      test('does not alter filters prop', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            filters: {
              status: null,
              type: null,
              lot: null,
              salesrep_uuid: null,
              customer_uuid: null,
              date_after: null,
              date_before: null
            }
          }
        })
        wrapper.vm.selectCustomer({ pbs_id: '9991.qa/4222ad75-3f91-4e20-a4f7-d63e5c4b35c0' })
        expect(wrapper.vm.filters).toHaveProperty('customer_uuid', null)
        expect(wrapper.props().filters).toHaveProperty('customer_uuid', null)
      })
    })
    describe('generate()', () => {
      test('emit generate event', () => {
        const wrapper = shallowMount(Component)
        wrapper.vm.generate()
        expect(wrapper.emitted().generate).toBeTruthy()
      })
      test('set date_after and date_before from range', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            filters: {
              status: null,
              type: null,
              salesrep_uuid: null,
              customer_id: null,
              date_after: null,
              date_before: null
            }
          }
        })
        wrapper.setData({
          range: {
            start: '2019-12-11',
            end: '2019-12-17'
          }
        })
        wrapper.vm.generate()
        expect(wrapper.emitted().generate).toBeTruthy()
        expect(wrapper.emitted().generate).toHaveLength(1)
        expect(wrapper.emitted().generate[0]).toHaveLength(1)
        expect(wrapper.emitted().generate[0][0]).toHaveProperty('date_after', '2019-12-11')
        expect(wrapper.emitted().generate[0][0]).toHaveProperty('date_before', '2019-12-17')

        wrapper.setData({ range: null })
        wrapper.vm.generate()
        expect(wrapper.emitted().generate).toBeTruthy()
        expect(wrapper.emitted().generate).toHaveLength(2)
        expect(wrapper.emitted().generate[1]).toHaveLength(1)
        expect(wrapper.emitted().generate[1][0]).toHaveProperty('date_after', null)
        expect(wrapper.emitted().generate[1][0]).toHaveProperty('date_before', null)
      })
    })
  })
  describe('data()', () => {
    beforeEach(() => {
      localVue = createLocalVue()
    })
    test('range is set if date_before and/or date_after are set', () => {
      localVue = createLocalVue()
      const wrapper = mount(Component, {
        localVue,
        propsData: {
          filters: {
            status: null,
            type: null,
            lot: null,
            salesrep_uuid: null,
            customer_id: null,
            date_after: '2019-12-11',
            date_before: '2019-12-17'
          }
        }
      })
      expect(wrapper.vm.range).toEqual({
        start: '2019-12-11',
        end: '2019-12-17'
      })
    })
  })
})
