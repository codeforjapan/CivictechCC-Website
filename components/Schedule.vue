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
              7月13日（月）〜 8月31日（月）
            </span>
            <br />
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
          <v-col cols="12" md="9"
            ><span class="Schedule-List-Content">10月上旬</span></v-col
          >
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
    color: #170f7b;
  }
  &-List {
    &-Title {
      font-size: 20px;
      font-weight: 700;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      color: #170f7b;
    }
    &-Content {
      font-size: 17px;
      font-weight: 400;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.43;
      letter-spacing: normal;
      color: #170f7b;
      &-Small {
        font-size: 14px;
        font-weight: 400;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        color: #170f7b;
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
    padding: 0.5em 0.5em 0.5em 70px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 20px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 1.4px;
    color: #170f7b;
  }

  ul li::before {
    position: absolute;
    content: '';
    display: inline-block;
    background: #170f7b;
    border-radius: 50%;
    left: 0;
    top: 26px;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
  }
}
</style>
