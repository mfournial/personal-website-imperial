<template>
  <section class="container">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Mathematics" active>
            <div class="container">
              <h4 class="text-success">Test notes</h4>
              <b-button variant="link" v-on:click="testNotes">Test notes (pdf)</b-button>
            </div>
          </b-tab>
          <b-tab title="Computing">
            Computing module
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
    },
    props: {
        makeTitle: {
            type: Function
        },
    },
    beforeMount() {
        this.makeTitle("Year 1");
    }
}
</script>
