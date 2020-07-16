<template>
  <div class="Contact-Button">
    <v-btn
      height="55px"
      rounded
      color="#170f7b"
      outlined
      href="https://forms.gle/rxUU9V3CQ71MpZkZ6"
      target="_blank"
    >
      <span class="Contact-Button-Label">お問い合わせ・取材依頼はこちら</span>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.Contact-Button {
  margin-right: auto;
  margin-left: auto;

  &-Label {
    font-family: $font-ja;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.93px;
  }
}
</style>
