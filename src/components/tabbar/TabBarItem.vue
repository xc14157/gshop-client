<template>
  <div class="guide_item" @click="goTo" :class="{on:path === this.$route.path}">
    <span class="item_icon">
        <slot name="item-icon"></slot>
    </span>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
//导入Tabbar组件
export default {
    name: 'TabBarItem',
    props: {
        path: String
    },
    methods: {
        goTo(){
            this.$router.replace(this.path);
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
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