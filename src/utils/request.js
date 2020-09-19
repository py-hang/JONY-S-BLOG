import axios from'axios';

//取消请求
// let CancelToken = axios.CancelToken
axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    timeout:5000,//请求超时时间
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    }
})

axios.interceptors.request.use(config=>{
    //得到参数中的requestName字段，用于决定下次发起请求，取消相应的  相同字段的请求
    //post和get请求方式的不同，使用三木运算处理
    // let requestName = config.method === 'post' ? config.data.requestName : config.params.requestName
    // //判断，如果这里拿到上一次的requestName，就取消上一次的请求
    // if(!requestName) {
    //     if(axios[requestName]&&axios[requestName].cancel){
    //         axios[requestName].cancel()
    //     }
    //     config.cancelToken = new CancelToken(cancelToken => {
    //         axios[requestName] = {}
    //         axios[requestName].cancel = cancelToken
    //     })
    // }
    return config
},error => {
    return Promise.reject(error)
})

//response拦截器
axios.interceptors.response.use(response=>{
    const res = response.data;
    if(res.msg === "success"){
        return response.data
    }
    return response.data;
},error => {
    return Promise.reject(error)
})

export default axios;
