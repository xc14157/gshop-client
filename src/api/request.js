//导入axios
import axios from 'axios'

//导出一个函数
export function request(config){
    const instace = axios.create({
        baseURL: 'http://localhost:4000',
        timeout: 3000
    })
    //请求前拦截
    instace.interceptors.request.use(config => {
        return config;
    },err => {

    })
    //请求后拦截
    instace.interceptors.response.use(data => {
        return config;
    },err => {

    })
    //发送请求 返回值是promise
    return instace(config);

}