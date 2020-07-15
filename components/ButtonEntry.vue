<template>
  <v-btn class="ButtonEntry" height="55px" rounded color="#170f7b">
    <div class="ButtonEntry-Inner" :style="{ padding: innerPadding }">
      <div class="ButtonEntry-Line1">エントリーする</div>
      <div class="ButtonEntry-Line2">8月31日（月）まで！</div>
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
    color: white;
    text-align: center;
    line-height: 1;
  }
  &-Line1 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    margin-top: -3px;
  }

  &-Line2 {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.75px;
    margin-top: 5px;
  }
}
</style>
