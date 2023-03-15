<template>
  <svg
    :class="`svg-icon ${this.className}`"
    aria-hidden="true"
    :style="{ color: color, fill: color }"
  >
    <use :xlink:href="`#icon-${iconClass}`" />
  </svg>
</template>

<script>
  export default {
    name: 'SvgIcon',
    props: {
      iconClass: { type: String, required: true },
      className: { type: String, default: '' },
      color: { type: String, default: '#2c3e50' },
    },
  }
</script>

<style lang="scss" scoped>
  .svg-icon {
    display: inline-block;
    vertical-align: middle;
    width: 15px;
    height: 15px;
    overflow: hidden;
  }
</style>
