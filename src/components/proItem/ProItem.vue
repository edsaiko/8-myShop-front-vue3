<template>
  <div class="pro-item">
<!--    <img src="../../assets/images/cart/cup2.png" alt="">-->
    <img :src="picture" alt="">
<!--    <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>-->
    <h3>{{ title }}</h3>
    <div class="item-price">
      <span class="now-price">￥{{ nowPrice }}</span>
      <span class="old-price">￥{{ oldPrice }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title:{
    type:String,
    default:''
  },
  nowPrice:{
    type:Number,
    default:''
  },
  oldPrice:{
    type:Number,
    default:'free'
  },
  picture:{
    type:String,
    default:'free'
  },
})
// 对象默认值
// title:{
//   type:Object,
//   default:()=>{}
// },
</script>
<style scoped>
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
.pro-item .item-price .now-price{
  margin-right: 8px;
}
</style>
