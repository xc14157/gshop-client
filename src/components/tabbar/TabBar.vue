<template>
  <div class="footer_guide">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
</style>