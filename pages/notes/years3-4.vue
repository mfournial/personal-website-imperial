<template>
  <section class="container">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Mathematics" active>
            <div class="container">
              <h4 class="text-success">Measure and Integration (M3P19/M4P19)</h4>
              <b-button variant="link" v-on:click="m3p19">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p19">Repository</b-button>
              <h4 class="text-success">Galois Theory (M3P11/M4P11)</h4>
              <b-button variant="link" v-on:click="m3p11">Notes (pdf)</b-button>
              <b-button variant="link" href="https://github.com/icl-notes/m3p11">Repository</b-button>
            </div>
          </b-tab>
          <b-tab title="Computing">
            Computing modules
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
        m3p19: function (event) {
            this.downloadNotes("m3p19", "notes.pdf");
        },
        m3p11: function(event) {
            this.downloadNotes("m3p11", "main.pdf");
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
            title: "Mayeul Fournial | Years 3 & 4",
            meta: [
                { hid: "description", name: "description", content: "Notes for third and fourth year modules"},
            ],
        }
    },
}
</script>
