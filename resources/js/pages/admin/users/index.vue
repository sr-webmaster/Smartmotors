<script>
import Users from 'fresh-bus/pages/admin/users/index.vue'
import UsersListContactCell from '../../../components/users/UsersListContactCell'

export default {
  extends: Users,
  layout: 'admin-list',
  beforeRouteEnterOrUpdate: Users.beforeRouteEnterOrUpdate,
  data () {
    return {
      columns: [
        { text: 'Status', sortable: true, value: 'status', align: 'center' },
        { text: 'Name / Contact', value: 'contact', align: 'left', component: UsersListContactCell },
        { text: 'User Type', readOnly: true, sortable: true, value: 'type_name', align: 'center' },
        { text: 'BUS Role', sortable: true, value: 'level', align: 'center' },
        { text: 'Manage', sortable: false, value: 'manage', align: 'center' }
      ],
      itemActions: [
        { action: 'edit', text: 'View / Edit' },
        { action: 'delete', text: 'Delete' }
      ],
      filterWithoutState: true,
      filterWithoutCompany: true
    }
  }
}
</script>
