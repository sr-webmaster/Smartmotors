<template>
  <div :class="`${color}--text`">
    <strong class="no-wrap">
      <slot />
    </strong>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>
<style lang="styl" scoped>
  .filter-label  {
    font-size: 13px;
    line-height: 22px;
  }
  .no-wrap{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
