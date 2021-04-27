<template>
  <section class="Result">
    <section-title class="Result-Title" en-title="Result" ja-title="結果" />
    <v-row class="Result-Description">
      <v-col cols="12">
        <div class="FirstPrize">
          <v-row align="center">
            <v-col style="flex-basis: 200px; flex-grow: 0">
              <div class="FirstPrize-Award">大賞 :</div>
              <div class="FirstPrize-Team">Civichat</div>
            </v-col>
            <v-col style="flex-grow: 1">
              <p>
                <ExternalLink href="https://civichat.jp">Civichat</ExternalLink>
                は2020年12月から熊本地震の「被災者支援制度」の案内ツールとして<ExternalLink
                  href="https://prtimes.jp/main/html/rd/p/000000002.000070804.html"
                  >実証実験を行い</ExternalLink
                >、現在ベータ版を提供しています。（<ExternalLink
                  href="https://www.city.kumamoto.jp/hpkiji/pub/detail.aspx?c_id=5&type=top&id=34085"
                  >市公式リリース</ExternalLink
                >）
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="Result-Description">
          <ul>
            <li v-for="(award, index) in award_result" :key="index">
              <div class="Result-Description-Award">
                {{ award.award_name }} :
              </div>
              <div class="Result-Description-Team">{{ award.team_name }}</div>
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      award_result: [
        { award_name: 'オーディエンス賞', team_name: 'noob_fighter' },
        { award_name: 'クリーチャーズ賞', team_name: 'Hrasvelgr' },
        { award_name: 'アカツキ賞', team_name: 'Fork Bomb' },
        { award_name: 'UDトーク賞', team_name: 'でんとつー' },
        { award_name: 'さくらインターネット賞', team_name: 'でんとつー' },
        { award_name: 'ヤフー賞', team_name: 'itirnk' },
        { award_name: 'Salesforce賞', team_name: 'Hrasvelgr' },
        { award_name: 'ヤマト賞', team_name: 'Code By Ray' },
        { award_name: 'PLAID賞', team_name: 'noob_fighter' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.Result {
  margin-bottom: 50px;
  &-Title {
    margin: {
      left: 0;
      right: auto;
    }
  }

  &-Description {
    line-height: 2.07;
    letter-spacing: normal;
    color: $indigo-1;
    padding-left: 1em;
    font: {
      family: $font-ja;
      size: 20px;
      weight: 700;
    }

    p {
      line-height: 1.5em;
      margin-top: 0.5em;
      margin-bottom: 0;
      text-indent: 1em;

      &:first-of-type {
        margin-top: 1em;
      }
    }

    ul {
      margin-bottom: 0.5em;
      padding-left: calc(
        24px + 0.5em
      ); // 24px = .v-application ul のデフォルト値
    }

    li {
      display: inline-block;
      list-style: none;
      margin-left: -1rem;
      line-height: 20px;
      padding: 1em 2em;
    }
    &-Award {
      font-size: 15px;
      margin-bottom: 10px;
    }
    &-Team {
      font-size: 35px;
      font-weight: bold;
    }

    &-SeeAlso {
      margin-left: -0.6em;
      font: {
        size: 75%;
        weight: 500;
      }
    }
  }
}
.FirstPrize {
  width: 100%;
  line-height: 50px;
  &-Team {
    font-size: 50px;
  }
  &-Images {
    background: rgb(92, 92, 92);
  }
  img {
    margin-top: 1em;
    width: 50vw;
  }
}

@media screen and (max-width: 750px) {
  .Result {
    &-Description {
      ul {
        padding-left: 24px;
      }
      li {
        display: block;
        padding: 1em 0;
      }
    }
    .FirstPrize {
      &-Img {
        margin: 0 auto;
        margin-left: -24px; //ulのpadding-left分
        text-align: center;
        img {
          width: 80vw;
        }
      }
    }
  }
}
</style>
