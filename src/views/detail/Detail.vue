<!-- 详情页 -->
<template>
  <div class="container" v-if="goods.categories">
    <CategoryHead/>
    <div class="content">
      <!--      <LocalNav/>-->
      <!--  面包屑-->
      <el-breadcrumb separator="/" class="content breadcrumb">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${goods.categories[1].id}` }">
          {{ goods.categories[1].name }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/sub/${goods.categories[0].id}` }">
          {{ goods.categories[0].name }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ goods.desc }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="pro-sort-detail">
        <div class="sort-left">
          <!--          商品详情大图-->
          <!--          <div>位置{{ elementX }} {{ elementY }} {{ isOutside }}</div>-->
          <!--          <div>位置：{{left}} {{top}} {{isOutside}}</div>-->
          <div class="pro-pic">
            <!--            用整个target锁定检测范围-->
            <div class="pro-pic-origin">
              <!--              <img src="../../assets/images/detail/detailPic1.png" alt="">-->
              <img :src="goods.mainPictures[activeIndex]" alt="" ref="target">
              <div class="mask"
                   v-show="!isOutside"
                   :style="{left:`${left}px`,top:`${top}px`}">
              </div>
            </div>
            <div class="pro-pic-show" :style="[{
              backgroundImage:`url(${goods.mainPictures[activeIndex]})`,
              backgroundPositionX: `${positionX}px`,
              backgroundPositionY: `${positionY}px`,
            }]" v-show="!isOutside">
            </div>
          </div>
          <!--          商品小图列表-->
          <div class="pro-pic-list">
            <button><i class="iconfont">&#xe63c;</i></button>
            <img v-for="(img,index) in goods.mainPictures"
                 :src="img" alt="" @mouseenter="enterHandler(index)" :class="{active:index===activeIndex}">
            <!--            <img src="../../assets/images/detail/detailPic1.png" alt="">-->
            <button><i class="iconfont">&#xe621;</i></button>
          </div>
        </div>
        <div class="sort-right">
          <!--          右侧标题价格块-->
          <div class="right-title">
            <!--            <h2>女式羊毛内里懒人家居豆豆鞋</h2>-->
            <!--            <span class="detail">温暖羊毛内里，秋冬不臃肿</span>-->
            <!--            <div class="title-price">-->
            <!--              <span class="now-price">￥998</span>-->
            <!--              <span class="old-price">￥199</span>-->
            <!--            </div>-->
            <h2>{{ goods.name }}</h2>
            <span class="detail">{{ goods.desc }}</span>
            <div class="title-price">
              <span class="now-price">￥{{ goods.price }}</span>
              <span class="old-price">￥{{ goods.oldPrice }}</span>
            </div>
          </div>
          <!--          物流框框-->
          <div class="right-buy-detail">
            <div class="buy-line">
              <span>优惠券</span>
              <div>暂无可用</div>
            </div>
            <div class="buy-line">
              <span>促销</span>
              <div>满 2 件，总价 9 折</div>
            </div>
            <div class="buy-line">
              <span>邮费</span>
              <div>邮费 8 元，满 99 包邮</div>
            </div>
            <div class="buy-line">
              <span>配送至</span>
              <div class="address-select">广东深圳市南山区后海街道<i>></i></div>
              <div>有货</div>
            </div>
          </div>
          <!--          sku标签-->
          <DetailSku :goods="goods" @change="skuChange"/>
          <!--          sku表-->
          <div class="right-attribute">
            <!--            <div class="tr">-->
            <!--              <span>颜色</span>-->
            <!--              <div class="td">-->
            <!--                <img class="active" src="../../assets/images/cart/cup2.png" alt="">-->
            <!--                <img src="../../assets/images/cart/cup2.png" alt="">-->
            <!--                <img src="../../assets/images/cart/cup2.png" alt="">-->
            <!--                <img src="../../assets/images/cart/cup2.png" alt="">-->
            <!--              </div>-->
            <!--            </div>-->
            <!--            <div class="tr">-->
            <!--              <span>尺码</span>-->
            <!--              <div class="td">-->
            <!--                <div class="box detail-box">36</div>-->
            <!--                <div class="box detail-box">36</div>-->
            <!--                <div class="box detail-box">36</div>-->
            <!--                <div class="box detail-box active">36</div>-->
            <!--                <div class="box detail-box">36</div>-->
            <!--                <div class="box detail-box">36</div>-->
            <!--                <div class="box detail-box">36</div>-->
            <!--                <div class="box detail-box">36</div>-->
            <!--                <div class="box detail-box">36</div>-->
            <!--              </div>-->
            <!--            </div>-->
            <div class="tr">
              <span>数量</span>
              <div class="td">
                <el-input-number v-model="count" min="1" />
              </div>
            </div>
          </div>
          <!--          加购按钮-->
          <div class="right-operate">
            <button class="add-cart-btn big-btn" @click="addCart">
              <i class="iconfont">&#xe87a;</i>
              加入购物车
            </button>
            <button class="buy-btn big-btn">立即购买</button>
            <button class="small-btn">
              <i class="iconfont">&#xe601;</i>
              <span>收藏</span>
            </button>
            <button class="small-btn">
              <i class="iconfont">&#xe739;</i>
              <span>分享</span>
            </button>
          </div>
        </div>
      </div>
      <!--      猜你喜欢-->
      <div class="guess-you-like">
        <h2>你可能还喜欢</h2>
        <div class="col-li">
          <ul>
            <li v-for="item in goodList" :key="item.id" id="1">
              <router-link :to="`/detail/${item.id}`">
                <ProItem :title="item.name" :now-price="item.price" :picture="item.picture"/>
              </router-link>
            </li>
            <!--            <li>-->
            <!--              <ProItem/>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <ProItem/>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <ProItem/>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <ProItem/>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <ProItem/>-->
            <!--            </li>-->
          </ul>
        </div>
      </div>
      <div class="bottom">
        <!--      特卖推荐-->
        <div class="hot-sale">
          <h2>相关热卖</h2>
          <div class="col-li">
            <ul>
              <li v-for="item in goodList" :key="item.id" id="1">
                <router-link :to="`/detail/${item.id}`">
                  <ProItem :title="item.name" :now-price="item.price" :picture="item.picture"/>
                </router-link>
              </li>
              <!--              <li>-->
              <!--                <div class="pro-item">-->
              <!--                  <img src="../../assets/images/cart/cup2.png" alt="">-->
              <!--                  <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>-->
              <!--                  <div class="item-price">-->
              <!--                    <span class="now-price">￥998</span>-->
              <!--                    <span class="old-price">￥199</span>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <div class="pro-item">-->
              <!--                  <img src="../../assets/images/cart/cup2.png" alt="">-->
              <!--                  <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>-->
              <!--                  <div class="item-price">-->
              <!--                    <span class="now-price">￥998</span>-->
              <!--                    <span class="old-price">￥199</span>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <div class="pro-item">-->
              <!--                  <img src="../../assets/images/cart/cup2.png" alt="">-->
              <!--                  <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>-->
              <!--                  <div class="item-price">-->
              <!--                    <span class="now-price">￥998</span>-->
              <!--                    <span class="old-price">￥199</span>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <div class="pro-item">-->
              <!--                  <img src="../../assets/images/cart/cup2.png" alt="">-->
              <!--                  <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>-->
              <!--                  <div class="item-price">-->
              <!--                    <span class="now-price">￥998</span>-->
              <!--                    <span class="old-price">￥199</span>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <div class="pro-item">-->
              <!--                  <img src="../../assets/images/cart/cup2.png" alt="">-->
              <!--                  <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>-->
              <!--                  <div class="item-price">-->
              <!--                    <span class="now-price">￥998</span>-->
              <!--                    <span class="old-price">￥199</span>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </li>-->
            </ul>
          </div>
        </div>
        <!--        商品详情-->
        <div class="bottom-right">
          <div class="right-title">
            <h2 class="title-h2">商品详情</h2>
            <h2 class="title-h2 active">用户评价（10）</h2>
            <h2 class="title-h2">售后保障</h2>
          </div>
          <!--          二级路由分页-->
          <div class="right-content">
            <!-- 商品详情 -->
            <div class="pro-detail-pic" v-show="showWhat===0">
              <img v-for="img in goods.details.pictures" :key="img" v-img-lazy="img" alt="">
              <!--              <img src="../../assets/images/detail/deatilLongPic2.png" alt="">-->
            </div>
            <!-- 用户评价 -->
            <div class="pro-comments" v-show="showWhat===1">
              <div class="comments-acclaim">
                <div class="good">
                  <span class="acclaim-rating">99.9%</span>
                  <span class="acclaim-title">好评率</span>
                </div>
                <div class="label-list">
                  <ul>
                    <li class="label-item active">全部（10）</li>
                    <li class="label-item">有图（5）</li>
                    <li class="label-item">质量不错（1）</li>
                    <li class="label-item">质量不错（1）</li>
                    <li class="label-item">质量不错（1）</li>
                    <li class="label-item">质量不错（1）</li>
                    <li class="label-item">质量不错（1）</li>
                    <li class="label-item">质量不错（1）</li>
                    <li class="label-item">质量不错（1）</li>
                    <li class="label-item">质量不错（1）</li>
                    <li class="label-item">质量不错（1）</li>
                  </ul>
                </div>
              </div>
              <div class="comments-sort">
                <span class="detail-title">排序：</span>
                <div class="comment-sort-btn">
                  <button class="active">价格<i class="iconfont">&#xe60d;</i></button>
                  <button>评论<i class="iconfont">&#xe610;</i></button>
                </div>
              </div>
              <div class="comments-list">
                <div class="comment-item">
                  <div class="author">
                    <img src="../../assets/images/cart/cup2.png" alt="">
                    <span>K***on</span>
                  </div>
                  <div class="item-right">
                    <div class="comm-attribute">
                      <span>颜色：</span><span>杏色</span><span>，尺码：</span><span>36</span>
                    </div>
                    <p>
                      冬季时尚达人最爱的羊毛内里家居豆豆鞋，人手一双准备起来好吗！这款豆豆鞋是比较随意休闲的感觉，慵懒又高雅。牛刨层革鞋面，穿上去是比较透气的感觉，不会闷脚，我就很喜欢透气性好的鞋子。它的鞋底还有橡胶防滑，这对注重安全性能的我来说简直是福音！加厚的优质纯羊毛内里能持久恒温，冬天怕冷的我有了它就不怕脚冷了，放家里、放办公室都是很好的选择。
                    </p>
                    <div class="comm-pic">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                    </div>
                    <div class="comm-time">
                      <span>2023-07-20 13:22</span>
                    </div>
                  </div>
                </div>
                <div class="comment-item">
                  <div class="author">
                    <img src="../../assets/images/cart/cup2.png" alt="">
                    <span>K***on</span>
                  </div>
                  <div class="item-right">
                    <div class="comm-attribute">
                      <span>颜色：</span><span>杏色</span><span>，尺码：</span><span>36</span>
                    </div>
                    <p>
                      冬季时尚达人最爱的羊毛内里家居豆豆鞋，人手一双准备起来好吗！这款豆豆鞋是比较随意休闲的感觉，慵懒又高雅。牛刨层革鞋面，穿上去是比较透气的感觉，不会闷脚，我就很喜欢透气性好的鞋子。它的鞋底还有橡胶防滑，这对注重安全性能的我来说简直是福音！加厚的优质纯羊毛内里能持久恒温，冬天怕冷的我有了它就不怕脚冷了，放家里、放办公室都是很好的选择。
                    </p>
                    <div class="comm-pic">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                    </div>
                    <div class="comm-time">
                      <span>2023-07-20 13:22</span>
                    </div>
                  </div>
                </div>
                <div class="comment-item">
                  <div class="author">
                    <img src="../../assets/images/cart/cup2.png" alt="">
                    <span>K***on</span>
                  </div>
                  <div class="item-right">
                    <div class="comm-attribute">
                      <span>颜色：</span><span>杏色</span><span>，尺码：</span><span>36</span>
                    </div>
                    <p>
                      冬季时尚达人最爱的羊毛内里家居豆豆鞋，人手一双准备起来好吗！这款豆豆鞋是比较随意休闲的感觉，慵懒又高雅。牛刨层革鞋面，穿上去是比较透气的感觉，不会闷脚，我就很喜欢透气性好的鞋子。它的鞋底还有橡胶防滑，这对注重安全性能的我来说简直是福音！加厚的优质纯羊毛内里能持久恒温，冬天怕冷的我有了它就不怕脚冷了，放家里、放办公室都是很好的选择。
                    </p>
                    <div class="comm-pic">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                    </div>
                    <div class="comm-time">
                      <span>2023-07-20 13:22</span>
                    </div>
                  </div>
                </div>
                <div class="comment-item">
                  <div class="author">
                    <img src="../../assets/images/cart/cup2.png" alt="">
                    <span>K***on</span>
                  </div>
                  <div class="item-right">
                    <div class="comm-attribute">
                      <span>颜色：</span><span>杏色</span><span>，尺码：</span><span>36</span>
                    </div>
                    <p>
                      冬季时尚达人最爱的羊毛内里家居豆豆鞋，人手一双准备起来好吗！这款豆豆鞋是比较随意休闲的感觉，慵懒又高雅。牛刨层革鞋面，穿上去是比较透气的感觉，不会闷脚，我就很喜欢透气性好的鞋子。它的鞋底还有橡胶防滑，这对注重安全性能的我来说简直是福音！加厚的优质纯羊毛内里能持久恒温，冬天怕冷的我有了它就不怕脚冷了，放家里、放办公室都是很好的选择。
                    </p>
                    <div class="comm-pic">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                    </div>
                    <div class="comm-time">
                      <span>2023-07-20 13:22</span>
                    </div>
                  </div>
                </div>
                <div class="comment-item">
                  <div class="author">
                    <img src="../../assets/images/cart/cup2.png" alt="">
                    <span>K***on</span>
                  </div>
                  <div class="item-right">
                    <div class="comm-attribute">
                      <span>颜色：</span><span>杏色</span><span>，尺码：</span><span>36</span>
                    </div>
                    <p>
                      冬季时尚达人最爱的羊毛内里家居豆豆鞋，人手一双准备起来好吗！这款豆豆鞋是比较随意休闲的感觉，慵懒又高雅。牛刨层革鞋面，穿上去是比较透气的感觉，不会闷脚，我就很喜欢透气性好的鞋子。它的鞋底还有橡胶防滑，这对注重安全性能的我来说简直是福音！加厚的优质纯羊毛内里能持久恒温，冬天怕冷的我有了它就不怕脚冷了，放家里、放办公室都是很好的选择。
                    </p>
                    <div class="comm-pic">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                    </div>
                    <div class="comm-time">
                      <span>2023-07-20 13:22</span>
                    </div>
                  </div>
                </div>
                <div class="comment-item">
                  <div class="author">
                    <img src="../../assets/images/cart/cup2.png" alt="">
                    <span>K***on</span>
                  </div>
                  <div class="item-right">
                    <div class="comm-attribute">
                      <span>颜色：</span><span>杏色</span><span>，尺码：</span><span>36</span>
                    </div>
                    <p>
                      冬季时尚达人最爱的羊毛内里家居豆豆鞋，人手一双准备起来好吗！这款豆豆鞋是比较随意休闲的感觉，慵懒又高雅。牛刨层革鞋面，穿上去是比较透气的感觉，不会闷脚，我就很喜欢透气性好的鞋子。它的鞋底还有橡胶防滑，这对注重安全性能的我来说简直是福音！加厚的优质纯羊毛内里能持久恒温，冬天怕冷的我有了它就不怕脚冷了，放家里、放办公室都是很好的选择。
                    </p>
                    <div class="comm-pic">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                    </div>
                    <div class="comm-time">
                      <span>2023-07-20 13:22</span>
                    </div>
                  </div>
                </div>
                <div class="comment-item">
                  <div class="author">
                    <img src="../../assets/images/cart/cup2.png" alt="">
                    <span>K***on</span>
                  </div>
                  <div class="item-right">
                    <div class="comm-attribute">
                      <span>颜色：</span><span>杏色</span><span>，尺码：</span><span>36</span>
                    </div>
                    <p>
                      冬季时尚达人最爱的羊毛内里家居豆豆鞋，人手一双准备起来好吗！这款豆豆鞋是比较随意休闲的感觉，慵懒又高雅。牛刨层革鞋面，穿上去是比较透气的感觉，不会闷脚，我就很喜欢透气性好的鞋子。它的鞋底还有橡胶防滑，这对注重安全性能的我来说简直是福音！加厚的优质纯羊毛内里能持久恒温，冬天怕冷的我有了它就不怕脚冷了，放家里、放办公室都是很好的选择。
                    </p>
                    <div class="comm-pic">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                    </div>
                    <div class="comm-time">
                      <span>2023-07-20 13:22</span>
                    </div>
                  </div>
                </div>
                <div class="comment-item">
                  <div class="author">
                    <img src="../../assets/images/cart/cup2.png" alt="">
                    <span>K***on</span>
                  </div>
                  <div class="item-right">
                    <div class="comm-attribute">
                      <span>颜色：</span><span>杏色</span><span>，尺码：</span><span>36</span>
                    </div>
                    <p>
                      冬季时尚达人最爱的羊毛内里家居豆豆鞋，人手一双准备起来好吗！这款豆豆鞋是比较随意休闲的感觉，慵懒又高雅。牛刨层革鞋面，穿上去是比较透气的感觉，不会闷脚，我就很喜欢透气性好的鞋子。它的鞋底还有橡胶防滑，这对注重安全性能的我来说简直是福音！加厚的优质纯羊毛内里能持久恒温，冬天怕冷的我有了它就不怕脚冷了，放家里、放办公室都是很好的选择。
                    </p>
                    <div class="comm-pic">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                      <img src="../../assets/images/cart/cup2.png" alt="">
                    </div>
                    <div class="comm-time">
                      <span>2023-07-20 13:22</span>
                    </div>
                  </div>
                </div>
              </div>
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CategoryHead from '../../components/categoryHead/CategoryHead.vue'
import ProItem from '../../components/proItem/ProItem.vue'
// import LocalNav from '../../components/localNav/LocalNav.vue'
import DetailSku from "@/components/detailSku/DetailSku.vue";
import Pagination from '../../components/pagination/Pagination.vue'


