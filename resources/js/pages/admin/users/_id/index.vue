<script>
import UserPage from 'fresh-bus/pages/admin/users/_id/index.vue'
import UserProfile from '~/components/users/UserProfile.vue'

export default {
  components: {
    UserProfile
  },
  extends: UserPage,
  layout: UserPage.layout,
  beforeRouteEnterOrUpdate: UserPage.beforeRouteEnterOrUpdate
}
</script>
