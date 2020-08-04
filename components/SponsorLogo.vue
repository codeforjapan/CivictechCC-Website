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
  },
  computed: {
    imageHeight() {
      return this.larger ? '85px' : '60px'
    },
    imageWidth() {
      return this.larger ? '480px' : '300px'
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
    margin: 30px 20px;

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
