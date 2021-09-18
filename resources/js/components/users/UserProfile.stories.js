import { storiesOf } from '@storybook/vue'
import { MAIN } from '../../../../.storybook/categories'

// Components
import UserProfile from './UserProfile.vue'

storiesOf(`${MAIN}|users/UserProfile`, module)
  .add(
    'for any user',
    () => ({
      components: { UserProfile },
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
            mobile_phone: '789-654-705'
          },
          adminUser: {
            id: 1,
            title: 'Broker',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            name: 'John Doe',
            email: 'john@example.com',
            level_name: 'Company Member',
            office_phone: '789-654-701',
            mobile_phone: '789-654-702'
          },
          company: {
            name: 'ABC Brokers'
          }
        }
      },
      template: `
        <v-container fluid>
          <v-layout row>
            <user-profile
              :user="user"
              :admin-user="adminUser"
              :company="company"
              />
          </v-layout>
        </v-container>
        `
    })
  )
  .add(
    'for me',
    () => ({
      components: { UserProfile },
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
            mobile_phone: '789-654-705'
          },
          adminUser: {
            id: 1,
            title: 'Broker',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            name: 'John Doe',
            email: 'john@example.com',
            level_name: 'Company Member',
            office_phone: '789-654-701',
            mobile_phone: '789-654-702'
          },
          company: {
            name: 'ABC Brokers'
          }
        }
      },
      template: `
        <v-container fluid>
          <v-layout row>
            <user-profile
              :user="user"
              :company="company"
              :admin-user="adminUser"
              isCurrentUser
              />
          </v-layout>
        </v-container>
        `
    })
  )
  .add(
    'for user with isAdmin',
    () => ({
      components: { UserProfile },
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
            mobile_phone: '789-654-705'
          },
          adminUser: {
            id: 1,
            title: 'Broker',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            name: 'John Doe',
            email: 'john@example.com',
            level_name: 'Company Member',
            office_phone: '789-654-701',
            mobile_phone: '789-654-702'
          },
          company: {
            name: 'ABC Brokers'
          }
        }
      },
      template: `
        <v-container fluid>
          <v-layout row>
            <user-profile
              :user="user"
              :company="company"
              :admin-user="adminUser"
              isCurrentUserAdmin
              />
          </v-layout>
        </v-container>
        `
    })
  )
