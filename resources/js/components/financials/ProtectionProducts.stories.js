import { storiesOf } from '@storybook/vue'

// Components
import ProtectionProducts from './ProtectionProducts.vue'

storiesOf('SmartMotors|financials/ProtectionProducts', module)
  .add('defaults', () => {
    return {
      components: { ProtectionProducts },
      template: `
          <v-container>
            <protection-products />
          </v-container>
      `
    }
  })
