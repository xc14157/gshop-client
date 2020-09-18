<template>
  <tab-bar>
    <tab-bar-item path="/msite">        
        <i slot="item-icon" class="iconfont iconu"></i>
        <span slot="item-text">外卖</span>
    </tab-bar-item>

    <tab-bar-item path="/search">        
         <i slot="item-icon" class="iconfont iconxingtaiduICON_sousuo---copy"></i>
          <span slot="item-text">搜索</span>
    </tab-bar-item>

    <tab-bar-item path="/order">        
        <i slot="item-icon" class="iconfont icondingdan"></i>
         <span slot="item-text">订单</span>
    </tab-bar-item> 

    <tab-bar-item path="/profie">        
        <i slot="item-icon" class="iconfont icongeren1"></i>
         <span slot="item-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
//导入Tabbar
import TabBar from '../tabbar/TabBar'
import TabBarItem from '../tabbar/TabBarItem'
export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>