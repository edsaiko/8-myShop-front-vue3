import http from "@/utils/http.js"

export function getCategoryApi(){
    return http.get('/home/category/head')
}