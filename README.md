# gshop-client1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration

### 报错 1.路由访问不到  原因：没有通过 export default 导出
### 报错 2.找不到mixins.styl文件 原因：使用@import 不是 @import url()
### 报错 3.Swiper安装版本太高没有轮播条 解决方法，卸载重装4.x版本的
### 报错 4.找不到mixins.styl文件 && css中找不到文件  原因：stylus中不支持文件夹别名方式 需要使用./的形式去找
### 遇到的问题
###   ：登录界面显示了底部导航栏 解决办法 在路由中配置一个标识属性 true or false 然后给底部导航加一个v-show调用路由元数据
### 目前存在的bug 轮播图第一次进入可自动轮播 手动左滑 or 右滑之后不会自动轮播  后期再调整
