import { storiesOf } from '@storybook/vue'
import { MAIN } from '../../../.storybook/categories'

// Components
import FilterLabel from './FilterLabel.vue'

storiesOf(`${MAIN}|FilterLabel`, module)
  .addParameters({
    backgrounds: [
      { name: 'default', value: '#f1f3f6', default: true }
    ]
  })
  .add('default', () => ({
    components: { FilterLabel },
    template: `
      <v-container style="background-color: rgba(0,0,0,.2)">
        <filter-label>
          label
        </filter-label>
      </v-container>
    `
  }))
  .add('black', () => ({
    components: { FilterLabel },
    template: `
      <v-container style="background-color: rgba(0,0,0,.2)">
        <filter-label
          color="black"
        >
          black label
        </filter-label>
      </v-container>
    `
  }))
