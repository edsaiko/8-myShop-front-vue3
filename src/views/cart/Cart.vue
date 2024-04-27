<!-- 购物车页 -->
<template>
  <div class="content cart">
    <h2>购物车</h2>
    <el-table
        ref="multipleTableRef"
        :data="cartStore.cartList"
        style="width: 100%"
        @selection-change="handleSelectionChange">
      <el-table-column type="selection" property="selected"/>
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
      <el-table-column property="num" label="数量">
        <template #default="{row,$index}">
          <el-input-number v-model="row.count" :min="1" @change="handleChange(row)"/>
        </template>
      </el-table-column>
      <el-table-column property="totalPrice" label="总价" width="120">
        <template #default="{row,$index}">
          ￥{{ row.count * row.price }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >收藏
          </el-button>
          <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="cart-bottom">
      <span>已选商品{{ cartStore.selectedCount }}件</span>
      <span>合计 ￥{{ cartStore.selectedPrice }}.00</span>
      <el-button @click="settle()">结算</el-button>
    </div>
  </div>
</template>

<script setup>
import {useCartStore} from "@/stores/cartStore.js";
import {ref} from 'vue'
import {ElTable} from 'element-plus'
import {useRouter} from "vue-router";

const router = useRouter()

const cartStore = useCartStore()

const handleChange = (row) => {
  cartStore.updateCart(row)
}

//初始化选中列表
const multipleTableRef = ref()
const initCheck = () => {
  const checkList = cartStore.cartList.filter((item) => {
    return item.selected === true
  })
  checkList.forEach((item) => {
    multipleTableRef.value.toggleRowSelection(item, undefined)
  })
  console.log('cart.vue:test', multipleTableRef.value.toggleRowSelection)
}

onMounted(() => {
  initCheck()
})
//TODO 这里有点问题，选中没有更新到购物车
//数据双绑，点击选中，更新购物车数据
const handleSelectionChange = (val) => {
  const tempCheckList = [...val]
  console.log('cart.vue:val', tempCheckList, val)
  cartStore.cartList.map((cartItem) => {
    let flag = false//是否选中
    tempCheckList.forEach((tempItem, index) => {
      console.log('cart.vue:id', cartItem.id, tempItem.id)
      if (cartItem.id === tempItem.id) {
        flag = true
        tempCheckList.splice(index, 1)
        return
      }
    })
    cartItem.selected = flag
  })
}

const tableData = [
  {
    id: 1,
    image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    name: '鸟一只',
    price: 998,
    category: '颜色分类：棕色',
    num: 9,
    isChoose: false,
    totalPrice: '998'
  },
  {
    id: 2,
    image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    name: '鸟一只',
    price: 998,
    category: '颜色分类：棕色',
    num: 1,
    isChoose: false,
    totalPrice: '998'
  },
  {
    id: 3,
    image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    name: '鸟一只',
    price: 998,
    category: '颜色分类：棕色',
    num: 1,
    isChoose: false,
    totalPrice: '998'
  },
]
// let allProPrice = computed(() => {
//   console.log('get')
//   return tableData.reduce((prev, cur) => {
//     return prev += cur.price * cur.num
//   }, 0)
// })

//TODO 结算
const settle = () => {
  console.log('???')
  router.push('/checkout')
}

const handleDelete = (a, b) => {
  console.log('cart:delete', a, b)
  cartStore.delCart(b.skuId)
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