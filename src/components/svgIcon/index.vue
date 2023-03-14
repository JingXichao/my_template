<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
  export default {
    name: 'SvgIcon',
    props: {
      iconClass: { type: String, required: true },
      className: { type: String, default: '' },
    },
    computed: {
      iconName() {
        return `#icon-${this.iconClass}`
      },
      svgClass() {
        return this.className ? `svg-icon ${this.className}` : `svg-icon`
      },
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
