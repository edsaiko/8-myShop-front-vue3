//有关详情页的api请求
import http from "@/utils/http.js"

/**
 * @description: 获取商品详情
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getDetailApi(id){
    return http.get('/goods',{params:{id}})
}

/**
 * @description: 获取热榜商品
 * @param {number} id - 商品id
 * @param {number} type - 1 24小时热榜 2 周热销榜
 * @param {number} limit - 获取个数
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getHotGoodsApi=({id,type,limit=6})=>{
    return http.get('/goods/hot',{
        params:{
            id,type,limit
        }
    })
}