<template>
  <div>
    <section class="container">
      <div class="container">
        <div class="mt-3 text-justify text-dark container">
          <h2 class="text-info text-center">{{ title }}</h2>
          <p>
            This is still a work in progress but you will soon see maths and computing notes appear here. You can check out how fast things are going by going on the <a href="https://github.com/icl-notes">GitHub ICL notes</a> organisation. The notes for computing will likely be hosted on DoC's GitLab and build in DoC's Cloudstack VMs.
          </p>
        </div>
      </div>
    </section>
    <div class="container">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              title: "",
          }
      },
      beforeMount() {
          // Note: this will only really work when exporting to static pages
          var year = window.location.href.slice(-1);
          if (year === "4") {
              this.title = "Years 3 & 4";
          } else {
              this.title = "Year " + year;
          }
      },
      head() {
          return {
               script: [
                   { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
               ],
          }
      }
  }
</script>
