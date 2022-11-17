import axios from "axios";
//创建axios实例
const service = axios.create({
    baseURL: "http://localhost:9000",
    // baseURL:"https://api.apiopen.top/api",
    // baseURL:"https://www.fastmock.site/mock/88589a30789822d059bca54bf21044d8/api",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

//请求拦截
service.interceptors.request.use((config) => {
    config.headers = config.headers || {}
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token') || ""
    }
    return config
})
// 响应拦截
service.interceptors.response.use((res) => {
    const code = res.data.code
    if (code != 200) {
        return Promise.reject(res.data)
    }
    return res.data
}, (err) => {
    console.log(err)
})

export default service
