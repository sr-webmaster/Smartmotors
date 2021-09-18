import { storiesOf } from '@storybook/vue'

// Components
import FinancialInformation from './FinancialInformation.vue'

storiesOf('SmartMotors|financials/FinancialInformation', module)
  .add('defaults', () => {
    return {
      components: { FinancialInformation },
      template: `
          <v-container>
            <financial-information />
          </v-container>
      `
    }
  })
