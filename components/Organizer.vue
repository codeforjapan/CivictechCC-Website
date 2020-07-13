<template>
  <section class="Organizer">
    <section-title
      class="Organizer-Title"
      en-title="Organizer"
      ja-title="運営"
    />
    <span
      v-if="$ua.isFromMobilephone()"
      class="Organizer-Description Organizer-Description-mob"
    >
      主催：一般社団法人コード・フォー・ジャパン
    </span>
    <span v-else class="Organizer-Description"
      >主催：一般社団法人コード・フォー・ジャパン</span
    >
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
    color: #170f7b;
    &-mob {
      font-size: 15px !important;
    }
  }
}
</style>
