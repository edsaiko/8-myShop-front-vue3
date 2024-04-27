<!-- 合并后放在分类页的吸顶导航栏 -->
<template>
  <div class="nav-category" :class="{show:y<207}">
    <div class="nav-small-category">
      <div class="category-title">
        <i class="iconfont">&#xe600;</i>
        <h3>全部商品分类</h3>
      </div>
      <div class="small-category">
        <div class="small-category1">
          <ul>
            <li>居家生活<i class="iconfont">&#xe620;</i></li>
            <li>居家生活<i class="iconfont">&#xe620;</i></li>
            <li>居家生活<i class="iconfont">&#xe620;</i></li>
            <li>居家生活<i class="iconfont">&#xe620;</i></li>
            <li>居家生活<i class="iconfont">&#xe620;</i></li>
          </ul>
        </div>
        <div class="small-category2">
          <!-- 二级标签 -->
          <ul>
            <li class="small-category3">
              <span>上衣</span>
              <!-- 3级标签 -->
              <ul>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
              </ul>
            </li>
            <li class="small-category3">
              <span>上衣</span>
              <!-- 3级标签 -->
              <ul>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
                <li><a href="#">T恤</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--      中间导航栏-->
    <nav>
      <ul>
        <li v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink to="/">{{ item.name }}</RouterLink>
        </li>
        <!--          <li><a href="#">服饰鞋包</a></li>-->
        <!--          <li><a href="#">美食酒水</a></li>-->
        <!--          <li><a href="#">个护清洁</a></li>-->
        <!--          <li><a href="#">母婴亲子</a></li>-->
        <!--          <li><a href="#">运动旅行</a></li>-->
        <!--          <li><a href="#">全球尖货</a></li>-->
      </ul>
    </nav>
  </div>
</template>

<script setup>
import {useScroll} from "@vueuse/core"
import {useCategoryStore} from "@/stores/categoryStore.js";

const {y} =useScroll(window);
const categoryStore=useCategoryStore();
console.log('categoryStore',categoryStore.categoryList)
</script>

<style scoped>
/* ************* 分类导航栏 ************** */
div.show{
  display: none;
}
.nav-category {
  width: var(--width-middle);
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1200;
}

.nav-category .nav-small-category {
  width: 266px;
}

.nav-category .category-title {
  background-color: var(--color-balck);
  color: #fff;
  height: 100%;
  width: 100%;
  padding: 18px 0 18px 20px;
  box-sizing: border-box;
}

.nav-category .category-title h3 {
  display: inline-block;
  margin-left: 10px;
}

.nav-category nav a {
  padding: 18px 20px 18px 20px;
  font-size: 14px;
  line-height: 14px;
}

.nav-category nav li:first-child {
  padding-left: 36px;
}

/* *** 二级分类 *** */
.nav-small-category {
  position: relative;
}

.nav-small-category .small-category {
  position: absolute;
  display: flex;
  top: 100%;
  left: 0;
  width: 100%;
  box-shadow: var(--color-shadow);
  background-color: #fff;
  display: none;
}

.small-category .small-category1 {
  width: 100%;
}

.small-category1 ul {
  display: flex;
  flex-direction: column;
}

.small-category1 ul li {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px 12px 32px;
}

.small-category1 ul li:hover {
  background-color: var(--color-hover-gray);
}

/* !!!脱离文档流的文档流 */
.small-category .small-category2 {
  position: absolute;
  bottom: 0;
  left: 100%;
  margin-left: 2px;
  background-color: #fff;
  box-shadow: var(--color-shadow);
  border-radius: 8px;
}

.small-category2 .small-category3 {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  margin: 0px 32px 0px 32px;
  padding: 12px 0 12px 0;
  border-bottom: 1px solid var(--color-gray);
}

.small-category2 .small-category3 ul {
  display: flex;
  flex-direction: row;
}

.small-category2 .small-category3 span {
  padding-right: 32px;
  font-weight: 700;
}

.small-category2 .small-category3 a {
  padding: 0px 10px 0px 10px;
  border-left: 1px solid var(--color-gray);
}

.small-category2 .small-category3 li:last-child a {
  padding-right: 0;
}
</style>