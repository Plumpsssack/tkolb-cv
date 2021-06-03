<template>
  <section-main title="Education">
    <sections-tools-timeline :values="values"></sections-tools-timeline>

    <div class="grid grid-cols-3 gap-x-4 gap-y-2">
      <div></div>
      <div class="col-span-2">
        <h3></h3>
        <div></div>
      </div>
      <div></div>
      <div class="col-span-2">
        <h3></h3>
        <div></div>
      </div>
      <div></div>
      <div class="col-span-2">
        <h3></h3>
      </div>
      <div></div>
      <div class="col-span-2">
        <h3></h3>
        <div></div>
      </div>
    </div>
  </section-main>
</template>
<script>
export default {
  data() {
    return {
      values: [
        {
          date: 'January 2015 – September 2017',
          header:
            '   werusys Institute for Applied Systems Analysis and IndustrialInformatics GmbH & Co. KG',
          description: 'Mathematical technical software developer',
        },
        {
          date: 'March 2015 – November 2017',
          header: 'FH Aachen',
          description: 'Scientific Programming (Bachelor of Science)',
        },
        {
          date: 'October 2014 – March 2015',
          header: 'Rheinische Friedrich-Wilhelms-University Bonn',
          description: '',
        },
        {
          date: '2004 – 2013',
          header: 'High school Konrad Duden Wesel',
          description: 'higher education entrance qualification (A-levels)',
        },
      ],
    }
  },
}
</script>
