<template>
  <section class="container">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Mathematics" active>
            <div class="container">
              <!--
              <h4 class="text-success">Test notes</h4>
              <b-button variant="link" v-on:click="testNotes">Test notes (pdf)</b-button>
              -->
              <h4 class="text-success">
                Foundation of analysis (M1F)
                <img alt="CI badge" src="https://travis-ci.org/icl-notes/m1f.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m1f">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m1f">Repository</b-button>
              <h4 class="text-success">
                Mathematical methods (M1M1)
                <img alt="CI badge" src="https://travis-ci.org/icl-notes/m1m1.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m1m1">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m1m1">Repository</b-button>
              <h4 class="text-success">
                Maths for JMC 1 (M1J1)
                <img alt="CI badge" src="https://travis-ci.org/icl-notes/m1j1.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m1j1">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m1j1">Repository</b-button>
              <h4 class="text-success">
                Maths for JMC 2 (M1J2)
                <img alt="CI badge" src="https://travis-ci.org/icl-notes/m1j2.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m1j2">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m1j2">Repository</b-button>
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
        testNotes: function (event) {
            this.downloadNotes("notes-test", "test.pdf");
        },
        m1f: function (event) {
            this.downloadNotes("m1f", "main.pdf");
        },
        m1m1: function (event) {
            this.downloadNotes("m1m1", "main.pdf");
        },
        m1j1: function (event) {
            this.downloadNotes("m1j1", "main.pdf");
        },
        m1j2: function (event) {
            this.downloadNotes("m1j2", "main.pdf");
        },
    },
    props: {
        makeTitle: {
            type: Function
        },
    },
    beforeMount() {
        this.makeTitle("Year 1");
    },
    head () {
        return {
            title: "Mayeul Mike Fournial | Year 1",
            meta: [
                { hid: "description", name: "description", content: "First year notes shared by Mayeul Mike Fournial mmf115"},
            ],
        }
    },
}
</script>
