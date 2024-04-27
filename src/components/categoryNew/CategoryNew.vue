<!-- 新品 -->
<template>
  <CategoryPanel class="newPro" title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <div class="col-li">
      <ul>
        <li v-for="item in newList" :key="item.id" id="1">
          <router-link :to="`/detail/${item.id}`">
            <ProItem :title="item.name" :now-price="item.price" :picture="item.picture"/>
          </router-link>
        </li>
      </ul>
    </div>
  </CategoryPanel>
</template>

<script setup>
import CategoryPanel from '@/components/categoryPanel/CategoryPanel.vue'
import ProItem from '../../components/proItem/ProItem.vue'
import {getNewApi} from "@/apis/categoryBanner.js";

const newList = ref([])
const getNewList = async () => {
  const res = await getNewApi()
  newList.value = res.result
  console.log('getNewList',newList)
}
onMounted(() => {
  getNewList()
})
</script>

<style scoped lang="scss">
.newPro {
  margin-top: 90px;
}
.col-li ul{
  display: flex;
  justify-content: space-between;
}
</style>