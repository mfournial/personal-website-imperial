<template>
  <div>
    <section class="container">
      <b-navbar toggleable="lg" type="dark" variant="info" sticky fixed="top">
        <b-navbar-brand to="/" class="mb-0">Mayeul Fournial</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item to="/notes/year1">Year 1</b-nav-item>
            <b-nav-item to="/notes/year2">Year 2</b-nav-item>
            <b-nav-item to="/notes/years3-4">Years 3 & 4</b-nav-item>
            <b-nav-item href="CV/cv-mayeul-FOURNIAL.pdf">CV</b-nav-item>
            <b-nav-item to="/about">
              <em>About</em>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://github.com/mfournial"><img src="github-light.png" alt="GitHub" /></b-nav-item>
            <b-nav-item href="https://linkedin.com/in/mfournial"><img src="linkedin-light.png" alt="LinkedIn" /></b-nav-item>
            <b-nav-form @submit="duckThis">
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="LM(DD)GTFY" v-model="search.input" required />
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </section>
    <nuxt />
  </div>
</template>

<style>
p {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<style lang="scss">
  @import './assets/bootstrap/scss/bootstrap.scss';
</style>

<script>
  export default {
    data() {
      return {
        search: {
          input: '',
        }
      }
    },
    methods: {
      duckThis(evt) {
        evt.preventDefault();
        var url = "http://lmgtfy.com/?s=d&q="
        window.location = url + encodeURIComponent(this.search.input);
      }
    }
  }
</script>
