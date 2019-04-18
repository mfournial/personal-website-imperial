<template>
  <div>
    <section class="container">
      <div class="container">
        <div class="mt-3 text-justify text-dark container">
          <h2 class="text-info text-center">{{ title }}</h2>
          <p>
            These are the notes collected by the <a href="https://github.com/icl-notes">GitHub ICL notes</a> organisation. The notes for computing will likely be hosted on DoC's GitLab and build in DoC's Cloudstack VMs. Right now you should still check out <a href="https://www.doc.ic.ac.uk/~js4416/">Jordan's website</a> for his notes before we clone them. If you have troubles with the website, drop me an email (<a href="mailto:mmf115@ic.ac.uk">@mmf115</a>) or if you have problems with the maths notes follow <a href="https://icl-notes.github.io"> our guide</a>.
          </p>
        </div>
      </div>
    </section>
    <div class="container">
      <nuxt-child :makeTitle=makeTitle />
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
      methods: {
          makeTitle: function(t) {
              this.title = t;
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
