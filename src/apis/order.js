import http from "@/utils/http.js"

/**
 * @description: 获取用户相关的订单数据
 * @param: {
 *     orderState:0,
 *     page:1,
 *     pageSize:2
 * }
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getUserOrderApi = (params) => {
    return http.get('/member/order', {params})
}