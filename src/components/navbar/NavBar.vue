<template>
  <div class="header">
    <div class="header_search">
      <slot name="left"></slot>
    </div>
    <div class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </div>
    <div class="header_login">
      <span class="header_login_text">
        <slot name="right"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: String,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/mixins.styl'
.header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;

  .header_search {
    position: absolute;
    left: 15px;
    top: 40%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;

    .iconsousuo2 {
      display block
      margin-bottom 10px
      font-size: 22px;
      color: #fff;
    }
  }

  .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;

    .header_title_text {
      font-size: 20px;
      color: #fff;
      display: block;
    }
  }

  .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);

    .header_login_text {
      color: #fff;
    }
  }
}
</style>