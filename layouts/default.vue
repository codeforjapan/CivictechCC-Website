<template>
  <v-app class="app">
    <section class="FirstView">
      <v-app-bar class="Header" elevation="0" height="85px">
        <v-toolbar-title class="Title">
          <span class="Title-Lines">Civictech </span>
          <span class="Title-Lines">Challenge </span>
          <span class="Title-Lines">Cup</span>
        </v-toolbar-title>
        <v-spacer />
        <ButtonEntry inner-padding="10px 20px" />
      </v-app-bar>
      <v-container align-center>
        <FirstView class="FirstView-contain" />
      </v-container>
    </section>
    <v-main class="main" fluid>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer class="Footer" color="rgba(0,0,0,0)" height="60px">
      <a
        class="Privacy-Policy"
        href="https://www.code4japan.org/privacy-policy"
      >
        Privacy Policy
      </a>
      <v-spacer />
      <span class="Code-for-Japan">
        &copy; Code for Japan
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import ButtonEntry from '@/components/ButtonEntry.vue'

export default {
  components: { ButtonEntry },
}
</script>

<style lang="scss" scoped>
html {
  font-family: 'Spartan', Arial, sans-serif;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.app {
  width: 100%;
}

.main {
  margin-top: 50px;
  width: 100%;
}

.Header {
  background-color: rgba(0, 0, 0, 0) !important;
}

.Title {
  font-family: $font-en;
  font-size: 14px;
  font-weight: 800;
  line-height: normal;
  color: #170f7b;
}

.Footer {
  font-family: $font-en;
  font-size: 10px;
  font-weight: 600;
  line-height: 2;
  letter-spacing: 0.67px;
  color: $indigo-1;
  .Privacy-Policy {
    color: $indigo-1;
  }
  .Code-for-Japan {
    text-align: right;
  }
}

.FirstView {
  margin: 0;
  position: static;
  height: 100%;
  text-align: center;
  background-image: url('/CCCBG.svg');
  background-size: cover;
  width: 100%;
  color: #fff;
  align-items: center;

  &-contain {
    width: 100%;
    margin: 3vh auto;
  }
}

@media screen and (max-width: 600px) {
  .Title {
    text-align: left;
    .Title-Lines {
      display: block;
    }
  }
}
</style>
