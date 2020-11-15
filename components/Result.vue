<template>
  <section class="Result">
    <section-title class="Result-Title" en-title="Result" ja-title="結果" />
    <div class="Result-Description">
      <ul>
        <div>
          <li>
            <div class="FirstPrize">
              <div class="FirstPrize-Award">大賞 :</div>
              <div class="FirstPrize-Team">Civichat</div>
              <div class="FirstPrize-Img"><img src="@/static/champ.png" /></div>
            </div>
          </li>
        </div>
        <li v-for="(award, index) in award_result" :key="index">
          <div class="Result-Description-Award">{{ award.award_name }} :</div>
          <div class="Result-Description-Team">{{ award.team_name }}</div>
        </li>
      </ul>
    </div>
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
      margin-bottom: 0;
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
