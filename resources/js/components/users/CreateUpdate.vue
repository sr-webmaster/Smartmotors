<script>
import CreateUpdate from 'fresh-bus/components/users/CreateUpdate.vue'

export default {
  extends: CreateUpdate,
  watch: {
    'userModel.type': function (type) {
      this.$emit('changed-type', type)
    }
  }
}
</script>
