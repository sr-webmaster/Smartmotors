<script>
import IndexPage from 'fresh-bus/pages/admin/index.vue'

export default {
  extends: IndexPage,
  layout: IndexPage.layout,
  beforeRouteEnterOrUpdate: IndexPage.beforeRouteEnterOrUpdate
}
</script>
