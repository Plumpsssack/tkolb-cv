<template>
  <card class="mt-5">
    <h2 class="text-primary mb-2">
      <slot name="title"> </slot>
      {{ title }}
    </h2>
    <slot></slot>
  </card>
</template>
<script>
export default {
  props: {
    title: String,
  },
}
</script>
