<template>
  <v-card class="ThemeSampleCard" height="100%" color="#f5f5f2">
    <v-layout justify-center align-center column>
      <v-card-subtitle class="ThemeSampleCard-SubTitle">
        [Sample 4]
      </v-card-subtitle>
      <v-card-title class="ThemeSampleCard-Title">
        忘れても良い社会にしよう
      </v-card-title>
      <v-card-text class="ThemeSampleCard-Description">
        発達障害、認知症の方など含め、覚えておくのが苦手な人は沢山いる。疲れていたら誰しも集中力は低下する。物忘れをしても、忘れ物をしても、困らない仕組み・ツールで誰かを(あるいは自分を)救ってみませんか？
      </v-card-text>
      <Mind class="ThemeSampleCard-Image" />
    </v-layout>
  </v-card>
</template>

<script>
import Mind from '@/static/Mind.svg'
export default {
  name: 'ThemeSampleCard4',
  components: {
    Mind,
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
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #52b86a !important;
  }
  &-Title {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 24px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: center;
    color: #170f7b;
    padding-top: 0;
  }
  &-Description {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: #170f7b;
  }
  &-Image {
    height: auto;
    width: 100%;
    padding: 30px;
  }
}
</style>
