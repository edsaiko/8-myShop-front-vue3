import axios from 'axios'
import {ElMessage} from "element-plus";
import "element-plus/theme-chalk/el-message.css"
import {useUserStore} from "@/stores/userStore.js";

import {useRouter} from "vue-router"

const router = useRouter()
console.log('http.js:router',useRouter())

const http = axios.create({
    // baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    baseURL: 'http://127.0.0.1:3018',
    timeout: 5000
});

//axios请求拦截器
//一般进行token身份验证
http.interceptors.request.use(config => {
    //后续有token令牌的使用，结合框架，建议看看node相关的session机制
    const userStore = useUserStore();
    const token = userStore.userInfo.token;
    if (token) {
        console.log('http.js:token', token)
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, error => Promise.reject(error))

http.interceptors.response.use(res => res.data, e => {
    //统一错误提示
    ElMessage({type: 'error', message: e.response.data.message})

    // token失效处理
    const userStore = useUserStore()
    if (e.response.status === 401) {
        userStore.clearUserInfo()
        console.log(router)
        // router.push('/login')
        window.location.reload();
        ElMessage({type: 'error', message: '请重新登录'})
    }
    return Promise.reject(e)
})

export default http