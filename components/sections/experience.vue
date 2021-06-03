<template>
  <section-main title="Work Experience">
    <sections-tools-timeline :values="values"></sections-tools-timeline>
  </section-main>
</template>
<script>
export default {
  data() {
    return {
      values: [
        {
          date: 'April 2019 – present',
          header:
            'IMEDAC GmbH - Institute for Medical Data Management and Consulting',
          description: 'Software developer',
        },
        {
          date: 'September 2017	– April 2019',
          header:
            'werusys Institute for Applied Systems Analysis and IndustrialInformatics GmbH & Co. KG',
          description: 'Software developer',
        },
        {
          date: 'August	2013 – August 2014',
          header: 'Hope	For	Life',
          description: 'Voluntary	social	year',
        },
      ],
    }
  },
}
</script>
