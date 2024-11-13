<template>
  <div id="app">
    <!-- 声明式导航 -->
    <TabBar ref="mytabbar" v-show="$store.state.isTabbarShow"></TabBar>
    <!-- 路由容器 -->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import Vue from 'vue'

import { Dialog } from 'vant'
import 'vant/lib/index.css'
import TabBar from '@/components/TabBar'

Vue.use(Dialog)
export default {
  components: {
    TabBar
  }
}
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
section {
  width: 100%;
  margin-bottom: 40px;
}
</style>
