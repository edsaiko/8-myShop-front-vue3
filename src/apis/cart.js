import http from "@/utils/http"

/**
 * @description: 获取购物车最新数据
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function findNewCartListApi(){
    return http.get('/member/cart')
}

/**
 * @description: 根据sku对象进行新增购物车
 * @param sku -用户对象
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function insertCartApi(sku){
    return http.post('/member/cart',sku)
}

/**
 * @description: 根据id删除购物车
 * @param ids
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const delCartApi=(ids)=>{
    return http.delete('/member/cart',{data:{ids}})
}

/**
 * @description: 合并购物车
 * @param data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function mergeCartApi(data){
    return http.post('/member/cart/merge',data)
}

/**
 * @description: 修改单条购物车信息
 * @param skuId
 * @param data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function updateCartItem(skuId,data){
    return http.put(`/member/cart/${skuId}`,data)
}