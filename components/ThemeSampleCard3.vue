<template>
  <v-card class="ThemeSampleCard" height="100%" color="#f5f5f2" elevation="0">
    <v-layout justify-center align-center column>
      <v-card-subtitle class="ThemeSampleCard-SubTitle">
        [Sample 3]
      </v-card-subtitle>
      <v-card-title class="ThemeSampleCard-Title">
        学力の測り方を再考しよう
      </v-card-title>
      <v-card-text class="ThemeSampleCard-Description">
        定期テストは生徒の学力を正しく測れているのだろうか。新たな学力を測る方法を技術で作り上げ、生徒一人一人が正しく評価される社会を作ってみませんか？
      </v-card-text>
      <Hundreds class="ThemeSampleCard-Image" />
    </v-layout>
  </v-card>
</template>

<script>
import Hundreds from '@/static/hundreds.svg'
export default {
  name: 'ThemeSampleCard3',
  components: {
    Hundreds,
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
