<template>
  <section class="container">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Mathematics" active>
            Maths modules
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
    }
}
</script>
