import { storiesOf } from '@storybook/vue'

// Components
import SaleDetails from './SaleDetails.vue'

storiesOf('SmartMotors|financials/SaleDetails', module)
  .add('defaults', () => {
    return {
      components: { SaleDetails },
      template: `
          <v-container>
            <sale-details />
          </v-container>
      `
    }
  })
