<template>
  <section class="Sponsor">
    <section-title class="Sponsor-Title" en-title="Sponsors" ja-title="協賛" />
    <div class="d-flex justify-center flex-wrap mt-4">
      <SponsorLogo
        class="Sponsor-Item"
        image-src="sponsors/akatsuki.png"
        href="https://aktsk.jp/"
      />
      <SponsorLogo
        class="Sponsor-Item"
        image-src="sponsors/udtalk.svg"
        href="https://udtalk.jp/"
      />
      <SponsorLogo
        class="Sponsor-Item"
        image-src="sponsors/sakura-internet.svg"
        href="https://www.sakura.ad.jp/"
        image-margin-top-pixel="16.38"
      />
      <SponsorLogo
        class="Sponsor-Item"
        image-src="sponsors/yahoo-japan.svg"
        href="https://www.yahoo.co.jp/"
      />
    </div>
    <BackgroundText
      class="Sponsor-ComingSoon"
      value="And more..."
      color="#a2a2a2"
    />
  </section>
</template>

<script>
import BackgroundText from '@/components/BackgroundText.vue'
import SponsorLogo from '@/components/SponsorLogo.vue'

export default {
  name: 'Sponsor',
  components: {
    BackgroundText,
    SponsorLogo,
  },
}
</script>

<style lang="scss" scoped>
.Sponsor {
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
  &-Item {
    margin: 12px;
  }
  &-ComingSoon {
    display: block;
    margin: 30px auto 10px;
  }
}
</style>
