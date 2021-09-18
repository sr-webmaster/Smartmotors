import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '~/components/charts/Columns'

const data = [
  { label: 'a', red: 10, green: 20, blue: 30 },
  { label: 'b', red: 20, green: 30, blue: 40 },
  { label: 'c', red: 30, green: 40, blue: 50 }
]

const sets = [
  { field: 'red', color: 'red' },
  { field: 'green', color: 'green' },
  { field: 'blue', color: 'blue' }
]

describe('Columns', () => {
  let localVue

  describe('Snapshot', () => {
    test('default', () => {
      global.SVGPathElement = jest.fn()
      localVue = createLocalVue()

      const wrapper = shallowMount(Component, {
        propsData: {
          chartData: { data, sets }
        },
        localVue: localVue
      })

      expect(wrapper.element).toMatchSnapshot()
    })
    test('with format', () => {
      global.SVGPathElement = jest.fn()
      localVue = createLocalVue()

      const wrapper = shallowMount(Component, {
        propsData: {
          chartData: { data, sets },
          numberFormat: "'$'#,##a"
        },
        localVue: localVue
      })

      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
