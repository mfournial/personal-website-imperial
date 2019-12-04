const pkg = require('./package')

export default {
  env: {
    baseUrl: process.env.BASE_URL || 'https://www.doc.ic.ac.uk/~mmf115/'
  }
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/~mmf115/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/bootstrap-vue',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
  ],
  bootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false // or `bvCSS`
  },
  styleResources: {
    sass: ["assets/boostrap/scss/bootstrap.scss"],
    less: [],
    stylus: []
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        // BootstrapVue and PortalVue require access to the global Vue reference (via import Vue from 'vue').
        config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
      }
    }
  },
  robots: {
    UserAgent: '*',
    Disallow: '/_nuxt',
    Sitemap: 'https://www.doc.ic.ac.uk/~mmf115/sitemap.xml'
  },
  router: {
    base: '/~mmf115/'
  },
}
