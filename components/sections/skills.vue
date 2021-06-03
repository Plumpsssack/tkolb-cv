<template>
  <section-main title="Computing Skills">
    <div class="grid grid-cols-2 gap-4">
      <sections-skills-skill
        v-for="(skill, index) in skills"
        :key="'skill_' + index"
      >
        {{ skill }}
      </sections-skills-skill>
    </div>
  </section-main>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        'C#',
        'Javascript',
        'Vue | Nuxt | JQuery',
        'ASP.NET | Forms | MVC',
        'HTML5 | CSS3 | SCSS',
        'Bootstrap | TailwindCSS',
        'NodeJS',
        'PHP',
        'MySQL | SQL Server',
        'Neo4j',
        'Git | Azure DevOps',
        'Scrum',
        'MVVM | MVP | MVC',
        'Xamarin',
        'Angular',
      ],
    }
  },
}
</script>
