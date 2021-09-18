import { storiesOf } from '@storybook/vue'

// Components
import BasicInformation from './BasicInformation.vue'

storiesOf('SmartMotors|financials/BasicInformation', module)
  .add('defaults', () => {
    return {
      components: { BasicInformation },
      template: `
          <v-container>
            <basic-information />
          </v-container>
      `
    }
  })
