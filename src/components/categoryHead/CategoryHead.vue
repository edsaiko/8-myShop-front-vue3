<!--搜索栏位置的头部-->
<template>
  <div class="head">
    <div class="search-area">
      <div class="left">
        <a href="#">
          <img src="../../assets/images/logo2_1.png" alt="">
          <img src="../../assets/images/name1_1.png" alt="">
        </a>
      </div>
      <div class="middle">
        <div class="search-box">
          <!-- 包含搜索框和搜索历史 -->
          <div class="search-part">
            <!-- 搜索框 -->
            <div class="search-container">
              <i class="iconfont">&#xe651;</i>
              <input ref="searchBox" type="text" value="咖啡机"/>
            </div>
            <!-- 搜索历史 -->
            <div ref="searchHisBox" class="search-history">
              <div class="his-title">
                <span>搜索历史</span>
                <button ref="clearSearchList">清空</button>
              </div>
              <!-- 行内块居中，行内块有那些 -->
              <!-- 块居中 -->
              <ul ref="searchList">
                 <li v-for="item in searchHisData" :key="item.id">
                   {{ item.content }}<i class="iconfont">&#xe655;</i>
                 </li>
              </ul>
<!--              <ul>-->
<!--                <li>11111<i class="iconfont">&#xe655;</i></li>-->
<!--                &lt;!&ndash;<li>211111</li>-->
<!--                <li>31111</li> &ndash;&gt;-->
<!--              </ul>-->
            </div>
          </div>
          <button ref="searchBtn" class="search-btn">搜索</button>
        </div>
        <nav>
          <ul>
            <li><a href="#">外套</a></li>
            <li><a href="#">上装</a></li>
            <li><a href="#">裤装</a></li>
            <li><a href="#">连衣裙</a></li>
            <li><a href="#">半身裙</a></li>
            <li><a href="#">内衣</a></li>
            <li><a href="#">起居系列</a></li>
            <li><a href="#">西装</a></li>
            <li><a href="#">摇粒绒</a></li>
          </ul>
        </nav>
      </div>
      <div class="right">
        <button class="cart-btn">
          <i class="iconfont">&#xe87a;</i>
          <span>购物车</span>
          <i class="num">2</i>
        </button>
<!--        购物车按钮-->
        <div class="cart active">
<!--          active-->
          <ul>
            <li class="cart-item" v-for="item in cartStore.cartList" :key="item">
              <a href="#">
                <div class="cart-item-left">
                  <img :src="item.picture" alt="">
                  <div class="cart-pro">
                    <div class="pro-title">
                      <h3>{{ item.name }}</h3>
                      <span class="detail">x {{ item.count }}</span>
<!--                      这里toFixed就不行？-->
                      <span class="cart-item-price">￥{{ item.price }}</span>
                    </div>
                    <span class="detail">{{ item.attrsText }}</span>
                  </div>
                </div>
              </a>
              <!-- x被a包裹的时，点击x是否会影响a -->
              <i class="iconfont" @click="cartStore.delCart(item.skuId)">&#xe723;</i>
            </li>
<!--            <li class="cart-item">-->
<!--              <a href="#">-->
<!--                <div class="cart-item-left">-->
<!--                  <img src="../../assets/images/cart/cup2.png" alt="">-->
<!--                  <div class="cart-pro">-->
<!--                    <div class="pro-title">-->
<!--                      <h3>中国人民真蒸汽打奶泡复古</h3>-->
<!--                      <span class="cart-item-price">￥998</span>-->
<!--                    </div>-->
<!--                    <span class="detail">复古白</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </a>-->
<!--              <i class="iconfont">&#xe723;</i>-->
<!--            </li>-->
          </ul>
          <div v-if="cartStore.cartList.store===0">
            <el-empty description="购物车为空">
              <el-button type="primary">随便逛逛</el-button>
            </el-empty>
          </div>
          <div class="car-total">
            <div class="total-price">
              <span class="detail">商品合计</span>
              <span class="cart-item-price">￥{{ cartStore.allPrice.toFixed(2) }}</span>
            </div>
            <button @click="$router.push('/cart')">去购物车结算</button>
          </div>
        </div>
      </div>
    </div>
