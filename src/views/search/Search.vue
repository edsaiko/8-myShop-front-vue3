<script setup>
import CategoryHead from '../../components/categoryHead/CategoryHead.vue'
import ProItem from '../../components/proItem/ProItem.vue'

import Pagination from '../../components/pagination/Pagination.vue'
import LocalNav from '../../components/localNav/LocalNav.vue'

</script>

<template>
  <div class="container">
    <CategoryHead/>
    <div class="content">
      <LocalNav/>
      <div class="attribute">
        <ul >
<!--          <li class="attribute-title">-->
<!--            <div class="attribute-right">-->
<!--              <span>品牌</span>-->
<!--              <ul class="attribute-item">-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--                <li><a href="#">南极人（Nanjiren）</a></li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <div class="more-brand">-->
<!--              <button>所有品牌<i>></i></button>-->
<!--              <button><i>+</i>多选</button>-->
<!--            </div>-->
<!--          </li>-->
          <li class="attribute-title">
            <div class="attribute-right">
              <span>类型</span>
              <ul class="attribute-item">
                <li><a href="#" class="nav-small">羊绒</a></li>
                <li><a href="#" class="nav-small">摇粒绒</a></li>
                <li><a href="#" class="nav-small">皮毛</a></li>
                <li><a href="#" class="nav-small">毛呢</a></li>
                <li><a href="#" class="nav-small">羽绒</a></li>
                <li><a href="#" class="nav-small">羊羔</a></li>
                <li><a href="#" class="nav-small">棉服</a></li>
                <li><a href="#" class="nav-small">毛衣</a></li>
                <li><a href="#" class="nav-small">冲锋衣</a></li>
              </ul>
            </div>
            <div class="more-brand">
              <button><i>+</i>多选</button>
            </div>
          </li>
          <li class="attribute-title">
            <div class="attribute-right">
              <span>款式</span>
              <ul class="attribute-item">
                <li><a href="#" class="nav-small">短款</a></li>
                <li><a href="#" class="nav-small">中款</a></li>
                <li><a href="#" class="nav-small">长款</a></li>
                <li><a href="#" class="nav-small">超长款</a></li>
<!--                <li><a href="#" class="nav-small">≤80%x</a></li>-->
              </ul>
            </div>
            <div class="more-brand">
              <button><i>+</i>多选</button>
            </div>
          </li>
          <li class="attribute-title">
            <div class="attribute-hight">
              <span>高级选项</span>
              <ul class="more-brand">
                <li><button>高度<i>></i></button></li>
                <li><button>生产工艺<i>></i></button></li>
                <li><button>适用人群<i>></i></button></li>
                <li><button>安全类别<i>></i></button></li>
                <li><button>产地<i>></i></button></li>
                <li><button>形状<i>></i></button></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="list-sort">
        <div class="list-sort-left">
          <button class="active">综合<i>↓</i></button>
          <button>销量<i>↓</i></button>
          <button>价格<i>↓</i></button>
          <button>评论<i>↓</i></button>
        </div>
        <div class="list-sort-right">
          <div class="low-price">
            <i>￥</i>
            <span>998</span>
          </div>
          <i>-</i>
          <div class="low-price">
            <i>￥</i>
            <span>997</span>
          </div>
        </div>
      </div>
      <i></i>
      <div class="pro-list">
        <div class="col-li">
          <ul>
            <li>
              <ProItem/>
            </li>
            <li>
              <ProItem/>
            </li>
            <li>
              <ProItem/>
            </li>
            <li>
              <ProItem/>
            </li>
            <li>
              <ProItem/>
            </li>
            <li>
              <ProItem/>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
            <li>
              <div class="pro-item">
                <img src="../../assets/images/cart/cup2.png" alt="">
                <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
                <div class="item-price">
                  <span class="now-price">￥998</span>
                  <span class="old-price">￥199</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <Pagination/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  width: 1920px;
}
.container .content{
  width: var(--width-middle);
  margin: 0 auto;
}

/* *************** 属性选择 ******************* */
.attribute{
  border-bottom: 24px;
}
.attribute .attribute-title{
  border-top: 1px solid var(--color-gray);
  display: flex;
}
.attribute .attribute-title:last-child{
  border-bottom: 1px solid var(--color-gray);
}
/* *** 左侧标题 *** */
.attribute .attribute-title span{
  width: 110px;
  box-sizing: border-box;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  background-color: #F9FBFC;
}
/* *** 列表 *** */
.attribute .attribute-title .attribute-item{
  padding-left: 20px;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto ;
}
.attribute li .attribute-item li{
  box-sizing: border-box;
  margin: 12px 8px 12px 0;
}
.attribute li:nth-child(1) .attribute-item li{
  width: 128px;
}
.attribute li:nth-child(2) .attribute-item li{
  width: 120px;
}
.attribute li:nth-child(3) .attribute-item li{
  width: 100px;
}
.attribute .attribute-title li{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.attribute .attribute-title .nav-small{
  line-height: 14px;
  height: 14px;
}
.attribute .attribute-title .attribute-right{
  flex: 1;
  display: flex;
}
/* *** 右侧按钮 *** */
.attribute .attribute-title .more-brand{
  margin: 8px;
}
.attribute .attribute-title .more-brand button{
  box-sizing: border-box;
  line-height: 14px;
  height: 28px;
  padding: 4px 8px 4px 8px;
  margin-left: 8px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
}

/* *** 高级选项 *** */
.attribute-title .attribute-hight{
  display: flex;
}
.attribute-title .attribute-hight ul{
  display: flex;
}
/* ******************** 排序 ****************** */
.list-sort{
  display: flex;
  margin-top: 24px;
}
.list-sort .list-sort-left,.list-sort-right{
  display: flex;
}
.list-sort .list-sort-left{
  border: 1px solid var(--color-gray);
  border-radius: 4px;
}
.list-sort .list-sort-left button{
  padding: 6px 8px 6px 8px;
  /* border: 1px solid var(--color-gray); */
}
.list-sort .list-sort-left button.active{
  background-color: var(--color-balck);
  color: #fff;
}
.list-sort .list-sort-left button:first-child{
  border-radius: 4px 0 0 4px;
}
.list-sort .list-sort-left button:last-child{
  border-radius: 0 4px 4px 0;
}
.list-sort .list-sort-left button:not(:first-child){
  border-left: 1px solid var(--color-gray);
}
.list-sort .list-sort-right{
  margin-left: 40px;
  display: flex;
  align-items: center;
}
.list-sort .list-sort-right .low-price{
  width: 64px;
  height: 30px;
  border: 1px solid var(--color-gray);
  display: flex;
  align-items: center;
  border-radius: 4px;
}
.list-sort .list-sort-right i{
  margin: 0 8px ;
}

.content>i{
  width: 100%;
  border-top: 1px solid var(--color-gray);
  margin: 12px 0;
}
/* ***************** 商品列表 ******************* */
.pro-list .col-li ul{
  display: grid;
  grid-template-columns: repeat(5,243px);
  gap: 16px;
  text-align: left;
}
/* 48 */
/* .pro-list{ */
/* display: flex;
flex-direction: column;
align-items: center; */
/* !!!! 盒子没有宽度时居中*/
/* text-align: center; */
/* } */
/*.pagination{*/
/*  margin-top: 48px;*/
/*  margin-bottom: 64px;*/
/*}*/


</style>
