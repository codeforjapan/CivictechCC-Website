<template>
  <section class="Result">
    <section-title class="Result-Title" en-title="Result" ja-title="結果" />
    <div class="Result-Description">
      <ul>
        <li>
          <span class="FirstPrize">
            <div class="FirstPrize-Award">大賞 :</div>
            <div class="FirstPrize-Team">Civichat</div>
          </span>
        </li>
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
      line-height: 20px;
      padding: 1em;
      padding-left: 0.5em;
      .Result-Description-Award {
        font-size: 15px;
        margin-bottom: 10px;
      }
      .Result-Description-Team {
        font-size: 30px;
      }
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
  line-height: 50px;
  &-Team {
    font-size: 50px;
  }
}
</style>
