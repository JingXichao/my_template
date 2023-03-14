<template>
  <div v-if="routerView" class="app-main-container">
    <transition mode="out-in" name="fade-transform">
      <keep-alive :include="cachedRoutes" :max="keepAliveMaxNum">
        <router-view
          :key="key"
          class="app-main-height"
          :class="
            tabsBar === 'false' || tabsBar === false ? '' : 'tabs_bar_show'
          "
        />
      </keep-alive>
    </transition>
    <footer v-show="footerCopyright" class="footer-copyright">
      Copyright
      <i class="el-icon-eleme" />
      授权信息 {{ fullYear }}
    </footer>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { footerCopyright, keepAliveMaxNum, title } from '@/config'

  export default {
    name: 'AppMain',
    data() {
      return {
        show: false,
        fullYear: new Date().getFullYear(),
        title,
        keepAliveMaxNum,
        routerView: true,
        footerCopyright,
      }
    },
    computed: {
      ...mapGetters({
        visitedRoutes: 'tabsBar/visitedRoutes',
        device: 'settings/device',
        tabsBar: 'settings/tabsBar',
      }),
      cachedRoutes() {
        const cachedRoutesArr = []
        this.visitedRoutes.forEach((item) => {
          if (!item.meta.noKeepAlive) {
            cachedRoutesArr.push(item.name)
          }
        })
        return cachedRoutesArr
      },
      key() {
        return this.$route.path
      },
    },
    watch: {
      $route: {
        handler(route) {
          if ('mobile' === this.device) this.foldSideBar()
        },
        immediate: true,
      },
    },
    created() {
      //重载所有路由
      this.$baseEventBus.$on('reload-router-view', () => {
        this.routerView = false
        this.$nextTick(() => {
          this.routerView = true
        })
      })
    },
    mounted() {},
    methods: {
      ...mapActions({
        foldSideBar: 'settings/foldSideBar',
      }),
    },
  }
</script>

<style lang="scss" scoped>
  .app-main-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    .app-main-height {
      // min-height: $base-app-main-height;
      height: $base-app-main-height;
      overflow: hidden;
      overflow-y: scroll;
      &.tabs_bar_show {
        // min-height: calc(#{$base-app-main-height} - 55px);
        height: calc(#{$base-app-main-height} - 55px);
      }
    }

    .footer-copyright {
      min-height: 55px;
      line-height: 55px;
      color: rgba(0, 0, 0, 0.45);
      text-align: center;
      border-top: 1px dashed $base-border-color;
    }
  }
</style>
