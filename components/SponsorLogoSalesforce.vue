<template>
  <v-btn
    class="SponsorLogo"
    tile
    color="white"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    elevation="0"
  >
    <v-img
      class="SponsorLogo-Image"
      :src="imageSrc"
      contain
      :height="imageHeight"
      :width="imageWidth"
      eager
    />
  </v-btn>
</template>

<script>
export default {
  name: 'SponsorLogoSalesforce',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageHeight() {
      return '80px'
    },
    imageWidth() {
      return '300px'
    },
  },
}
</script>

<style lang="scss" scoped>
.SponsorLogo {
  &.v-btn {
    height: 100%;
    padding: 0;
  }

  &-Image {
    /*
     * ロゴが正方形に近いので
     *  - 画像の height を 80px (初期値: 60px)
     *  - margin-top & margin-bottom をそれぞれ 20px (初期値: 30px)
     * に調整
     */
    margin: {
      left: 25px;
      right: 25px;
      top: 20px;
      bottom: 20px;
    }

    @media screen and (max-width: 479px) {
      max-width: 360px !important;
    }
    @media screen and (max-width: 424px) {
      max-width: 330px !important;
    }
    @media screen and (max-width: 374px) {
      max-width: 300px !important;
    }
  }
}
</style>

<style lang="scss">
.SponsorLogo .v-btn__content:hover {
  opacity: 0.9;
}
</style>
