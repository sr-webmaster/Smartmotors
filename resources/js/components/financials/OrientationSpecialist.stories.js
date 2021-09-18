import { storiesOf } from '@storybook/vue'

// Components
import OrientationSpecialist from './OrientationSpecialist.vue'

storiesOf('SmartMotors|financials/OrientationSpecialist', module)
  .add('defaults', () => {
    return {
      components: { OrientationSpecialist },
      template: `
          <v-container>
            <orientation-specialist />
          </v-container>
      `
    }
  })
