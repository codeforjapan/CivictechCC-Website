// @todo リリース時に ccc2020.code4japan.org に変える
const baseUrl = 'civictechcc.netlify.app'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    title: 'Civictech Challenge Cup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          'CodeforJapan, Civictech, Award, アワード, 審査, 協賛, コンテスト, Civictech Challenge Cup',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Code for Japan',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Civictech Challenge Cup',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://${baseUrl}/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Civictech Challenge Cup',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '学生がつくる未来のカタチ - 身の回りにある問題を学生の力で。 自分が気になる問題にチームで挑戦しましょう！',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Civictech Challenge Cup',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '学生がつくる未来のカタチ - 身の回りにある問題を学生の力で。 自分が気になる問題にチームで挑戦しましょう！',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `https://${baseUrl}/ogp.png`,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `https://${baseUrl}/ogp.png`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-webfontloader', 'nuxt-svg-loader'],

  webfontloader: {
    google: {
      families: ['Spartan:400,500,600,700,800,900', 'Noto Sans JP'],
    },
  },

  googleAnalytics: {
    id: 'UA-165231213-1',
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
  },
}
