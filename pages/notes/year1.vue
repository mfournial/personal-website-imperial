<template>
  <section class="container">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Mathematics" active>
            <div>
              <b-button variant="link" v-on:click="fetch_notes" id="notes_test">Test notes</b-button>
            </div>
          </b-tab>
          <b-tab title="Computing" active>
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
        head() {
            return {
                script: [
                    { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
                ],
            }
        },
        methods: {
            // On pressing the "get notes button"
            fetch_notes: function (event) {
                console.log(event.srcElement.id);
                console.log(this.$refs.notes_test);
                $.getJSON('https://api.github.com/repos/icl-notes/notes-test/releases/latest', function(data) {
                  var tag = data.tag_name;
                  // var tag = "untagged-12a8e737d2822d8c073f";
                  var down = "https://github.com/icl-notes/notes-test/releases/download/" + tag + "/test.pdf";
                  window.open(down, "self");
                // data[tag_name] === "untagged-12a8e......"
                // URL to match:
                // https://github.com/icl-notes/notes-test/releases/download/untagged-12a8e737d2822d8c073f/test.pdf    
                });
        }
  }
}
</script>
