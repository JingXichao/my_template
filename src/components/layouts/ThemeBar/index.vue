<template>
  <span v-if="themeBar">
    <!-- <i title="主题配置" class="el-icon-eleme" @click="handleOpenThemeBar" /> -->
    <div class="theme-bar-setting">
      <div @click="handleOpenThemeBar">
        <RemixIcon icon-class="t-shirt-line" color="#fff" />
        <p>主题配置</p>
      </div>
    </div>

    <el-drawer
      title="主题配置"
      :visible.sync="drawerVisible"
      direction="rtl"
      append-to-body
      size="470px"
    >
      <el-scrollbar
        style="height: calc((var(--curHeight) - 77px); overflow: hidden"
      >
        <div class="el-drawer__body">
          <el-form ref="form" :model="theme" label-position="top">
            <el-form-item label="主题">
              <el-radio-group v-model="theme.name">
                <el-radio-button label="default">默认</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="布局">
              <el-radio-group v-model="theme.layout">
                <el-radio-button label="vertical">纵向布局</el-radio-button>
                <el-radio-button label="horizontal">横向布局</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="头部">
              <el-radio-group v-model="theme.header">
                <el-radio-button label="fixed">固定头部</el-radio-button>
                <el-radio-button label="noFixed">不固定头部</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="多标签">
              <el-radio-group v-model="theme.tabsBar">
                <el-radio-button label="true">开启</el-radio-button>
                <el-radio-button label="false">不开启</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSaveTheme">
                保存
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-scrollbar>
    </el-drawer>
  </span>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { layout as defaultLayout, localKey } from '@/config'
  export default {
    name: 'ThemeBar',
    data() {
      return {
        drawerVisible: false,
        theme: {
          name: 'default',
          layout: '',
          header: 'fixed',
          tabsBar: '',
        },
      }
    },
    computed: {
      ...mapGetters({
        layout: 'settings/layout',
        header: 'settings/header',
        tabsBar: 'settings/tabsBar',
        themeBar: 'settings/themeBar',
      }),
    },
    created() {
      this.$baseEventBus.$on('theme', () => {
        this.handleOpenThemeBar()
      })
      const theme = localStorage.getItem(localKey.theme)
      if (null !== theme) {
        this.theme = JSON.parse(theme)
        this.handleSetTheme()
      } else {
        this.theme.layout = this.layout
        this.theme.header = this.header
        this.theme.tabsBar = this.tabsBar
      }
    },
    methods: {
      ...mapActions({
        changeLayout: 'settings/changeLayout',
        changeHeader: 'settings/changeHeader',
        changeTabsBar: 'settings/changeTabsBar',
      }),
      handleIsMobile() {
        return document.body.getBoundingClientRect().width - 1 < 992
      },
      handleOpenThemeBar() {
        this.drawerVisible = true
      },
      handleSetTheme() {
        let { name, layout, header, tabsBar } = this.theme
        localStorage.setItem(
          localKey.theme,
          JSON.stringify({
            name: name,
            layout: layout,
            header: header,
            tabsBar: tabsBar,
          })
        )
        if (!this.handleIsMobile()) this.changeLayout(layout)
        this.changeHeader(header)
        this.changeTabsBar(tabsBar)
        document.getElementsByTagName(
          'body'
        )[0].className = `system-theme-${name}`
        this.drawerVisible = false
      },
      handleSaveTheme() {
        this.handleSetTheme()
      },
      handleSetDfaultTheme() {
        let { name } = this.theme
        document
          .getElementsByTagName('body')[0]
          .classList.remove(`system-theme-${name}`)
        localStorage.removeItem(localKey.theme)
        this.$refs['form'].resetFields()
        Object.assign(this.$data, this.$options.data())
        this.changeHeader(defaultLayout)
        this.theme.name = 'default'
        this.theme.layout = this.layout
        this.theme.header = this.header
        this.theme.tabsBar = this.tabsBar
        this.drawerVisible = false
        location.reload()
      },
    },
  }
</script>

<style lang="scss" scoped>
  @mixin right-bar {
    position: fixed;
    right: 0;
    z-index: $base-z-index;
    width: 60px;
    min-height: 60px;
    text-align: center;
    cursor: pointer;
    background: $base-color-blue;
    border-radius: $base-border-radius;

    > div {
      padding-top: 10px;
      border-bottom: 0 !important;

      &:hover {
        opacity: 0.9;
      }

      & + div {
        border-top: 1px solid $base-color-white;
      }

      p {
        padding: 0;
        margin: 0;
        font-size: $base-font-size-small;
        line-height: 30px;
        color: $base-color-white;
      }
    }
  }

  .theme-bar-setting {
    @include right-bar;

    top: calc((var(--curHeight) - 110px) / 2);
  }

  .el-drawer__body {
    padding: 20px;
  }
</style>
<style lang="scss">
  .el-drawer__wrapper {
    outline: none !important;

    * {
      outline: none !important;
    }
  }
</style>
