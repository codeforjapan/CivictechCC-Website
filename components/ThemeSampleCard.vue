<template>
  <v-card class="ThemeSampleCard" height="100%" color="#f5f5f2" elevation="0">
    <v-layout justify-center align-center column>
      <v-card-subtitle class="ThemeSampleCard-SubTitle">
        {{ subtitle }}
      </v-card-subtitle>
      <v-card-title class="ThemeSampleCard-Title">
        {{ title }}
      </v-card-title>
      <v-card-text class="ThemeSampleCard-Description">
        {{ description }}
      </v-card-text>
      <slot name="image" />
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'ThemeSampleCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.ThemeSampleCard {
  padding: 5px;
  align-items: center;
  &-SubTitle {
    font-family: $font-en;
    font-size: 12px;
    font-weight: 800;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #52b86a !important;
  }
  &-Title {
    font-family: $font-ja;
    font-size: 24px;
    font-weight: 900;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: center;
    color: $indigo-1;
    padding-top: 0;
  }
  &-Description {
    font-family: $font-ja;
    font-size: 12px;
    font-weight: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: $indigo-1;
  }
}
</style>
