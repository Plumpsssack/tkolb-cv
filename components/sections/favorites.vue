<template>
  <section-main title="Interests and Activities">
    <div class="grid justify-items-center grid-cols-2">
      <sections-favorites-card
        v-for="(favorite, index) in favorites"
        :key="'favorite_' + index"
        :title="favorite.title"
        :icon="favorite.icon"
      ></sections-favorites-card>
    </div>
  </section-main>
</template>
<script>
export default {
  data() {
    return {
      favorites: [
        { title: 'Bouldering', icon: 'mountain' },
        { title: 'Travel', icon: 'globe-asia' },
        { title: 'Hobby Producer', icon: 'guitar' },
        { title: 'Martial Arts', icon: 'dumbbell' },
      ],
    }
  },
}
</script>
