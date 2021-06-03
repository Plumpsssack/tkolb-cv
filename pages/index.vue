<template>
  <div class="bg-neutral h-screen pt-20">
    <div class="mx-auto px-20">
      <div class="grid grid-cols-3 gap-5">
        <profile-img></profile-img>
        <sections-main class="col-span-2"></sections-main>
      </div>

      <div class="grid grid-cols-2 gap-x-5">
        <sections-experience class="col-span-2"></sections-experience>
        <sections-education class="col-span-2"></sections-education>
        <sections-skills></sections-skills>

        <sections-projects></sections-projects>
        <div>
          <sections-certificates></sections-certificates>
          <sections-foreign-languages></sections-foreign-languages>
        </div>

        <sections-favorites></sections-favorites>
      </div>
    </div>
  </div>
</template>

<script>
// 1433,6
export default {}
</script>

<style>
@tailwind base;
@tailwind components;
@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
  h3 {
    @apply font-medium;
  }
}
</style>
