<template>
  <section class="Sponsor">
    <section-title class="Sponsor-Title" en-title="Sponsors" ja-title="協賛" />
    <div class="d-flex justify-center flex-wrap mt-4">
      <SponsorLogo
        class="Sponsor-Item"
        image-src="sp/akatsuki.png"
        href="https://aktsk.jp/"
      />
      <SponsorLogo
        class="Sponsor-Item"
        image-src="sp/udtalk.svg"
        href="https://udtalk.jp/"
      />
      <SponsorLogo
        class="Sponsor-Item"
        image-src="sp/sakura-internet.svg"
        href="https://www.sakura.ad.jp/"
        :image-margin-top-pixel="16.38"
      />
      <SponsorLogo
        class="Sponsor-Item"
        image-src="sp/yahoo-japan.svg"
        href="https://www.yahoo.co.jp/"
      />
      <SponsorLogoSalesforce
        class="Sponsor-Item"
        image-src="sp/salesforce.svg"
        href="https://www.salesforce.com/jp/"
      />
      <SponsorLogo
        class="Sponsor-Item"
        image-src="sp/yamato.png"
        href="https://www.yamato-hd.co.jp/"
      />
    </div>
    <BackgroundText
      class="Sponsor-AndMore"
      value="And more..."
      color="#a2a2a2"
      font-size="48px"
    />
  </section>
</template>

<script>
import BackgroundText from '@/components/BackgroundText.vue'
import SponsorLogo from '@/components/SponsorLogo.vue'
import SponsorLogoSalesforce from '@/components/SponsorLogoSalesforce.vue'

export default {
  name: 'Sponsor',
  components: {
    BackgroundText,
    SponsorLogo,
    SponsorLogoSalesforce,
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
  &-AndMore {
    display: block;
    margin: 25px auto 10px;
  }
}
</style>
