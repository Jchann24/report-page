export default {
  target: 'static',
  router: {
    base: '/report-page/'
  },
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Enrichment Report',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'https://icon-library.com/images/github-icon-svg/github-icon-svg-16.jpg'
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css',
        integrity:
          'sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
      }
    ],
    script: [
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.bundle.min.js',
        integrity:
          'sha384-BOsAfwzjNJHrJ8cZidOg56tcQWfp6y72vEJ8xQ9w6Quywb24iOsW913URv1IS4GD',
        crossorigin: 'anonymous',
        body: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#428fc9' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/components'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
