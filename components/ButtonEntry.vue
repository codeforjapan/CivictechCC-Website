<template>
  <v-btn
    class="ButtonEntry"
    height="55px"
    rounded
    color="#170f7b"
    href="https://forms.gle/NttQ2oR4FHusbWvm9"
    target="_blank"
    rel="noopener"
  >
    <div class="ButtonEntry-Inner" :style="{ padding: innerPadding }">
      <div class="ButtonEntry-Line1">エントリーする</div>
      <div class="ButtonEntry-Line2">8月31日まで！</div>
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
</style>
