<template>
  <div>
    <div
      v-for="(value, index) in values"
      class="grid grid-cols-3 gap-x-4 mb-1"
      :key="'value_' + index"
    >
      <div>{{ value.date }}</div>
      <div class="col-span-2">
        <h3>
          {{ value.header }}
        </h3>
        <div>{{ value.description }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    values: Array,
  },
}
</script>
