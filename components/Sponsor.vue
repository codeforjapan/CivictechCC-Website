<template>
  <section class="Sponsor">
    <section-title class="Sponsor-Title" en-title="Sponsors" ja-title="協賛" />
    <coming-soon class="Sponsor-ComingSoon" />
  </section>
</template>

<script>
export default {
  name: 'Sponsor',
}
</script>

<style lang="scss" scoped>
.Sponsor {
  margin-bottom: 200px;
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
  &-ComingSoon {
    left: 0;
    width: 100%;
    height: 0;
    position: absolute;
    margin: auto;
  }
}
</style>
