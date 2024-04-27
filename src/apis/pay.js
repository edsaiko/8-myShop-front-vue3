import http from '@/utils/http.js'

export const getOrderApi = (id) => {
    return http.get(`/member/order/${id}`)
}