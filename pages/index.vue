<template>
  <section class="container">
    <div>
      <b-button v-b-popover.hover="'popover content!'" title="Popover Title">Hover Me</b-button>
    </div>
    <div>
      <h2>
        Mayeul Fournial is a motivated, hardworking and reliable penultimate year student at Imperial College London on track to achieve a first class degree. He is also the academic representative of in the third year of his course Joint Maths and Computing.
      </h2>
      
      <div class="text-center">
        <b-spinner label="Spinning" />
        <b-spinner type="grow" label="Spinning" />
        <b-spinner variant="primary" label="Spinning" />
        <b-spinner variant="primary" type="grow" label="Spinning" />
        <b-spinner variant="success" label="Spinning" />
        <b-spinner variant="success" type="grow" label="Spinning" />
      </div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/mfournial"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data () {
        return {
            description: "Mayeul Fournial is a motivated, hardworking and reliable penultimate year student at Imperial College London on track to achieve a first class degree. He is also the academic representative of in the third year of his course Joint Maths and Computing.",
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
    }
}
</script>

