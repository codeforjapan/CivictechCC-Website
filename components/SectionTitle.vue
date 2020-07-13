<template>
  <div class="SectionTitle">
    <h1
      v-if="$ua.isFromMobilephone()"
      class="SectionTitle-En SectionTitle-En-mob"
    >
      {{ enTitle }}
    </h1>
    <h1 v-else class="SectionTitle-En">
      {{ enTitle }}
    </h1>
    <h2 class="SectionTitle-Ja">{{ jaTitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    enTitle: {
      type: String,
      required: true,
    },
    jaTitle: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.SectionTitle {
  text-align: left;
  &-En {
    font-family: Spartan, sans-serif;
    font-size: 55px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: -0.8px;
    color: #170f7b;
    &-mob {
      font-size: 35px !important;
    }
  }
  &-Ja {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 20px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.33;
    letter-spacing: normal;
    color: #170f7b;
  }
}
</style>
