<template>
  <section-main title="Computing Skills">
    <div class="grid grid-cols-2 gap-4">
      <sections-skills-skill
        v-for="(skill, index) in skills"
        :key="'skill_' + index"
        :icon="skill.icon"
      >
        {{ skill.title }}
      </sections-skills-skill>
    </div>
  </section-main>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        { title: 'C#' },
        { title: 'Javascript', icon: 'js-square' },
        { title: 'Vue | Nuxt | JQuery', icon: 'vuejs' },
        { title: 'ASP.NET | Forms | MVC' },
        { title: 'HTML5 | CSS3 | SCSS', icon: 'html5' },
        { title: 'Bootstrap | TailwindCSS', icon: 'bootstrap' },
        { title: 'NodeJS', icon: 'node-js' },
        { title: 'PHP', icon: 'php' },
        { title: 'MySQL | SQL Server' },
        { title: 'Neo4j' },
        { title: 'Git | Azure DevOps', icon: 'git-alt' },
        { title: 'Scrum' },
        { title: 'MVVM | MVP | MVC' },
        // { title: 'Xamarin' },
        // { title: 'Angular', icon: 'angular' },
      ],
    }
  },
}
</script>
