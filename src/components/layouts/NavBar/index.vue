<template>
  <div class="nav-bar-container">
    <el-row :gutter="15">
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <i
            :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            :title="collapse ? '展开' : '收起'"
            class="fold-unfold"
            @click="handleCollapse"
          ></i>
          <breadcrumb class="hidden-xs-only" />
        </div>
      </el-col>
      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <full-screen-bar class="cursor" @refresh="refreshRoute" />
          <i
            title="重载所有路由"
            class="fs_big mx_2 cursor el-icon-refresh-left"
            @click="refreshRoute"
          />
          <lang title="切换语言" />
          <avatar v-if="loginInterception" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { loginInterception } from '@/config'
  export default {
    name: 'NavBar',
    data() {
      return {
        loginInterception,
        pulse: false,
      }
    },
    computed: {
      ...mapGetters({
        collapse: 'settings/collapse',
        visitedRoutes: 'tabsBar/visitedRoutes',
        device: 'settings/device',
        routes: 'routes/routes',
      }),
    },
    methods: {
      ...mapActions({
        changeCollapse: 'settings/changeCollapse',
      }),
      handleCollapse() {
        this.changeCollapse()
      },
      async refreshRoute() {
        this.$baseEventBus.$emit('reload-router-view')
        this.pulse = true
        setTimeout(() => {
          this.pulse = false
        }, 1000)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .nav-bar-container {
    position: relative;
    height: $base-nav-bar-height;
    padding-right: $base-padding;
    padding-left: $base-padding;
    overflow: hidden;
    user-select: none;
    background: $base-color-white;
    box-shadow: $base-box-shadow;

    .left-panel {
      display: flex;
      align-items: center;
      justify-items: center;
      height: $base-nav-bar-height;

      .fold-unfold {
        color: $base-color-gray;
        cursor: pointer;
      }

      ::v-deep {
        .breadcrumb-container {
          margin-left: 10px;
        }
      }
    }

    .right-panel {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: $base-nav-bar-height;
    }
  }
</style>
