<template>
  <el-dropdown @command="handleCommand">
    <span class="language-dropdown">
      <SvgIcon icon-class="language" />
    </span>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh_CN" divided>简体中文</el-dropdown-item>
      <el-dropdown-item command="en_US" divided>English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import { localKey } from '@/config'
  export default {
    name: 'Lang',
    methods: {
      handleCommand(val) {
        localStorage.setItem(localKey.lang, val)
        this.$store.dispatch('settings/changeLang', val)
        this.$i18n.locale = val
      },
    },
  }
</script>

<style lang="scss" scoped></style>
