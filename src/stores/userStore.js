import {loginApi} from "@/apis/user.js";
import {useCartStore} from "@/stores/cartStore.js";
import {mergeCartApi} from "@/apis/cart.js";

export const useUserStore = defineStore('user',
    () => {
        const userInfo = ref({})
        const cartStore = useCartStore()

        const getUserInfo = async (user) => {
            const res = await loginApi(user)
            userInfo.value = res.result
            //合并购物车
            await mergeCartApi(cartStore.cartList.map(item => {
                return {
                    skuId: item.skuId,
                    selected: item.selected,
                    count: item.count
                }
            }))
            await cartStore.updateLoginCartList()
        }
        const clearUserInfo = () => {
            userInfo.value = {}
        }
        return {
            userInfo,
            getUserInfo,
            clearUserInfo
        }
    }, {
        persist: true//用了插件后，开启持久化配置
    }
)