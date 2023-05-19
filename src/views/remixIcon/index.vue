<template>
  <div class="remixIcon-container">
    <h2>Remix Icon</h2>
    <el-select v-model="directories" placeholder="">
      <el-option
        v-for="item in directoriesOptions"
        :key="item"
        :label="item"
        :value="item"
      ></el-option>
    </el-select>
    <el-row :gutter="20" class="mt_4">
      <el-col
        v-for="(item, index) in iconData[directories]"
        :key="index"
        :xs="6"
        :sm="8"
        :md="3"
        :lg="2"
        :xl="2"
      >
        <el-card
          shadow="hover"
          class="cursor"
          @click.native="handleClipboard(item, $event)"
        >
          <RemixIcon :icon-class="item" class-name="fs_max" />
        </el-card>
        <div class="fs_small text_omit mb_1 icon-text">{{ item }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import handleClipboard from '@/utils/clipboard'
  import iconData from './data'
  export default {
    name: 'RemixIcons',
    data() {
      return {
        iconData,
        directories: 'Buildings',
      }
    },
    computed: {
      directoriesOptions() {
        return Object.keys(this.iconData)
      },
    },
    created() {},
    methods: {
      handleClipboard(val, event) {
        const copyText = `<RemixIcon icon-class="${val}" color="" class-name="" />`
        handleClipboard(copyText, event)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .remixIcon-container {
    ::v-deep {
      .el-card__body {
        display: flex;
        flex-direction: column;
        align-items: center; /* 垂直居中 */
        justify-content: center; /* 水平居中 */
      }
    }
    .icon-text {
      margin-top: -15px;
      text-align: center;
      width: 100%;
    }
  }
</style>
