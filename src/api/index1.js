//导入request模块
import request from './request'

// 1、根据经纬度获取位置详情
export function reqAddress(geohash){
    return request({
        method: 'GET',
        url: '/position',
        params: {
            geohash
        }
    })
}
// 2、获取食品分类列表
export function reqFoodCategorys(){
    return request({
        method: 'GET',
        url: '/index_category'
    })
}
// 3、根据经纬度获取商铺列表
export function reqShops(latitude,longitude){
    return request({
        method: 'GET',
        url: '/shops',
        params: {
            latitude,
            longitude
        }
    })
}
// 4、根据经纬度和关键字搜索商铺列表
export function reqSearchShop(geohash,keyword){
    return request({
        method: 'GET',
        url: '/search_shops',
        parmas: {
            geohash,
            keyword
        }
    })
}
//5、获取一次性验证码
export function reqCaptcha(){
    return request({
        method: 'GET',
        url: '/captcha',
    })
}
// 6、用户名密码登陆
export function reqPwdLogin(name,pwd,captcha){
    return request({
        method: 'POST',
        url: '/login_pwd',
        params: {
            name,
            pwd,
            captcha
        }
    })
}
// 7、发送短信验证码
export function reqSendCode(phone){
    return request({
        method: 'GET',
        url: '/sendcode',
        params: {
            phone
        }
    })
}
// 8、手机号验证码登陆
export function reqSmsLogin(phone,code){
    return request({
        method:'POST',
        url: '/login_sms',
        params: {
            phone,
            code
        }
    })
}
// 9、根据会话获取用户信息
export function reqUserInfo(){
    return request({
        method: 'GET',
        url: '/userinfo'
    })
}
// 10、用户登出
export function reqLogout(){
    return request({
        method: 'GET',
        url: '/logout'
    })
}