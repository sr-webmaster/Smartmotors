import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { MAIN } from '../../../../.storybook/categories'

// Components
import ExportModal from './ExportModal.vue'

storiesOf(`${MAIN}|ExportModal`, module)
  .add('default', () => ({
    components: { ExportModal },
    methods: {
      exportReport (payload) {
        action(payload)
      }
    },
    template: `
        <export-modal
          @export="exportReport"
        />
        `
  })
  )
