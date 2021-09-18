import { storiesOf } from '@storybook/vue'

// Components
import DeliveryDetails from './DeliveryDetails.vue'

storiesOf('SmartMotors|financials/DeliveryDetails', module)
  .add('defaults', () => {
    return {
      components: { DeliveryDetails },
      template: `
          <v-container>
            <delivery-details />
          </v-container>
      `
    }
  })
