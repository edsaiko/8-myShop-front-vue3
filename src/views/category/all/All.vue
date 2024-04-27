<!-- 分类的2级路由页面 -->
<template>
  <div >
<!--  面包屑-->
    <el-breadcrumb separator="/" class="content breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">所有分类</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">{{ categoryData.name }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container">

<!--      左侧分类先不写-->
<!--      <CategoryCate/>-->

      <CategoryBanner/>
    </div>
    <CategoryNew class="content"/>
    <CategoryHot class="content"/>

    <CategoryProduct class="content"/>
  </div>
</template>

<script setup>
import CategoryCate from '@/components/categoryCate/CategoryCate.vue'
import CategoryBanner from '@/components/categoryBanner/CategoryBanner.vue'
import CategoryPanel from '@/components/categoryPanel/CategoryPanel.vue'
import CategoryHot from '@/components/categoryHot/CategoryHot.vue'
import CategoryNew from '@/components/categoryNew/CategoryNew.vue'
import CategoryProduct from '@/components/categoryProduct/categoryProduct.vue'
import {useCategory} from "@/views/category/composables/useCategory.js";

const {categoryData} =useCategory()

</script>

<style scoped lang="scss">
.breadcrumb {
  height: 68px;
  display: flex;
  align-items: center;
}

.breadcrumb span {
  font-size: 14px;
  font-weight: 500;
}
</style>