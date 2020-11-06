<template>
  <section class="Result">
    <section-title class="Result-Title" en-title="Result" ja-title="結果" />
    <div class="Result-Description">
      <ul>
        <li>
          <span class="FirstPrize">
            大賞 : Civichat
          </span>
        </li>
        <li>
          オーディエンス賞 : noob_fighter
        </li>
        <li>
          クリーチャーズ賞 : Hrasvelgr
        </li>
        <li>
          アカツキ賞 : Fork Bomb
        </li>
        <li>
          UDトーク賞 : でんとつー
        </li>
        <li>
          さくらインターネット賞 : でんとつー
        </li>
        <li>
          ヤフー賞 : itrink
        </li>
        <li>
          Salesforce賞 : Hrasvelgr
        </li>
        <li>
          ヤマト賞 : Code By Ray
        </li>
        <li>
          PLAID賞 : noob_fighter
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Result',
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
      line-height: 15px;
      padding: 0.5em;
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
  font: {
    size: 150%;
    weight: 600;
  }
}
</style>
