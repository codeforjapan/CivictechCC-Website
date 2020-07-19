<template>
  <section class="Award">
    <section-title
      class="Award-Title"
      en-title="Awards"
      ja-title="表彰・賞典"
    />
    <ul class="Award-Description">
      <li>
        10月下旬ごろに最終報告会・表彰式を開催する予定です
      </li>
      <li>
        協賛各社からの賞を随時公開予定です
      </li>
    </ul>
    <coming-soon class="Award-ComingSoon" />
  </section>
</template>

<script>
export default {
  name: 'Award',
}
</script>

<style lang="scss" scoped>
.Award {
  margin-bottom: 200px;
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
  &-Description {
    position: absolute;
    z-index: 10;
    font-family: $font-ja;
    font-size: 20px;
    font-weight: 700;
    line-height: 2.07;
    letter-spacing: normal;
    color: $indigo-1;
    padding-left: calc(24px + 0.5em); // 24px = .v-application ul のデフォルト値

    li {
      line-height: 25px;
      padding: 0.5em;
    }
  }
  &-ComingSoon {
    left: 0;
    width: 100%;
    height: 0;
    position: absolute;
    margin: auto;
  }
}
</style>
