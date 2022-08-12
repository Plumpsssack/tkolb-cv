<template>
  <section-main title="Certificates">
    <sections-certificates-certificate
      v-for="(certificate, index) of certificates"
      :key="'certificate' + index"
    >
      {{ certificate }}
    </sections-certificates-certificate>
  </section-main>
</template>
<script>
export default {
  data() {
    return {
      certificates: [
        'Project Management	Basic Certificate (GPM)',
        'Vue JS 2 Udemy Course - Certificate of Completion',
        'Nuxt.js Udemy Course - Certificate of Completion',
      ],
    }
  },
}
</script>
