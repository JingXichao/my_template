<template>
  <i
    :class="`fs_default ri-${iconClass} ${className}`"
    :style="{ color: color, 'vertical-align': 'bottom' }"
  />
</template>

<script>
  export default {
    name: 'RemixIcon',
    props: {
      iconClass: { type: String, required: true },
      className: { type: String, default: '' },
      color: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style lang="scss" scoped></style>
