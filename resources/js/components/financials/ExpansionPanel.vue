<template>
  <v-expansion-panel
    v-model="open"
    expand
    class="mb-4"
  >
    <v-expansion-panel-content>
      <template v-slot:header>
        <div class="subheading font-weight-bold">
          {{ title }}
        </div>
      </template>
      <slot />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      open: [true]
    }
  }
}
</script>
