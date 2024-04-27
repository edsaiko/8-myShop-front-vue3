<!-- 轮播图 -->
<template>
  <div class="banner-back">
    <div class="banner-container">
      <el-carousel height="480px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">

<!--          <img src="../../assets/images/home/BannerPic.png" alt="">-->

          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import {getBannerApi} from '@/apis/categoryBanner.js'

const bannerList=ref([])
const getBanner=async ()=>{
  const res=await getBannerApi()
  bannerList.value=res.result
}
onMounted(()=>{
  getBanner()
})

</script>

<style scoped lang="scss">
.banner-back{
  height: 480px;
  width: 100%;
  background-color: #F2F2F2;
}
.banner-container img{
  display: block;
  width: var(--width-middle);
  height: 100%;
  margin: 0 auto;

}
</style>