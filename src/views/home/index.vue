<template>
  <div v-test class="Home-container">
    {{ $t('test') }}
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
    data() {
      return { nodeEnv: process.env.NODE_ENV }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .Home-container {
    ::v-deep {
      .el-card__body {
        > div {
          min-height: 220px;
          padding: 20px;

          > ul {
            > li {
              line-height: 30px;
            }
          }

          > img {
            display: block;
            margin: 40px auto;
            border: 1px solid #dedede;
          }
        }
      }
    }
  }
</style>
