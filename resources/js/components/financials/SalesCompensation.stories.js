import { storiesOf } from '@storybook/vue'

// Components
import SalesCompensation from './SalesCompensation.vue'

storiesOf('SmartMotors|financials/SalesCompensation', module)
  .add('defaults', () => {
    return {
      components: { SalesCompensation },
      template: `
          <v-container>
            <sales-compensation />
          </v-container>
      `
    }
  })
