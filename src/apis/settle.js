import http from '@/utils/http.js'


/**
 * @description: 获取详情接口
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getCheckInfoApi = () => {
    return http.get('/member/order/pre')
}

/**
 * @description: 创建订单
 * @param data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const createOrderApi = (data) => {
    return http.post('/member/order', data)
}