<!--    分类导航栏-->
    <div class="nav-category">
      <div class="nav-small-category">
        <div class="category-title">
          <i class="iconfont">&#xe600;</i>
          <h3>全部商品分类</h3>
        </div>
        <div class="small-category">
          <div class="small-category1">
            <ul>
              <li class="small-category1-list" v-for="item in categoryStore.categoryList" :key="item.id">
                <router-link to="/">
                  {{ item.name }}<i class="iconfont">&#xe620;</i>
                </router-link>
                <div class="small-category2">
                  <!-- 二级标签 -->
                  <ul>
                    <li class="small-category3" v-for="item2 in categoryStore.categoryList" :key="item2.id">
                      <span>{{ item.name }}</span>
                      <!-- 3级标签 -->
                      <ul>
                        <li v-for="item3 in item2.children" :key="item3.id">
                          <router-link to="/">{{ item3.name }}</router-link>
                        </li>
                        <!--                    <li><a href="#">T恤</a></li>-->
                        <!--                    <li><a href="#">T恤</a></li>-->
                        <!--                    <li><a href="#">T恤</a></li>-->
                        <!--                    <li><a href="#">T恤</a></li>-->
                        <!--                    <li><a href="#">T恤</a></li>-->
                        <!--                    <li><a href="#">T恤</a></li>-->
                        <!--                    <li><a href="#">T恤</a></li>-->
                        <!--                    <li><a href="#">T恤</a></li>-->
                        <!--                    <li><a href="#">T恤</a></li>-->
                        <!--                    <li><a href="#">T恤</a></li>-->
                      </ul>
                    </li>
                    <!--                <li class="small-category3">-->
                    <!--                  <span>上衣</span>-->
                    <!--                  &lt;!&ndash; 3级标签 &ndash;&gt;-->
                    <!--                  <ul>-->
                    <!--                    <li><a href="#">T恤</a></li>-->
                    <!--                    <li><a href="#">T恤</a></li>-->
                    <!--                    <li><a href="#">T恤</a></li>-->
                    <!--                    <li><a href="#">T恤</a></li>-->
                    <!--                    <li><a href="#">T恤</a></li>-->
                    <!--                    <li><a href="#">T恤</a></li>-->
                    <!--                  </ul>-->
                    <!--                </li>-->
                  </ul>
                </div>
              </li>
<!--              <li>居家生活<i class="iconfont">&#xe620;</i></li>-->
<!--              <li>居家生活<i class="iconfont">&#xe620;</i></li>-->
<!--              <li>居家生活<i class="iconfont">&#xe620;</i></li>-->
<!--              <li>居家生活<i class="iconfont">&#xe620;</i></li>-->
            </ul>
<!--            {-->
<!--              name:item1,女-->
<!--              child:{-->
<!--                name:item2,裙子-->
<!--                child:{-->
<!--                  name:item3，长裙-->
<!--                }-->
<!--              }-->
<!--            }-->
          </div>
        </div>
      </div>
<!--      中间导航栏-->
      <nav>
        <ul>
          <li v-for="item in categoryStore.categoryList" :key="item.id">
            <RouterLink active-class="active" :to="`/category/all/${item.id}`">{{ item.name }}</RouterLink>
          </li>
          <li><a href="#">男装</a></li>
          <li><a href="#">女装</a></li>
          <li><a href="#">童装</a></li>
          <li><a href="#">母婴亲子</a></li>
          <li><a href="#">婴幼儿</a></li>
<!--          <li><a href="#">全球尖货</a></li>-->
        </ul>
      </nav>
    </div>
  </div>
  <div id="testClass"></div>
</template>

