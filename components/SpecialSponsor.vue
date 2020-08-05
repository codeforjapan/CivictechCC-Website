<template>
  <section class="SpecialSponsor">
    <section-title
      class="SpecialSponsor-Title"
      en-title="Special Sponsors"
      ja-title="特別協賛"
    />
    <div class="d-flex justify-center flex-wrap mt-4">
      <SponsorLogo
        class="SpecialSponsor-Item"
        image-src="sponsors/creatures.svg"
        href="https://www.creatures.co.jp/"
        larger
      />
    </div>
    <BackgroundText class="d-none SpecialSponsor-ComingSoon" value="And more" />
  </section>
</template>

<script>
import BackgroundText from '@/components/BackgroundText.vue'
import SponsorLogo from '@/components/SponsorLogo.vue'

export default {
  name: 'SpecialSponsor',
  components: {
    BackgroundText,
    SponsorLogo,
  },
}
</script>

<style lang="scss" scoped>
.SpecialSponsor {
  margin-bottom: 80px;
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
  &-Item {
    margin: 12px 8px;
  }

  /* &-ComingSoon {
    left: 0;
    width: 100%;
    height: 0;
    position: absolute;
    margin: auto;
  } */
}
</style>
