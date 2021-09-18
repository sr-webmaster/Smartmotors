import { storiesOf } from '@storybook/vue'

// Components
import TradeInVehicle from './TradeInVehicle.vue'

storiesOf('SmartMotors|financials/TradeInVehicle', module)
  .add('defaults', () => {
    return {
      components: { TradeInVehicle },
      template: `
          <v-container>
            <trade-in-vehicle />
          </v-container>
      `
    }
  })
