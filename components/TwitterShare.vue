<template>
  <v-row class="TwitterShare">
    <v-col cols="6" class="ButtonCols">
      <v-btn
        rounded
        large
        color="#1DA1F2"
        class="ShareButton"
        href="https://twitter.com/intent/tweet?text=Civictech%20Challenge%20Cup%20U-22&url=https://ccc2020.code4japan.org&hashtags=CCCu22"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/twitter.svg" width="20" alt="twitter" />
        <span>Twitterでシェア</span>
      </v-btn>
    </v-col>
    <v-col cols="6" class="HashtagCols">
      <span>#CCCu22</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TwitterShare',
}
</script>

<style lang="scss" scoped>
.TwitterShare {
  font-family: $font-ja;
  font-size: 20px;
  font-weight: bold;
  color: #170f7b;

  .ButtonCols {
    text-align: right;
    .ShareButton {
      text-transform: none;
      font-size: 15px;
      font-weight: bold;
      color: #fff;

      .TwitterIcon {
        width: 25px;
        height: 25px;
        margin: 10px 0;
      }
    }
  }
  .HashtagCols {
    margin: auto 0;
    text-align: left;
  }
}
</style>
