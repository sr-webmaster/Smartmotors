import { storiesOf } from '@storybook/vue'

// Components
import SoldVehicle from './SoldVehicle.vue'

storiesOf('SmartMotors|financials/SoldVehicle', module)
  .add('defaults', () => {
    return {
      components: { SoldVehicle },
      template: `
          <v-container>
            <sold-vehicle />
          </v-container>
      `
    }
  })
