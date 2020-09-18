<template>
  <div>
    <div class="footer_guide">
    <span href="javascript:;" class="guide_item" :class="{on:'/msite' === routePath}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont iconu"></i>
      </span>
      <span>外卖</span>
    </span>
    <span href="javascript:;" class="guide_item" :class="{on:'/search' === routePath}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont iconxingtaiduICON_sousuo---copy"></i>
      </span>
      <span>搜索</span>
    </span>
    <span href="javascript:;" class="guide_item" :class="{on:'/order' === routePath}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icondingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span href="javascript:;" class="guide_item" :class="{on:'/profie' === routePath}" @click="goTo('/profie')">
      <span class="item_icon">
        <i class="iconfont icongeren1"></i>
      </span>
      <span>我的</span>
    </span>
  </div>
  </div>
</template>

<script>
export default {
    name: 'FooterGuide',
    data(){
      return {
        path: null
      }
    },
    computed: {
      routePath(){
        return this.path = this.$route.path;
      }
    },
    methods: {
      goTo(path){
        this.$router.replace(path);
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/style/mixins.styl'
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>