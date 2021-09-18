import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { MAIN } from '../../../../.storybook/categories'

// Components
import DataVisibility from './DataVisibility.vue'

storiesOf(`${MAIN}|DataVisibility`, module)
  .add('default', () => ({
    components: { DataVisibility },
    data () {
      return {
        items: [
          { value: 'pensiero', text: 'Pensiero', active: true },
          { value: 'finitura', text: 'Finitura', active: true },
          { value: 'sopportare', text: 'Sopportare', active: true },
          { value: 'insegnare', text: 'Insegnare', active: false },
          { value: 'industria', text: 'Industria', active: false },
          { value: 'tenere', text: 'Tenere', active: false }
        ]
      }
    },
    methods: {
      apply (payload) {
        action(payload)
      }
    },
    template: `
        <data-visibility
          v-model="items"
        />
        `
  })
  )
