import {defineStore} from "pinia"
import {useUserStore} from "@/stores/userStore.js";
import {findNewCartListApi, insertCartApi, delCartApi, updateCartItem} from "@/apis/cart.js";


export const useCartStore = defineStore(
    'cart',
    () => {
        const cartList = ref([])
        const userStore = useUserStore()
        const isLogin = computed(() => userStore.userInfo.token)

        //获取登录后最新购物车
        const updateLoginCartList = async () => {
            const res = await findNewCartListApi()
            cartList.value = res.result
        }

        //增加购物车数据
        const addCart = async (goods) => {
            if (isLogin.value) {
                await insertCartApi(goods)
                await updateLoginCartList()
            } else {
                //        判断商品是否在购物车
                const findItem = cartList.value.find(item => goods.skuId === item.skuId)
                if (findItem) {
                    findItem.count += goods.count
                } else {
                    cartList.value.push(goods)
                }
                console.log('cartStore.js', cartList.value)
            }
        }
        //删除购物车数据
        const delCart = async (skuId) => {
            if (isLogin.value) {
                await delCartApi([skuId])
                await updateLoginCartList()
            } else {
                const index = cartList.value.findIndex(item => skuId === item.skuId)
                cartList.value.splice(index, 1)
            }
        }

        //清除购物车
        const clearCart = () => {
            cartList.value = []
        }

        const checkAll = (selected) => {
            cartList.value.forEach(item => item.selected = selected)
        }

        //修改购物车信息
        const updateCart = async (goods) => {
            const {skuId, count, selected} = goods
            if (isLogin.value) {
                await updateCartItem(skuId, {count, selected})
                // console.log('cartStore.js:goods',skuId,count,selected)
            }
        }

        //购物车总数量
        const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
        //购物车总价格
        const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
        //购物车选中总数量
        const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
        const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

        return {
            //属性
            cartList,
            allCount,
            allPrice,
            checkAll,
            selectedCount,
            selectedPrice,
            //方法
            delCart,
            addCart,
            updateLoginCartList,
            clearCart,
            updateCart
        }
    },
    {
        persist: true
    }
)