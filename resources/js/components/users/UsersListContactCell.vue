<template>
  <div
    class="font-weight-bold mb-1"
  >
    {{ item.name }} {{ item.type_name === 'Customer' ? `#${item.id}` : '' }}<br>
    {{ item.email }} {{ item.type_name === 'Customer' ? item.office_phone : item.mobile_phone }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
