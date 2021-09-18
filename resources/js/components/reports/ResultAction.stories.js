import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { MAIN } from '../../../../.storybook/categories'

// Components
import ResultAction from './ResultAction.vue'

storiesOf(`${MAIN}|ResultAction`, module)
  .addParameters({
    backgrounds: [
      { name: 'default', value: '#f1f3f6', default: true }
    ]
  })
  .add('default', () => ({
    methods: {
      dataVisibility () {
        action('dataVisibility')('Clicked')
      },
      saveReport () {
        action('saveReport')('Clicked')
      },
      exportReport () {
        action('exportReport')('Clicked')
      }
    },
    components: { ResultAction },
    template: `
      <v-container>
        <result-action
        @data-visibility="dataVisibility"
        @save-report="saveReport"
        @export-report="exportReport"
        />
      </v-container>
    `
  }))
  .add('filters', () => ({
    data () {
      return {
        filter: {
          date_before: 'Oct 7',
          date_after: 'Oct 13'
        }
      }
    },
    methods: {
      dataVisibility () {
        action('dataVisibility')('Clicked')
      },
      saveReport () {
        action('saveReport')('Clicked')
      },
      exportReport () {
        action('exportReport')('Clicked')
      }
    },
    components: { ResultAction },
    template: `
      <v-container>
        <result-action
        :filters="filter"
        @data-visibility="dataVisibility"
        @save-report="saveReport"
        @export-report="exportReport"
        />
      </v-container>
    `
  }))
