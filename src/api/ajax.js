//导入axios模块
import axios from 'axios'
//返回Promise (异步返回的数据是：result.data)
export default function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject) => {
        let promise 
        //判断请求方式 
        if (type === 'GET') {
            //封装 url 和 data参数
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            //判断dataStr是不是为空
            if (dataStr != '') {
                url = url + dataStr.substring(0,dataStr.lastIndexOf('&'));
            }
            promise = axios.get(url);
        } else { 
            promise = axios.post(url,data);
        }   
        promise.then(result => {
           // 调用resolve 将结果返回出去
           resolve(result.data);
        }).catch(err => {
           reject(err)
        })
    })
    
}