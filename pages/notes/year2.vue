<template>
  <section class="container">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Mathematics" active>
            <div class="container">
              <h4 class="text-success">
                Metric Spaces and topology (M2PM5)
                <img alt="CI badge" src="https://travis-ci.org/icl-notes/m2pm5.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m2pm5">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m2pm5">Repository</b-button>
            </div>
          </b-tab>
          <b-tab title="Computing">
            <a href="https://www.doc.ic.ac.uk/~js4416/year1.html">Jordan's notes</a>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        downloadNotes: function(repoName, outputName) {
            $.getJSON('https://api.github.com/repos/icl-notes/' + repoName + '/releases/latest', function(data) {
                var tag = data.tag_name;
                var down = "https://github.com/icl-notes/" + repoName + "/releases/download/" + tag + "/" + outputName;
                window.open(down, "self");
            });
        },
        m2pm5: function(event) {
            this.downloadNotes("m2pm5", "main.pdf");
        },
    },
    props: {
        makeTitle: {
            type: Function
        },
    },
    beforeMount() {
        this.makeTitle("Year 2");
    },
    head () {
        return {
            title: "Mayeul Fournial | Year 2",
            meta: [
                { hid: "description", name: "description", content: "Second year notes"},
            ],
        }
    },
}
</script>
