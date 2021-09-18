import { storiesOf } from '@storybook/vue'
import { MAIN } from '../../../../.storybook/categories'

// Components
import Columns from './Columns.vue'

const data = [
  { label: 'a', red: 10, green: 20, blue: 30 },
  { label: 'b', red: 20, green: 30, blue: 40 },
  { label: 'c', red: 30, green: 40, blue: 50 },
  { label: 'd', red: 30, green: 40, blue: 50 },
  { label: 'e', red: 30, green: 40, blue: 50 }
]

const sets = [
  { field: 'red', color: 'red' },
  { field: 'green', color: 'green' },
  { field: 'blue', color: 'blue' }
]

storiesOf(`${MAIN}|charts/Columns`, module)
  .addParameters({
    backgrounds: [
      { name: 'default', value: '#f1f3f6', default: true }
    ]
  })
  .add('default', () => {
    return {
      components: { Columns },
      data () {
        return {
          chartData: {
            data: data,
            sets: sets
          }
        }
      },
      template: `
          <v-container>
          <v-layout row>
            <v-flex sm6>
              <v-card class="px-3 py-3">
                <columns
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
      components: { Columns },
      data () {
        return {
          chartData: {
            data: data,
            sets: sets
          }
        }
      },
      template: `
          <v-container>
          <v-layout row>
            <v-flex sm6>
              <v-card class="px-3 py-3">
                <columns
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