import {getDetailApi} from "@/apis/datail.js";
import {getHotGoodsApi} from "@/apis/datail.js";
import {useMouseInElement} from '@vueuse/core'


import {ref} from 'vue'
import {useRoute} from "vue-router";
import {useCartStore} from "@/stores/cartStore.js";

//获取商品数据
const goods = ref({})
const route = useRoute()
const getGoods = async () => {
  const res = await getDetailApi(route.params.id)
  goods.value = res.result
  console.log('商品数据', goods.value)
}
onMounted(() => getGoods())

//商品详情
const showWhat = 1//0商品详情 1用户评价 2售后保障.

//获取热卖商品数据
const goodList = ref({})
// const route = useRoute()
const getHotList = async () => {
  const res = await getHotGoodsApi({
    id: route.params.id,
    type: 1
  })
  goodList.value = res.result
}
onMounted(() => getHotList())

//小图浏览标记
const activeIndex = ref(0)
const enterHandler = (i) => {
  activeIndex.value = i;
}

//大图放大镜
const target = ref(null)
const {elementX, elementY, isOutside} = useMouseInElement(target)

const left = ref(0)
const top = ref(0)
const positionX = ref(0)
const positionY = ref(0)

watch([elementX, elementY, isOutside], () => {
  if (isOutside.value) return
  //横向
  //方框大小265*265(放大2倍) 大图大小530*530
  if (elementX.value > 132 && elementX.value < 398) {
    left.value = elementX.value - 132
  }
  //纵向
  if (elementY.value > 132 && elementY.value < 398) {
    top.value = elementY.value - 132
  }
//  边界
  if (elementX.value > 398) {
    left.value = 265
  }
  if (elementX.value < 100) {
    left.value = 0
  }
  if (elementY.value > 398) {
    top.value = 265
  }
  if (elementY.value < 100) {
    top.value = 0
  }
//  控制大图的显示
  positionX.value = -left.value * 2
  positionY.value = -top.value * 2
})

