// import {ref,onMounted} from 'vue'
// import { defineStore } from 'pinia'
import {getCategoryApi} from "@/apis/head.js";

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([]);
  const getCategory = async () => {
    const res = await getCategoryApi();
    console.log('store',res)
    categoryList.value = res.result;
    console.log('categoryList',categoryList.value)
  }
  onMounted(() => getCategory())

  return { categoryList, getCategory }
})
