<!-- 新品 -->
<template>
  <CategoryPanel class="newPro" title="分类推荐" sub-title="新鲜出炉 品质靠谱">
    <div class="col-li">
      <ul>
        <li v-for="item in categoryData.children" :key="item.id">
          <router-link :to="`/category/sub/${item.id}`">
            <div class="pro-item" style="width: 200px">
              <!--    <img src="../../assets/images/cart/cup2.png" alt="">-->
              <img v-img-lazy="item.picture" alt="">
              <!--    <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>-->
              <div class="pro-title">
                <p>{{ item.name }}</p>
<!--                <p>{{ item.alt }}</p>-->
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </CategoryPanel>
</template>

<script setup>
import CategoryPanel from '@/components/categoryPanel/CategoryPanel.vue'
import {useCategory} from "@/views/category/composables/useCategory.js";
// import {getHotApi} from "@/apis/categoryBanner.js";
//
// const hotList = ref([])
// const getHostList = async () => {
//   const res = await getHotApi()
//   hotList.value = res.result
// }
// onMounted(() => {
//   getHostList()
// })

const {categoryData} =useCategory()

</script>

<style scoped lang="scss">
.newPro {
  margin-top: 90px;
}
.col-li ul{
  display: flex;
  justify-content: space-between;
}
.pro-item{
  height: 329px;
  width: 243.2px;
  cursor: pointer;
  /* background-color: antiquewhite; */
  /* border-radius: 4px; */
}
.pro-item:hover img{
  box-shadow: var(--color-shadow);
}
ul{
  display: flex;
  justify-content: space-between;
}
.pro-item img{
  width: 100%;
  height: 240px;
  border-radius: 8px;
}

.pro-item h3{
  height: 40px;
  margin: 12px 0 12px 0;
  letter-spacing: 2.5px;
  line-height: 20px;
}
.pro-title{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.pro-title p{
  font-size: 14px;
  margin: 10px auto;
  font-weight: 600;
}
</style>