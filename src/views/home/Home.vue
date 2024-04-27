<script setup>
import CategoryHead from '../../components/categoryHead/CategoryHead.vue'
import ProItem from '../../components/proItem/ProItem.vue'

</script>

<template>
  <div class="container">
    <CategoryHead/>
    <div class="banner">
      <img src="../../assets/images/home/BannerPic.png" alt="">
    </div>
    <div class="content">
      <div class="ad-icon">
        <div class="ad-item">
          <i class="iconfont">&#xe66c;</i>
          <span>正品保障</span>
          <span class="detail">大额资金担保，遇假必赔</span>
        </div>
        <div class="ad-item">
          <i class="iconfont">&#xe60f;</i>
          <span>正品保障</span>
          <span class="detail">大额资金担保，遇假必赔</span>
        </div>
        <div class="ad-item">
          <i class="iconfont">&#xed0a;</i>
          <span>正品保障</span>
          <span class="detail">大额资金担保，遇假必赔</span>
        </div>
        <div class="ad-item">
          <i class="iconfont">&#xe667;</i>
          <span>正品保障</span>
          <span class="detail">大额资金担保，遇假必赔</span>
        </div>
      </div>
      <!-- 新品首发 -->
      <div class="col">
        <div class="col-title">
          <h2>新品首发</h2>
          <div class="more">
            <a href="#">更多新品</a>
            <i class="iconfont">&#xe620;</i>
          </div>
        </div>
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
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="col-title">
          <h2>居家生活</h2>
          <div class="col-nav">
            <ul>
              <li><a href="#" class="nav">床垫</a></li>
              <li><i>/</i><a href="#" class="nav">床品家纺</a></li>
              <li><i>/</i><a href="#" class="nav">乳胶枕</a></li>
              <li><i>/</i><a href="#" class="nav">香氛净味</a></li>
              <li><i>/</i><a href="#" class="nav">清洁护理</a></li>
              <li><i>/</i><a href="#" class="nav">清新绿植</a></li>
              <li><i>/</i><a href="#" class="nav">装饰摆件</a></li>
            </ul>
            <div class="more">
              <a href="#">查看全部</a>
              <i class="iconfont">&#xe620;</i>
            </div>
          </div>
        </div>
        <div class="col-banner">
          <img src="../../assets/images/home/ColBanner1.png" alt="">
        </div>
        <div class="col-li">
          <ul>
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
      </div>
    </div>
  </div>
</template>

<style scoped>
body{
  width: 1920px;
}

.banner{
  height: 480px;
  width: 100%;
  background-color: #F2F2F2;
}
.banner img{
  display: block;
  width: var(--width-middle);
  height: 100%;
  margin: 0 auto;

}

.content{
  width: var(--width-middle);
  margin: 0 auto;
}
/* ****** 正品保障 ****** */
.content .ad-icon{
  display: flex;
  justify-content: space-around;
  padding: 30px;
}
.content .ad-item{
  width: 180px;
  height: 129px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;

}
.ad-item .iconfont{
  font-size: 34px;
  font-weight: 700;
  line-height: 36px;
  margin: 20px;
}
.content .ad-item span{
  font-size: 20px;
  line-height: 20px;
  margin: 4px;
}
.content .ad-item .detail{
  font-size: 14px;
}

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
}

.col .col-title .more>a,i{
  font-size: 16px;
  font-weight: 500;
}
.col .col-title .more a{
  margin-left: 40px;
}
.col .col-title .col-nav li i{
  color: var(--color-gray);
}
.col .col-title .col-nav{
  display: flex;
  align-items: center;
}
.col .col-title .col-nav ul{
  display: flex;
}
.col .col-title .col-nav .nav{
  line-height: 16px;
  padding: 0 8px 0 8px;
}
.col .col-banner img{
  width: var(--width-middle);
  height: 320px;
}
.col .col-banner{
  margin-bottom: 16px;
}
.col-li ul{
  display: flex;
  justify-content: space-between;
}
/* ************  ***************** */
</style>
