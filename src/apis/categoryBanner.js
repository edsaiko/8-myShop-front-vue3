//有关搜索页的api请求
import http from "@/utils/http.js"
import myHttp from "@/utils/http.js"

/**
 * @description: 获取轮播图
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getBannerApi(distribution='1'){
    return http.get('/home/banner',{params:{distribution}})
}

/**
 * @description: 获取商品栏数据
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getNewApi(){
    return http.get('/home/new')
}

/**
 * @description: 获取人气推荐数据
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getHotApi(){
    return http.get('/home/hot')
}

/**
 * @description: 获取分类页面数据
 * @param 109206007
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getTopCategoryApi(id){
    return http.get('/category',{params:{id}})
}

/**
 * @description: 获取二级分类页面数据
 * @param id
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getCategoryFilterApi(id){
    return http.get('/category/sub/filter',{params:{id}})
}

/**
 * @description: 获取二级分类商品列表
 * @data{
 *     categoryId:1005000,
 *     page:1,
 *     pageSize:20,
 *     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 * }
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getSubCategoryApi=(data)=>{
    return http.post('/category/goods/temporary',data)
}