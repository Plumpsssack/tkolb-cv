<template>
  <div
    class="w-32 border border-opacity-10 border-primary shadow-md p-3 rounded-lg grid"
  >
    <font-awesome-icon
      :icon="icon"
      size="2x"
      class="text-primary justify-self-center"
    ></font-awesome-icon>

    <div class="justify-self-center text-sm">{{ title }}</div>
  </div>
</template>
<script>
export default {
  props: {
    icon: String,
    title: String,
  },
}
</script>
