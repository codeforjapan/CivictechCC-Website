<template>
  <section class="ThemeSample">
    <v-row>
      <v-col cols="12" md="6">
        <section-title
          class="ThemeSample-Title"
          en-title="Theme Sample"
          ja-title="テーマサンプル"
        />
      </v-col>
      <v-col>
        <div class="ThemeSample-Description">
          <span>
            テーマは何でもOK！
          </span>
          <br />
          <span>
            自分が興味のあるテーマを設定しよう！
          </span>
        </div>
      </v-col>
    </v-row>
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
  margin-bottom: 50px;
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
  &-Description {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 30px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: $indigo-1;
  }
}
</style>
