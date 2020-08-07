<template>
  <section class="Schedule">
    <section-title
      class="Schedule-Title"
      en-title="Schedule"
      ja-title="コンテストの流れ"
    />
    <ul>
      <li>
        <v-row>
          <v-col cols="12" md="3">
            <span class="Schedule-List-Title">エントリー募集期間</span>
          </v-col>
          <v-col cols="12" md="9">
            <span class="Schedule-List-Content">
              7月17日（金）〜 8月31日（月）
            </span>
            <span class="Schedule-List-Content-Small">
              ※
              但し、7月31日（金）までにエントリーするとすべてのイベントに参加可能
            </span>
          </v-col>
        </v-row>
      </li>
      <li>
        <v-row>
          <v-col cols="12" md="3"
            ><span class="Schedule-List-Title">作品応募期間</span></v-col
          >
          <v-col cols="12" md="9"
            ><span class="Schedule-List-Content">9/30(水)まで</span></v-col
          >
        </v-row>
      </li>
      <li>
        <v-row>
          <v-col cols="12" md="3"
            ><span class="Schedule-List-Title">ファイナリスト選出</span></v-col
          >
          <v-col cols="12" md="9">
            <span class="Schedule-List-Content">
              10月上旬
            </span>
            <span class="Schedule-List-Content-Small">
              審査基準をもとにファイナリストが選出されます。
            </span>
          </v-col>
        </v-row>
      </li>
      <li>
        <v-row>
          <v-col cols="12" md="3"
            ><span class="Schedule-List-Title">最終審査会</span></v-col
          >
          <v-col cols="12" md="9">
            <span class="Schedule-List-Content">
              10月25日(日)
            </span>
            <span class="Schedule-List-Content-Small">
              ファイナリストの中から大賞・企業賞が授与されます。
            </span>
          </v-col>
        </v-row>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Schedule',
}
</script>

<style lang="scss" scoped>
.Schedule {
  margin-bottom: 50px;
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
  &-Description {
    font-family: $font-ja;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: normal;
    color: $indigo-1;
  }
  &-List {
    &-Title {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: normal;
      color: $indigo-1;
    }
    &-Content {
      display: block;
      font-size: 17px;
      font-weight: 500;
      line-height: 1.43;
      letter-spacing: normal;
      color: $indigo-1;
      &-Small {
        display: block;
        font-size: 14px;
        font-weight: 500;
        line-height: 2;
        letter-spacing: normal;
        color: $indigo-1;
      }
    }
  }
  ul {
    counter-reset: number;
    list-style-type: none !important;
    padding: 0.5em;
    background: transparent;
  }
  ul li {
    position: relative;
    line-height: 25px;
    padding: 0.5em 0.5em 0.5em 20px;
    font-family: $font-ja;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1.4px;
    color: $indigo-1;
  }

  ul li::before {
    position: absolute;
    content: '';
    display: inline-block;
    background: $indigo-1;
    border-radius: 50%;
    left: 0;
    top: 30px;
    width: 10px;
    height: 10px;
    line-height: 16px;
    text-align: center;
  }
}
</style>
