<template>
  <v-app class="app">
    <v-app-bar elevation="0" height="85px" color="rgba(0,0,0,0)">
      <v-toolbar-title class="Title">Civictech Challenge Cup</v-toolbar-title>
      <v-spacer />
      <v-btn class="Ently-Button" height="55px" rounded color="#170f7b" dark>
        <div class="Ently-1">エントリーする</div>
        <span class="Ently-2">８月３１日（月）まで！</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer class="Footer" color="rgba(0,0,0,0)" height="60px">
      <a
        class="Privacy-Policy"
        href="https://www.code4japan.org/privacy-policy"
      >
        Privacy Policy
        <v-icon color="#170f7b" size="10px">mdi-open-in-new</v-icon>
      </a>
      <v-spacer />
      <span class="Code-for-Japan">
        &copy; Code for Japan
      </span>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
html {
  font-family: 'Spartan', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.Title {
  font-family: Spartan, sans-serif;
  font-size: 14px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #170f7b;
}
.Ently-Button {
  .Ently-1 {
    display: block !important;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: -4px;
  }

  .Ently-2 {
    display: block !important;
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.75px;
    text-align: center;
    margin-top: 6px;
  }

  ::v-deep .v-btn__content {
    display: block;
    padding: 10px 20px;
  }
}

.Footer {
  font-family: Spartan, sans-serif;
  font-size: 10px;
  font-weight: lighter;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.67px;
  color: #170f7b;
  .Privacy-Policy {
    color: #170f7b;
  }
  .Code-for-Japan {
    text-align: right;
  }
}
</style>
