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
      <div class="text-sm">{{ project.description }}</div>
      <div class="text-sm italic">{{ project.technology }}</div>
    </div>
  </section-main>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Registration Web Platform for Covid Tests',
          description: 'Design, development and testing of the frontend',
          technology: 'Nuxt / Vue',
        },
        {
          title: 'E-Learning Web Application',
          description: 'Concept, design, fullstack development, testing',
          technology: 'Nuxt / Vue, PHP, MySQL, Next Cloud',
        },
        {
          title: 'Intranet Web Application',
          description: 'Concept, design, fullstack development, testing',
          technology: 'Nuxt / Vue, PHP, MySQL',
        },
        {
          title: 'Network Management Web Software',
          description: 'Design, fullstack development, testing',
          technology: 'C#, Javascript, Neo4j, ASP.NET, Sharepoint, SQL Server',
        },
        {
          title: 'Inventory Management Web / Mobile Platform',
          description: 'Design, fullstack development, testing',
          technology: 'C#, Xamarin, ASP.NET, MySQL',
        },
        {
          title: 'Energy Management - Web Application',
          description: 'Design, fullstack development, testing',
          technology: 'C#, ASP.NET, JavaScript, SQL Server',
        },
        {
          title: 'Web Lab Information System',
          technology: 'C#, ASP.NET, Angular, SQL Server',
          description: 'Design, fullstack development, testing',
        },
      ],
    }
  },
}
</script>
