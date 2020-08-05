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
      :style="{
        marginTop: calculatedImageMarginTop,
        marginBottom: calculatedImageMarginBottom,
      }"
      eager
    />
  </v-btn>
</template>

<script>
export default {
  name: 'SponsorLogo',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    larger: {
      type: Boolean,
      default: false,
    },
    imageMarginTopPixel: {
      type: Number,
      required: false,
      default: undefined,
    },
  },
  computed: {
    imageHeight() {
      return this.larger ? '85px' : '60px'
    },
    imageWidth() {
      return this.larger ? '480px' : '300px'
    },
    calculatedImageMarginTop() {
      return this.imageMarginTopPixel ? `${this.imageMarginTopPixel}px` : '30px'
    },
    calculatedImageMarginBottom() {
      return this.imageMarginTop
        ? `${30 + (30 - this.imageMarginTopPixel)}px`
        : '30px'
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
    margin: {
      left: 25px;
      right: 25px;
    }

    /*
     * margin-top & margin-bottom はインラインで設定
     * ロゴによって上下の位置をずらす必要があるためそれぞれ計算する
     * 初期値は margin-top: 30px; margin-bottom: 30px;
     */

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
