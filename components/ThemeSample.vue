<template>
  <section class="ThemeSample">
    <section-title
      class="ThemeSample-Title"
      en-title="Theme Sample"
      ja-title="テーマサンプル"
    />
    <v-flex grow wrap>
      <v-row wrap>
        <v-col cols="12" md="3" sm="6">
          <theme-sample-card-1 />
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <theme-sample-card-2 />
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <theme-sample-card-3 />
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <theme-sample-card-4 />
        </v-col>
      </v-row>
    </v-flex>
  </section>
</template>

<style lang="scss" scoped>
.ThemeSample {
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
}
</style>
