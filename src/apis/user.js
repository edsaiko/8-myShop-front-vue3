import http from "@/utils/http"

/**
 * @description 根据user对象进行登录
 * @param {Number} user -用户登录信息
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function loginApi(user){
    return http.post('/login',user)
}

/**
 * @description 获取用户可能喜欢的商品列表
 * @param limit - 喜欢的商品个数
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getLikeListApi=({limit=4})=>{
    return http.get('/goods/relevant',{params:{limit}})
}