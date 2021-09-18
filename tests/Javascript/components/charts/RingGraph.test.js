import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '~/components/charts/RingGraph'

const data = [
  { label: 'a', value: 10 },
  { label: 'b', value: 20 },
  { label: 'c', value: 30 },
  { label: 'd', value: 30 },
  { label: 'e', value: 30 }
]

describe('RingGraph', () => {
  let localVue

  describe('Snapshot', () => {
    test('default', () => {
      global.SVGPathElement = jest.fn()
      localVue = createLocalVue()

      const wrapper = shallowMount(Component, {
        propsData: {
          chartData: { data }
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
          chartData: { data },
          numberFormat: "'$'#,##a"
        },
        localVue: localVue
      })

      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('Methods', () => {
    test('render', () => {
      global.SVGPathElement = jest.fn()
      localVue = createLocalVue()

      const wrapper = shallowMount(Component, {
        propsData: {
          chartData: { data }
        },
        localVue: localVue
      })

      const chart = {
        series: {
          push: jest.fn()
        }
      }

      wrapper.setData({ chart })
      wrapper.vm.render()
      expect(chart.series.push).not.toHaveBeenCalled()
    })
  })
})
