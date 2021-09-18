import { storiesOf } from '@storybook/vue'
import { MAIN } from '../../../../.storybook/categories'

// Components
import SuccessModal from './SuccessModal.vue'

storiesOf(`${MAIN}|SuccessModal`, module)
  .add('default', () => ({
    components: { SuccessModal },
    data () {
      return {
        dialog: true
      }
    },
    template: `
        <success-modal
          v-model="dialog"
        />
        `
  })
  )
