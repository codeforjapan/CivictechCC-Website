<template>
  <span class="BackgroundText" :style="{ color: color }">{{ value }}</span>
</template>

<script>
export default {
  name: 'BackgroundText',
  props: {
    value: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#d8d8d8',
    },
  },
}
</script>

<style lang="scss" scoped>
.BackgroundText {
  font-family: $font-en;
  font-size: 80px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: -2.51px;
  text-align: center;

  /* テキストを選択不能にする */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
