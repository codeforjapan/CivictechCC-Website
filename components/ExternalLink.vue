<template>
  <span>
    <a :href="href" target="_blank" rel="noopener"><slot></slot></a
    ><OpenInNew class="ExternalLink-Icon" />
  </span>
</template>

<script>
import OpenInNew from '@/assets/open-in-new.svg'
export default {
  components: {
    OpenInNew,
  },
  props: {
    href: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.ExternalLink {
  &-Icon {
    display: inline-block;
    height: 0.86em;
    width: 0.86em;

    margin: {
      top: -4px;
    }

    vertical-align: middle;
    stroke: currentColor;
    stroke-width: 0.05px;
  }
}
</style>
