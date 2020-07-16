<template>
  <section class="Organizer">
    <section-title
      class="Organizer-Title"
      en-title="Organizer"
      ja-title="運営"
    />
    <span class="Organizer-Description"
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
    font-family: $font-ja;
    font-size: 25px;
    font-weight: 700;
    line-height: 2.07;
    letter-spacing: normal;
    color: $indigo-1;
  }
}

@media screen and (max-width: 600px) {
  .Organizer {
    &-Description {
      font-size: 1rem;
    }
  }
}
</style>
