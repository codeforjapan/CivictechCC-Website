<template>
  <v-card class="ThemeSampleCard" height="100%" color="#f5f5f2" elevation="0">
    <v-layout justify-center align-center column>
      <v-card-subtitle class="ThemeSampleCard-SubTitle">
        [Sample 2]
      </v-card-subtitle>
      <v-card-title class="ThemeSampleCard-Title">
        街の行列を減らそう
      </v-card-title>
      <v-card-text class="ThemeSampleCard-Description">
        「密」を避けようとすればするほど、街の行列は長くなる。行列を無くし、密と無駄な時間を減らす方法を考えてみませんか？
      </v-card-text>
      <People class="ThemeSampleCard-Image" />
    </v-layout>
  </v-card>
</template>

<script>
import People from '@/static/People.svg'
export default {
  name: 'ThemeSampleCard2',
  components: {
    People,
  },
}
</script>

<style lang="scss" scoped>
.ThemeSampleCard {
  padding: 5px;
  align-items: center;
  &-SubTitle {
    font-family: Spartan, sans-serif;
    font-size: 12px;
    font-weight: 800;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #52b86a !important;
  }
  &-Title {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 24px;
    font-weight: 900;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: center;
    color: $indigo-1;
    padding-top: 0;
  }
  &-Description {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: $indigo-1;
  }
  &-Image {
    height: auto;
    width: 100%;
    padding: 30px;
  }
}
</style>
