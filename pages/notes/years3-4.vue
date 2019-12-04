<template>
  <section class="container">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Mathematics" active>
            <div class="container">
              <h4 class="text-success">
                Geometry of Curves and Surfaces (M3P5/M4P5)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/m3p5.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m3p5">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p5">Repository</b-button>
              <h4 class="text-success">
                Algebra III (M3P8/M4P8)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/m3p8.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m3p8">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p8">Repository</b-button>
              <h4 class="text-success">
                Galois Theory (M3P11/M4P11)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/m3p11.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m3p11">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p11">Repository</b-button>
              <h4 class="text-success">
                Number Theory (M3P14/M4P14)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/m3p14.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m3p14">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p14">Repository</b-button>
              <h4 class="text-success">
                Algebraic Number theory (M3P15/M4P15)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/m3p15.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m3p15">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p15">Repository</b-button>
              <h4 class="text-success">
                Algebraic Combinatorics (M3P17/M4P17)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/m3p17.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m3p17">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p17">Repository</b-button>
              <h4 class="text-success">
                Measure and Integration (M3P19/M4P19)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/m3p19.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m3p19">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p19">Repository</b-button>
              <h4 class="text-success">
                Geometry I (M3P20/M4P20)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/m3p20.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m3p20">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p20">Repository</b-button>
              <h4 class="text-success">
                Geometry II (M3P21/M4P21)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/m3p21.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m3p21">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p21">Repository</b-button>
              <h4 class="text-success">
                Mathematical Logic (M3P65/M4P65)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/m3p65.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="m3p65">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p65">Repository</b-button>
            </div>
          </b-tab>
          <b-tab title="Computing">
            <div class="container">
              <h4 class="text-success">
                Scalable Systems for the Cloud (C410)
              </h4>
              <b-button variant="link" href="https://github.com/icl-notes/CO410_19-20/blob/master/scalable_notes.pdf">Notes (pdf)</b-button>
	      <b-badge variant="danger">Not automatically compiled</b-badge>
              <b-button variant="link" href="https://github.com/icl-notes/CO410_19-20">Repository</b-button>
              <h4 class="text-success">
                Computational finance (C422)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/c422.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="c422">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/c422">Repository</b-button>
              <h4 class="text-success">
                Probabilistic Inference (C493)
                <img alt="CI badge" src="https://travis-ci.com/icl-notes/c493.svg?branch=master" />
              </h4>
              <b-button variant="link" v-on:click="c493">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/c493">Repository</b-button>
            </div>
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
        m3p5: function(event) {
            this.downloadNotes("m3p5", "main.pdf");
        },
        m3p8: function(event) {
            this.downloadNotes("m3p8", "main.pdf");
        },
        m3p11: function(event) {
            this.downloadNotes("m3p11", "main.pdf");
        },
        m3p14: function(event) {
            this.downloadNotes("m3p14", "main.pdf");
        },
        m3p15: function (event) {
            this.downloadNotes("m3p15", "main.pdf");
        },
        m3p17: function(event) {
            this.downloadNotes("m3p17", "main.pdf");
        },
        m3p19: function (event) {
            this.downloadNotes("m3p19", "notes.pdf");
        },
        m3p20: function (event) {
            this.downloadNotes("m3p20", "main.pdf");
        },
        m3p21: function (event) {
            this.downloadNotes("m3p21", "main.pdf");
        },
        m3p65: function (event) {
            this.downloadNotes("m3p65", "main.pdf");
        },
        c422: function(event) {
            this.downloadNotes("c422", "main.pdf");
        },
        c493: function(event) {
            this.downloadNotes("c493", "main.pdf");
        },
    },
    props: {
        makeTitle: {
            type: Function
        },
    },
    beforeMount() {
        this.makeTitle("Years 3 & 4");
    },
    head () {
        return {
            title: "Mayeul Mike Fournial | Years 3 & 4",
            meta: [
                { hid: "description", name: "description", content: "Notes for third and fourth year modules shared by Mayeul Mike Fournial mmf115"},
            ],
        }
    },
}
</script>
