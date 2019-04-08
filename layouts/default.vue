<template>
  <div>
    <section class="container">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">Mayeul Fournial</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item-dropdown text="Notes" right>
              <b-dropdown-item to="/notes/year1">Year 1</b-dropdown-item>
              <b-dropdown-item to="/notes/year2">Year 2</b-dropdown-item>
              <b-dropdown-item to="/notes/years3-4">Year 3 & 4</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/projects">Projects and Interests</b-nav-item>
            <b-nav-item to="/CV/cv-mayeul-FOURNIAL.pdf">CV</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form @submit="duckThis">
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Troll search" v-model="search.input" required />
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <b-nav-item to="/about">
              <em>About</em>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </section>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
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
