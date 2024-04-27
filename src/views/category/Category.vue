<!-- 分类的1级路由页面 -->
<template>
  <CategoryHead/>
  <CateLineHead/>
  <router-view/>
  <div style="height:1500px;"></div>
</template>

<script setup>
import CategoryHead from '@/components/categoryHead/CategoryHead.vue'
import CateLineHead from '@/components/cateLineHead/CateLineHead.vue'

//
// export default {
//   components: {categoryHead}
// }

</script>

<style scoped lang="scss">

</style>