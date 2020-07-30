<template>
  <div class="TwitterShare">
    <v-btn
      rounded
      color="#1DA1F2"
      class="ShareButton"
      href="https://twitter.com/intent/tweet?text=Civictech%20Challenge%20Cup%20U-22&url=https://ccc2020.code4japan.org&hashtags=CCCu22"
      target="noopener noreferrer"
    >
      <img src="/twitter.svg" width="20" alt="twitter" />
      <span>Twitterでシェア</span>
    </v-btn>
    <span>ハッシュタグ: #CCCu22</span>
  </div>
</template>

<script>
export default {
  name: 'TwitterShare',
  methods: {
    twitter() {
      const url =
        'https://twitter.com/intent/tweet?text=Civictech Challenge Cup U-22&url=https://ccc2020.code4japan.org&hashtags=CCCu22'
      window.open(url)
    },
  },
}
</script>

<style lang="scss" scoped>
.TwitterShare {
  font-family: $font-ja;
  color: #170f7b;

  .ShareButton {
    text-transform: none;
    color: #fff;

    .TwitterIcon {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
