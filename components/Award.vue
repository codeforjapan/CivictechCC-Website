<template>
  <section class="Award">
    <section-title
      class="Award-Title"
      en-title="Awards"
      ja-title="表彰・賞典"
    />
    <div class="Award-Description">
      <p>選出されたファイナリストから次の賞が授与されます。</p>
      <ul>
        <li>大賞: 1作品（賞金 50万円）</li>
        <li>企業賞: 数作品（賞金 10万円）</li>
      </ul>
      <p>
        10月25日に最終審査会を開催する予定です。<span
          class="Award-Description-SeeAlso"
          >（詳細は「コンテストの流れ」セクションを参照）</span
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Award',
}
</script>

<style lang="scss" scoped>
.Award {
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
</style>
