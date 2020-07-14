<template>
  <section class="Organizer">
    <section-title
      class="Organizer-Title"
      en-title="Organizer"
      ja-title="主催など"
    />
    <span class="Organizer-Description">
      主催：一般社団法人コード・フォー・ジャパン
    </span>
  </section>
</template>

<script>
export default {
  name: 'Organizer',
}
</script>

<style lang="scss" scoped>
.Organizer {
  margin-bottom: 100px;
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
  &-Description {
    position: absolute;
    z-index: 10;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 20px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.07;
    letter-spacing: normal;
    color: $indigo-1;
  }
}
</style>
