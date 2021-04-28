<template>
  <v-btn
    class="ButtonEntry"
    height="55px"
    rounded
    color="#170f7b"
    href="https://ccc2021.code4japan.org/"
    target="_blank"
    rel="noreferrer noopener"
  >
    <div class="ButtonEntry-Inner" :style="{ padding: innerPadding }">
      <div class="ButtonEntry-Line1">2021年版はこちらから</div>
    </div>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonEntry',
  props: {
    innerPadding: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.ButtonEntry {
  &-Line1,
  &-Line2 {
    font-family: $font-ja;
    color: white;
    text-align: center;
    line-height: 1;
  }
  &-Line1 {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-top: -2px;
  }

  &-Line2 {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.75px;
    margin-top: 6px;
  }
}

@media screen and (max-width: 600px) {
  .ButtonEntry {
    width: 220px;
    &-Line1 {
      font-size: 12px;
    }
  }
}
</style>
