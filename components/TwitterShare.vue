<template>
  <div class="ButtonCols">
    <v-btn
      fab
      small
      elevation="1"
      color="#1DA1F2"
      class="ShareButton"
      href="https://twitter.com/intent/tweet?text=Civictech%20Challenge%20Cup%20U-22&url=https://ccc2020.code4japan.org&hashtags=CCCu22"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/twitter.svg" width="20" alt="twitter" />
    </v-btn>
    <a
      href="https://twitter.com/intent/tweet?text=Civictech%20Challenge%20Cup%20U-22&url=https://ccc2020.code4japan.org&hashtags=CCCu22"
      target="_blank"
      rel="noopener noreferrer"
    >
      #CCCu22 でシェア
    </a>
  </div>
</template>

<script>
export default {
  name: 'TwitterShare',
}
</script>

<style lang="scss" scoped>
.ButtonCols {
  font-family: $font-ja;
  font-size: 20px;
  font-weight: bold;
  color: #170f7b;
  margin: 0 auto;
  text-align: left;
  width: 240px;
  .ShareButton {
    text-transform: none;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    margin: 0 auto;

    .TwitterIcon {
      width: 25px;
      height: 25px;
      margin: 10px 0;
    }
  }

  a {
    color: #170f7b;
    text-decoration: none;
    margin: 0 10px;
  }
}
</style>
