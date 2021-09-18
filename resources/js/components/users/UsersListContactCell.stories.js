import { storiesOf } from '@storybook/vue'
import UsersListContactCell from './UsersListContactCell'
import { MAIN } from '../../../../.storybook/categories'

storiesOf(`${MAIN}|users/UsersListContactCell`, module)
  .add('staff user', () => ({
    components: { UsersListContactCell },
    data () {
      return {
        user: {
          id: 2,
          title: 'Agent',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          name: 'Victoria Ma',
          email: 'victoria@example.com',
          level_name: 'Company Member',
          office_phone: '789-654-704',
          mobile_phone: '789-654-705',
          type_name: 'Staff'
        }
      }
    },
    template: `
      <v-container>
        <users-list-contact-cell
          :item="user" />
      </v-container>
`
  }))
  .add('customer user', () => ({
    components: { UsersListContactCell },
    data () {
      return {
        user: {
          id: 2,
          title: 'Agent',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          name: 'Victoria Ma',
          email: 'victoria@example.com',
          level_name: 'Company Member',
          office_phone: '789-654-704',
          mobile_phone: '789-654-705',
          type_name: 'Customer'
        }
      }
    },
    template: `
      <v-container>
        <users-list-contact-cell
          :item="user" />
      </v-container>
`
  }))
