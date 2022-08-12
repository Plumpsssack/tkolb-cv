<template>
  <div class="flex">
    <div class="w-7 h-7">
      <div class="text-center" v-if="icon">
        <font-awesome-icon
          :icon="['fab', icon]"
          size="lg"
          class="text-primary"
        ></font-awesome-icon>
      </div>
      <div v-else class="rounded-lg w-5 h-5 bg-primary mt-1 mx-auto"></div>
    </div>
    <span class="ml-2">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    icon: String,
  },
}
</script>
