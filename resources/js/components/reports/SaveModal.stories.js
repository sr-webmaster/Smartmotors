import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { MAIN } from '../../../../.storybook/categories'

// Components
import SaveModal from './SaveModal.vue'

storiesOf(`${MAIN}|SaveModal`, module)
  .add('mocked props', () => ({
    components: { SaveModal },
    data () {
      return {
        items: [
          { id: 1, name: 'usque' },
          { id: 2, name: 'bianco' },
          { id: 3, name: 'leggere' },
          { id: 4, name: 'mescolare' }
        ]
      }
    },
    methods: {
      save (payload) {
        action(payload)
      }
    },
    template: `
        <save-modal
          :items-one="items"
          :items-two="items"
          @save="save"
        />
        `
  })
  )
