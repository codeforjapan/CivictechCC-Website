<template>
  <section class="Award">
    <section-title class="Award-Title" en-title="Award" ja-title="賞" />
    <span class="Award-Description">
      協賛各社からの賞を随時公開予定です
    </span>
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
  margin-bottom: 100px;
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
  &-Description {
    position: absolute;
    z-index: 10;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 26px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.07;
    letter-spacing: normal;
    color: #170f7b;
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