<script setup>
import {reactive} from "vue"
import {useCategoryStore} from "@/stores/categoryStore.js";
import {useCartStore} from "@/stores/cartStore.js";

const categoryStore=useCategoryStore();

// ******************* 搜索框 ***************************
let searchHisData = reactive([
  {
    "id":1,
    "content":'haha'
  },
  {
    "id":2,
    "content":'xixi'
  },
  {
    "id":3,
    "content":'heihei'
  },
]);
let searchBox=ref(null)
let searchHisBox=ref(null)
let isHisHover = ref(false);
let isSearchBoxFocus = ref(false);

let searchBtn=ref(null)
let searchList=ref(null)
let clearSearchList=ref(null)

onMounted(()=>{
  searchBoxJS();
})

const beActive = function (ele) {
  ele.classList.add('active');
}
const beNotActive = function (ele) {
  ele.classList.remove('active');
}

//搜索栏逻辑
const searchBoxJS=function(){
// ******************* 搜索框 ***************************
  console.log("searchBox",document.querySelector("#testClass"))
  searchBox.value.addEventListener('focus', function () {
    beActive(searchHisBox.value);
    isSearchBoxFocus.value=true;
  })
  searchBox.value.addEventListener('blur', function () {
    console.log(isHisHover.value)
    isSearchBoxFocus.value=false;
    if (isHisHover.value === false)
      beNotActive(searchHisBox.value);
  })
  // 如果鼠标在'历史记录'中，标记为真，点击不会隐藏
  // 鼠标离开'历史记录'或输入框失焦，标记置假，
  // 注意：即页面刷新时会自动计入一次'鼠标进入事件'
  // 挺坑，当列表数据删除，页面会刷新，鼠标被计入一次'进入事件'，blur的置假失效
  searchHisBox.value.addEventListener('mouseenter', function () {
    isHisHover.value = true;
    console.log(isHisHover.value)
  })
  searchHisBox.value.addEventListener('mouseleave', function () {
    isHisHover.value = false;
    if (isSearchBoxFocus.value === false)
      beNotActive(searchHisBox.value);
    console.log(isHisHover.value)
  })

  searchBtn.value.addEventListener('click', function () {
    console.log()
    if (searchBox.value.value !== '' && searchHisData.indexOf(searchBox.value) === -1)
      searchHisData.push({
        "id":4,
        content:searchBox.value.value
      });
  })
  searchList.value.addEventListener('click', function (e) {
    if (e.target.className === 'iconfont') {
      console.log("delete click.",e.target.parentNode.childNodes[0])
      // searchHisData.splice(e.target.parentNode.childNodes[0], 1)
      const result = searchHisData.findIndex((item) => {
        return item.content === e.target.parentNode.childNodes[0].textContent
      });
      searchHisData.splice(result, 1)

      // searchHisData=searchHisData.filter((item)=>{
      //   item.content!==e.target.parentNode.childNodes[0]
      // })
    }
  })
  //可以直接用@click，傻不傻
  clearSearchList.value.addEventListener('click', function () {
    console.log("clear click.",searchHisData)
    searchHisData.splice(0,searchHisData.length);
    console.log("clear after.",searchHisData)
  })
}

// ***********购物车
const cartStore=useCartStore()


</script>

<style scoped>
.active{
  color: orange;
}
/*样式先不整了*/
/*.active::after{*/
/*  content: '??';*/
/*  !*border-bottom: 1px solid orange;*!*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  z-index: 1500;*/
/*}*/
.head {
  width: 1920px;
}

.search-area {
  width: var(--width-middle);
  margin: 0 auto;
  padding: 32px 0 32px 0;
  display: flex;
  justify-content: space-between;
}

.search-area .left img {
  height: 37px;
  margin-left: 10px;
}

