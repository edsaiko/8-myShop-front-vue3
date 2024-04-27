<!-- 商品展示组合栏 -->
<template>
  <div class="col">
<!--    标题-->
    <div class="col-title">
      <div>
        <h2>{{ title }}</h2>
        <small>{{subTitle}}</small>
      </div>
      <div class="more">
        <a href="#">更多</a>
        <i class="iconfont">&#xe620;</i>
      </div>
    </div>
<!--    内容-->
    <slot/>

<!--    <div class="col-li">-->
<!--      <ul>-->
<!--        <li>-->
<!--          <ProItem/>-->
<!--        </li>-->
<!--        <li>-->
<!--          <ProItem/>-->
<!--        </li>-->
<!--        <li>-->
<!--          <ProItem/>-->
<!--        </li>-->
<!--        <li>-->
<!--          <ProItem/>-->
<!--        </li>-->
<!--        <li>-->
<!--          <ProItem/>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import ProItem from '../../components/proItem/ProItem.vue'

defineProps({
  title:{
    type:String,
    default:''
  },
  subTitle:{
    type:String,
    default:''
  }
})

</script>

<style scoped lang="scss">
/* ********* 新品发售 ******* */
.col{
  margin-bottom: 100px;
}

.col .col-title{
  display: flex;
  justify-content: space-between;
  margin: 24px 0 24px 0;
}
.col .col-title h2{
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1.2px;
  display: inline;
  margin-right: 10px;
}
.col .col-title small{
  color: var(--color-old-gray);
}

.col .col-title .more>a,i{
  font-size: 16px;
  font-weight: 500;
}
.col .col-title .more a{
  margin-left: 40px;
}

.col-li ul{
  display: flex;
  justify-content: space-between;
}
</style>