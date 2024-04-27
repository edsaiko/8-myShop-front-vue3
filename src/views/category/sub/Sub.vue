<!-- 分类的2级路由页面 -->
<template>
  <div class="content">
    <!--  面包屑-->
    <el-breadcrumb separator="/" class="content breadcrumb">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: `/category/all/${filterData.parentId}` }">{{
          filterData.parentName
        }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!--    二级分类标签栏-->
    <!--    name和v-model是双向绑定的，当tab改变时，reqData.sortField值会变化-->
    <el-tabs v-model="reqData.sortField" class="demo-tabs" @tab-change="tabChange">
      <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
      <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
      <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
    </el-tabs>
    <!--    商品列表-->
    <div class="pro-list">
      <div class="col-li">
        <ul v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
          <li v-for="item in goodList" :key="item.id">
            <ProItem :title="item.name" :now-price="item.price" :picture="item.picture"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {getCategoryFilterApi, getSubCategoryApi} from "@/apis/categoryBanner.js";

//获取面包屑数据
const filterData = ref({})
const route = useRoute()
const getFilterData = async (id) => {
  const res = await getCategoryFilterApi(id)
  filterData.value = res.result
}
onMounted(() => {
  getFilterData(route.params.id)
})

//获取二级分类商品数据
const goodList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})

const getGoodList = async () => {
  const res = await getSubCategoryApi(reqData.value)
  goodList.value = res.result.items
}
onMounted(() => getGoodList())

//二级分类栏逻辑
const activeName = ref(false)//false 无限加载; true 停止无限加载

const tabChange = () => {
  console.log(reqData.value.sortField)
  reqData.value.page = 2;
  getGoodList()
}

//无限加载逻辑
const disabled = ref(false)
const load = async () => {
  reqData.value.page++;
  console.log(reqData.value.page)
  const res = await getSubCategoryApi(reqData.value)
  goodList.value = [...goodList.value, ...res.result.items]

  if (res.result.items.length === 0) {
    disabled.value = true
  }
}
</script>

<style scoped lang="scss">
//*******面包屑
.breadcrumb {
  height: 68px;
  display: flex;
  align-items: center;
}

.breadcrumb span {
  font-size: 14px;
  font-weight: 500;
}

//*******商品列表
.pro-list .col-li ul {
  display: grid;
  grid-template-columns: repeat(5, 243px);
  gap: 16px;
  text-align: left;
}

//*******二级分类栏
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: var(--color-balck);
  font-size: 32px;
  font-weight: 600;
}
</style>