//sku逻辑
let skuObj = {}
const skuChange = (sku) => {
  console.log(sku)
  skuObj = sku
}
const count = ref(1)
const cartStore = useCartStore()
const addCart = () => {
  if (skuObj.skuId) {
    cartStore.addCart({
      id: goods.value.id,
      name: goods.value.name,
      picture: goods.value.mainPictures[0],
      price: goods.value.price,
      count: count.value,
      skuId: skuObj.skuId,
      attrsText: skuObj.specsText,
      selected: true
    })
    console.log('detail.vue',cartStore.cartList)
  } else {
    ElMessage.warning('请选择规格')
  }
}

//
//
// onMounted((sku) => {
//
// })

</script>

<style scoped>
/********面包屑*/
.breadcrumb {
  height: 68px;
  display: flex;
  align-items: center;
}

.breadcrumb span {
  font-size: 14px;
  font-weight: 500;
}

/***********页面css*/
.pro-sort-detail {
  display: flex;
}

.pro-sort-detail .sort-left .pro-pic-origin {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.pro-sort-detail .sort-left .pro-pic-origin > img {
  width: 530px;
  height: 530px;
  border-radius: 16px;
}

.pro-pic-origin .mask {
  width: 265px;
  height: 265px;
  background-color: gray;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
}

.pro-pic {
  position: relative;
  font-size: 0;
}

.pro-pic-show {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 106%;
  background-color: gray;
  background-size: 1060px;
  border-radius: 16px;
}

.pro-sort-detail .sort-left .pro-pic-list > img {
  box-sizing: border-box;
  width: 72px;
  height: 72px;
  border-radius: 8px;
  margin: 0 4px;
}

.pro-sort-detail .sort-left .pro-pic-list > .active {
  border: 1px solid #119FE4;
  border-radius: 8px;
}

.pro-sort-detail .sort-left .pro-pic-list {
  margin-top: 16px;
  display: flex;
  align-items: center;
}

.sort-left .pro-pic-list button {
  width: 56px;
  height: 72px;
}

.sort-left .pro-pic-list :first-child {
  margin-right: 8px;
}

.sort-left .pro-pic-list :last-child {
  margin-left: 8px;
}

/* **** 右边文字介绍 *** */
.pro-sort-detail .sort-right {
  margin-left: 60px;
  flex: 1;
}

.pro-sort-detail .sort-right .right-title h2 {
  font-size: 24px;
  font-weight: 500;
}

.pro-sort-detail .sort-right .right-title .detail {
  font-size: 14px;
  margin: 12px 0;
  color: var(--color-detail-gray);
}

.sort-right .right-title .now-price {
  font-size: 24px;
  font-weight: 700;
}

.sort-right .right-title .old-price {
  font-size: 16px;
  font-weight: 400;
  margin-left: 8px;
}

.sort-right .right-buy-detail {
  height: 160px;
  box-sizing: border-box;
  background-color: #F9FAFE;
  border-radius: 8px;
  margin-top: 40px;
  padding: 16px;
}

.sort-right .right-buy-detail .buy-line {
  display: flex;
  align-items: center;
}

.sort-right span {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.sort-right .right-buy-detail .buy-line div {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  display: inline-block;
}

.sort-right .right-buy-detail .buy-line:not(:last-child) {
  margin-bottom: 12px;
}

.sort-right .right-buy-detail .buy-line .address-select {
  background-color: #fff;
  border: 1px solid var(--color-gray);
  width: 216px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-buy-detail .buy-line .address-select i {
  margin-left: 8px;
}

.right-buy-detail .buy-line :last-child {
  margin-left: 12px;
}

/* *** 颜色 *** */
.sort-right .right-attribute .tr {
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-left: 16px;
}

.sort-right .right-attribute .tr span,
.right-buy-detail .buy-line span {
  width: 72px;
  color: var(--color-detail-gray);
}

.sort-right .right-attribute .tr .td {
  display: flex;
}

.sort-right .right-attribute .tr .td img {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #E6E8EC;
  background-color: #F9FAFE;
  margin-right: 8px;
}

.sort-right .right-attribute .tr .td .box {
  border: 1px solid #E6E8EC;
  border-radius: 4px;
  height: 32px;
  line-height: 32px;
}

.sort-right .right-attribute .tr .td .detail-box {
  margin-right: 6px;
  padding: 0 16px;
}

.sort-right .right-attribute .tr .td .active {
  border: 1px solid #119FE4;
}

.right-attribute .tr .td .box div {
  width: 48px;
  line-height: 32px;
  display: inline-block;
  text-align: center;
  border-left: 1px solid #E6E8EC;
  border-right: 1px solid #E6E8EC;
}

.right-attribute .tr .td .box .detail-box-add {
  margin: 6px;
  width: 24px;
  /* align-items: center;跟text的区别？ */
  text-align: center;
}

.sort-right .right-attribute .tr .td .num-box {
  display: flex;
  align-items: center;
}

/* *** 加入购物车/购买/收藏/分享 *** */
.sort-right .right-operate {
  height: 48px;
  margin-top: 64px;
}

.sort-right .right-operate .add-cart-btn {
  width: 192px;
  box-sizing: border-box;
  background-color: var(--color-balck);
  color: #fff;
  margin-right: 12px;

}

.sort-right .right-operate .add-cart-btn .iconfont {
  margin-right: 16px;
}

.sort-right .right-operate .big-btn {
  border-radius: 8px;
  font-size: 16px;
  line-height: 48px;
}

.sort-right .right-operate .iconfont {
  font-size: 16px;
  font-weight: 700;
}

.sort-right .right-operate .buy-btn {
  width: 136px;
  box-sizing: border-box;
  border: 1px solid var(--color-old-gray);
  margin-right: 24px;
}

.sort-right .right-operate .small-btn {
  width: 92px;
  height: 36px;
  margin-right: 8px;
}

.sort-right .right-operate .small-btn .iconfont {
  margin-left: 10px;
}

/* *************** 猜你喜欢 *************** */
.content .bottom {
  display: flex;
}

/* 动态改变长条高度？为什么行内块不行？ */
.content .guess-you-like,
.content .bottom .hot-sale {
  margin-top: 60px;
  width: 100%;
  border: 1px solid var(--color-gray);
  border-radius: 12px;
  padding: 20px 32px 32px 32px;
  display: inline-block;
}

.content .guess-you-like h2,
.content .bottom .hot-sale h2 {
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 20px;
}

.content .guess-you-like .col-li ul {
  display: flex;
  justify-content: space-between;
}

.content .guess-you-like .pro-item {
  width: 160px;
  height: 245px;
}

.content .guess-you-like .pro-item img {
  height: 160px;
  width: 160px;
}

.content .guess-you-like .pro-item h3 {
  letter-spacing: 1.4px;
}

/* *********** 热卖 *********** */
.content .bottom {
  margin-top: 50px;
}

.content .bottom .hot-sale {
  width: 264px;
  height: 2010px;
  box-sizing: border-box;
  margin-top: 0;
}

.content .bottom .hot-sale .col-li ul {
  flex-direction: column;
  align-items: center;

}

.content .bottom .pro-item {
  width: 200px;
  height: 290px;
}

.bottom .col-li li:not(:first-child) .pro-item {
  margin-top: 36px;
}

.content .bottom .pro-item img {
  height: 200px;
}

/* *** 右边 *** */
.content .bottom .bottom-right {
  margin-left: 48px;
  flex: 1;
}

.content .bottom .bottom-right .right-title {
  display: flex;
  border-bottom: 1px solid var(--color-gray);
}

.bottom-right .right-title .title-h2 {
  line-height: 44px;
  margin-right: 36px;
}

.bottom-right .right-title .title-h2.active {
  font-weight: 700;
  border-bottom: 2px solid var(--color-balck);
}

.bottom-right .right-content .pro-detail-pic {
  font-size: 0;
}

.bottom-right .right-content .pro-detail-pic img {
  width: 967px;
}

.bottom-right .right-content.active {
  display: block;
}

/* *** 用户评价 *** */
.right-content .comments-acclaim {
  display: flex;
  margin-top: 36px;
}

.right-content .comments-acclaim .good {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-content .comments-acclaim .good .acclaim-rating {
  font-size: 40px;
  font-weight: 400;
  color: var(--color-red);
  line-height: 47px;
  margin-bottom: 2px;
}

.right-content .comments-acclaim .label-list {
  margin-left: 36px;
}

.right-content .comments-acclaim .label-list .label-item {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 6px 16px;
  border: 1px solid var(--color-old-gray);
  border-radius: 4px;
  margin: 0 6px 8px 0;
}

.right-content .comments-acclaim .label-list .label-item.active {
  background-color: var(--color-balck);
  color: #fff;
}

/* *** 排序 *** */
.right-content .comments-sort {
  margin-top: 36px;
  padding: 12px 0;
  border-top: 1px solid var(--color-gray);
  border-bottom: 1px solid var(--color-gray);
}

.right-content .comments-sort .comment-sort-btn {
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  display: inline-block;
  margin-left: 12px;
}

.comments-sort .comment-sort-btn button {
  padding: 6px 8px 6px 8px;
  font-size: 12px;
}

.comments-sort .comment-sort-btn button:first-child {
  border-radius: 4px 0 0 4px;
}

.comments-sort .comment-sort-btn button:last-child {
  border-radius: 0 4px 4px 0;
}

.comments-sort .comment-sort-btn button.active {
  background-color: var(--color-balck);
  color: #fff;
}

.comments-sort .comment-sort-btn button i {
  margin-left: 2px;
  font-size: 12px;
}

/* *** 评论 *** */
.comments-list .comment-item {
  display: flex;
  padding: 32px 25px 16px 25px;
}

.comments-list .comment-item:not(:last-child) {
  border-bottom: 1px solid var(--color-gray);
}

.comments-list .comment-item .author {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 38px;
}

.comments-list .comment-item .author span {
  margin-top: 14px;
  line-height: 20px;
  font-size: 14px;
}

.comments-list .comment-item .author img {
  width: 38px;
  height: 38px;
  border-radius: 20px;
}

.comment-item .item-right span {
  color: var(--color-detail-gray);
  line-height: 17px;
}

.comment-item .item-right p {
  margin-top: 8px;
  line-height: 20px;
}

.comment-item .item-right .comm-pic {
  margin-top: 12px;
  vertical-align: middle;
  font-size: 0;
}

.comment-item .item-right .comm-pic img {
  width: 120px;
  height: 120px;
  border-radius: 4px;
  margin-right: 16px;
}

.comment-item .item-right .comm-time {
  margin-top: 12px;
}

.pagination {
  margin: 100px 0 80px 0;
}
</style>