/* ********* 搜索：搜索框+按钮 *************** */
.search-area .middle .search-box {
  width: 529px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-box .search-container {
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid var(--color-gray);
  border-right: none;
  border-radius: 8px 0 0 8px;
}

.search-box input, button {
  display: inline-block;
  height: 100%;
}

.search-box i, input {
  color: #D8DADF;
}

.search-box i {
  margin: 0 8px 0 18px;
}

.search-box input {
  flex: 1;
  padding-right: 10px;
}

.search-box .search-btn {
  width: 88px;
  height: 100%;
  border-radius: 0 8px 8px 0;
  background-color: var(--color-balck);
  color: var(--color-white);
  font-size: 14px;
  font-weight: 500;
}

/* *** 搜索历史，与搜索框为兄弟关系 *** */
.search-box .search-part {
  position: relative;
  flex: auto;
  height: 100%;
}

.search-box .search-history {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: var(--color-shadow);
  z-index: 999;
  display: none;
}

.search-box .search-history.active {
  display: block;
}

.search-history .his-title {
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  padding: 12px 16px 12px 16px;
  font-size: 12px;
  font-weight: 700;
  border-bottom: 1px solid var(--color-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-history ul {
  display: flex;
  flex-direction: column;
}

.search-history ul li {
/*.search-history .search-list{*/
  padding: 12px 16px 12px 16px;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.search-history ul li:hover {
  background-color: var(--color-gray);
}

.search-history ul li i {
  color: var(--color-balck);
}

.his-title button {
  height: 12px;
  font-size: 12px;
  line-height: 12px;
  color: #6EC5DF;
}

.his-title span {
  color: var(--color-deep-gray);
}


/* ******搜索下的推荐******* */
.middle nav ul {
  display: flex;
}

.middle nav ul li {
  line-height: 18px;
  padding: 10px;
  position: relative;
}

.middle nav ul li:not(:first-child) a::after {
  content: '';
  position: absolute;
  top: 14px;
  left: 0;
  height: 1em;
  border-left: 1px solid var(--color-gray);
}

/* ********** 购物车按钮 *************** */
.right {
  width: 134px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid var(--color-gray);
  position: relative;
}

.right .cart-btn {
  width: 100%;
}

.right .cart-btn:hover {
  background-color: var(--color-gray);
}

.right .cart-btn span {
  margin: 0 8px 0 8px;
}

.right .num {
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-color: var(--color-red);
  border-radius: 12px;
  color: #fff;
  font-weight: 700;
}

/* **** 购物车 *** */
.right .cart {
  width: 430px;
  position: absolute;
  top: 48px;
  right: 0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: var(--color-shadow);
  z-index: 999;
  display: none;
}

.right:hover .cart.active {
  display: block;
}

.right .cart ul {
  display: flex;
  flex-direction: column;
}

.right .cart ul .cart-item:hover {
  background-color: var(--color-gray);
}

.right .cart ul .cart-item-left {
  display: flex;
  width: 100%;
}

.right .cart ul .cart-item-left .cart-pro {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  flex: 1;
}

.right .cart ul img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
}

.right .cart .cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.right .cart .cart-item a {
  flex: 1;
}

.cart-item .cart-pro .pro-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

}

/* *** 底部结算 *** */
.right .cart .car-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 1px solid var(--color-gray);
}

.car-total .total-price {
  display: flex;
  flex-direction: column;
  height: 34px;
  justify-content: space-around;
}

.car-total button {
  display: inline-block;
  background-color: #129FE3;
  height: 34px;
  box-sizing: border-box;
  color: #fff;
  padding: 0 16px 0 16px;
  border-radius: 8px;
}

/* ************* 分类导航栏 ************** */
.nav-category {
  width: var(--width-middle);
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 200;
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

.nav-small-category:hover .small-category{
  display: block;
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
.small-category .small-category1:hover{
  background-color: #fff;
}
.small-category1>ul {
  display: flex;
  flex-direction: column;
}

.small-category1>ul>li {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px 12px 32px;
}

.small-category1>ul>li:hover {
  background-color: var(--color-gray);
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
  display: none;
}

.small-category1-list:hover .small-category2{
  display: block;
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
