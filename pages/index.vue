<template>
  <v-layout column justify-center align-center>
    <section class="FirstView">
      <v-container class="fill-height">
        <FirstView class="FirstView-contain" />
      </v-container>
    </section>
    <div>
      <h1 class="title">
        CCC-Website
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </v-layout>
</template>

<style lang="scss" scoped>
.FirstView {
  margin: 0;
  position: static;
  height: 100vh;
  text-align: center;
  background-image: url('/CCCBG.svg');
  background-size: cover;
  width: 100%;
  color: #fff;
  align-items: center;

  &-contain {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
