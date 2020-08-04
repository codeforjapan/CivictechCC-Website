<template>
  <section class="Sponsor">
    <section-title class="Sponsor-Title" en-title="Sponsors" ja-title="協賛" />
    <BackgroundText class="Sponsor-ComingSoon" value="Coming Soon" />
  </section>
</template>

<script>
import BackgroundText from '@/components/BackgroundText.vue'

export default {
  name: 'Sponsor',
  components: {
    BackgroundText,
  },
}
</script>

<style lang="scss" scoped>
.Sponsor {
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
