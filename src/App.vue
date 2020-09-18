<template>
  <div id="app">
    <router-view></router-view>
     <!-- 下方导航栏 -->
     <!-- <footer-guide></footer-guide> -->
     <main-tab-bar v-show="$route.meta.isShowTabBar"></main-tab-bar>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide'
import MainTabBar from '@/components/mainTabbar/MainTabBar'
export default {
    name: 'App',
    components: {
        FooterGuide,
        MainTabBar
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .app
        width 100%
        height 100%
        background #f5f5f5
</style>
