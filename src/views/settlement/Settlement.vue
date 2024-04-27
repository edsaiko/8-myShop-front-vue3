<!-- 结算页 -->
<template>
  <div class="content cart">
    <h2>结算</h2>
    <el-table
        :data="selectedList"
        style="width: 100%"
    >
      <el-table-column width="80px" label="图片">
        <template #default="{row,$index}">
          <el-image style="width: 80px; height: 80px"
                    :src="row.picture" fit="cover"/>
        </template>
      </el-table-column>
      <el-table-column property="name" label="名称" width="120"/>
      <el-table-column property="price" label="价格" width="120">
        <template #default="{row,$index}">
          ￥{{ row.price }}
        </template>
      </el-table-column>
      <el-table-column property="attrsText" label="类型" width="300"/>
      <el-table-column property="count" label="数量"/>
      <el-table-column property="totalPrice" label="总价" width="120">
        <template #default="{row,$index}">
          ￥{{ row.count * row.price }}
        </template>
      </el-table-column>
    </el-table>
    <div class="cart-bottom">
      <span>已选商品{{ cartStore.selectedCount }}件</span>
      <span>合计 ￥{{ cartStore.selectedPrice }}.00</span>
      <el-button @click="createOrder">提交订单</el-button>
    </div>
  </div>
</template>

<script setup>
import {useCartStore} from "@/stores/cartStore.js";
import {ref} from 'vue'
import {ElTable} from 'element-plus'
import {createOrderApi} from "@/apis/settle.js";

const cartStore = useCartStore()
const selectedList = ref(JSON.parse(JSON.stringify(cartStore.cartList)))

selectedList.value = selectedList.value.filter((item) => {
  return item.selected
})

//创建订单
const createOrder = async () => {
  const res = await createOrderApi({
    deliveryTimeType: 1,
    payType: 1,
    payChannel: 1,
    buyerMessage: '',
    goods: checkInfo.value.goods.map(item => {
      return {
        skuId: item.skuId,
        count: item.count
      }
    }),
    addressId: curAddress.value.id
  })
  const orderId = res.result.id
  console.log(orderId)
  router.push({
    path:'/pay',
    query:{
      id: orderId
    }
  })
}


</script>

<style scoped>
.cart {
  margin-top: 20px;
  margin-bottom: 20px;
}

.cart h2 {
  color: #000;
  font-size: 18px;
  font-weight: 600;
  height: 72px;
  line-height: 72px;
}

.cart-bottom {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>