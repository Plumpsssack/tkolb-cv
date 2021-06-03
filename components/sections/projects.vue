<template>
  <section-main title="Projects">
    <div
      v-for="(project, index) in projects"
      :key="'project_' + index"
      class="mb-1"
    >
      <h3>
        {{ project.title }}
      </h3>

      <div class="text-sm">{{ project.technology }}</div>
    </div>
  </section-main>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Covid School Test Registration Software',
          technology: 'Nuxt | Vue',
        },
        {
          title: 'E-Learning Web Application',
          technology: 'Nuxt | Vue, Php, MySQL, Next Cloud',
        },
        {
          title: 'Intranet Web Application',
          technology: 'Nuxt | Vue, Php, MySQL',
        },
        {
          title: 'Network Management Software',
          technology: 'C#, Javascript, Neo4j, ASP.NET, Sharepoint, SQL Server',
        },
        {
          title: 'Inventory Management',
          technology: 'C#, Xamarin, ASP.NET, MySQL',
        },
        {
          title: 'Renewal Datapoint - Application',
          technology: 'C#, ASP.NET, JavaScript, SQL Server',
        },

        {
          title: 'Renewal Lab Information System',
          technology: 'C#, ASP.NET, Angular',
        },
      ],
    }
  },
}
</script>
