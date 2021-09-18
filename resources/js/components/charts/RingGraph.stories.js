import { storiesOf } from '@storybook/vue'

// Components
import RingGraph from './RingGraph.vue'

const data = [
  { label: 'a', value: 10 },
  { label: 'b', value: 20 },
  { label: 'c', value: 30 },
  { label: 'd', value: 30 },
  { label: 'e', value: 30 }
]

storiesOf('SmartMotors|charts/RingGraph', module)
  .addParameters({
    backgrounds: [
      { name: 'default', value: '#f1f3f6', default: true }
    ]
  })
  .add('default', () => {
    return {
      components: { RingGraph },
      data () {
        return {
          chartData: {
            data: data
          }
        }
      },
      template: `
          <v-container>
          <v-layout row>
            <v-flex sm6>
              <v-card class="px-3 py-3">
                <ring-graph
                  :chart-data="chartData"
                />
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      `
    }
  })
  .add('with format', () => {
    return {
      components: { RingGraph },
      data () {
        return {
          chartData: {
            data: data
          }
        }
      },
      template: `
          <v-container>
          <v-layout row>
            <v-flex sm6>
              <v-card class="px-3 py-3">
                <ring-graph
                  :chart-data="chartData"
                  number-format="'$'#,##a"
                />
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      `
    }
  })
