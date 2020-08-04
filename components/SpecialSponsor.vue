<template>
  <section class="SpecialSponsor">
    <section-title
      class="SpecialSponsor-Title"
      en-title="Special Sponsors"
      ja-title="特別協賛"
    />
    <BackgroundText class="SpecialSponsor-ComingSoon" value="Coming Soon" />
  </section>
</template>

<script>
import BackgroundText from '@/components/BackgroundText.vue'

export default {
  name: 'SpecialSponsor',
  components: {
    BackgroundText,
  },
}
</script>

<style lang="scss" scoped>
.SpecialSponsor {
  margin-bottom: 200px;
  &-Title {
    margin-left: 0;
    margin-right: auto;
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
