<template>
  <v-card class="ThemeSampleCard" height="100%" color="#f5f5f2">
    <v-layout justify-center align-center column>
      <v-card-subtitle class="ThemeSampleCard-SubTitle">
        [Sample 1]
      </v-card-subtitle>
      <v-card-title class="ThemeSampleCard-Title">
        登校せずに、登校しよう
      </v-card-title>
      <v-card-text class="ThemeSampleCard-Description">
        朝の満員電車は嫌だけど、オンライン授業は切り替えが難しい。そんな悩みを、技術で解決してみませんか？
      </v-card-text>
      <School class="ThemeSampleCard-Image" />
    </v-layout>
  </v-card>
</template>

<script>
import School from '@/static/School.svg'
export default {
  name: 'ThemeSampleCard1',
  components: {
    School,
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
