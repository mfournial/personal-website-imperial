<template>
  <section class="container">
    <div>
    <b-alert show>Fuck</b-alert>
    <b-button v-b-popover.hover="'I am popover content!'" title="Popover Title">Hover Me</b-button>
    </div>
    <div>
      <logo />
      <h1 class="title">
        personal-website
      </h1>
      <h2 class="subtitle">
        Personal ~mmf115 website
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    data () {
        return {
            description: "Personal website of Mayeul Fournial (mfournial@outlook.com)",
            title: "Index",
        }
    },
    head () {
        return {
            title: "Mayeul Fournial | ".concat(this.title),
            meta: [
                { hid: "description", name: "description", content: this.description },
            ],
        }
    },
    components: {
        Logo
    },
}
</script>

