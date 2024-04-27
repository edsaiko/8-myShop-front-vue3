
<!--页脚-->
<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-left1">
          <div class="footer-left">
            <img src="../../assets/images/logo1.png" alt="">
            <p>小蓝商城时深受中产喜爱的生活方式品牌，为消费者提供一站式、全品类、全方位的美好生活解决方案。我们倡导多元化的生活价值主张，通过简约、实用的舒适美学，每个人都可以把生活选择权交还给自己。</p>
          </div>
          <div class="footer-middle">
            <ul class="footer-nav1">
              <li>
                <h2>购物指南</h2>
                <nav>
                  <ul class="footer-nav2">
                    <li><a href="#">购物流程</a></li>
                    <li><a href="#">会员介绍</a></li>
                    <li><a href="#">生活旅行</a></li>
                    <li><a href="#">常见问题</a></li>
                    <li><a href="#">联系在线客服</a></li>
                  </ul>
                </nav>
              </li>
              <li>
                <h2>购物指南</h2>
                <nav>
                  <ul class="footer-nav2">
                    <li><a href="#">购物流程</a></li>
                    <li><a href="#">会员介绍</a></li>
                    <li><a href="#">生活旅行</a></li>
                    <li><a href="#">常见问题</a></li>
                    <li><a href="#">联系在线客服</a></li>
                  </ul>
                </nav>
              </li>
              <li>
                <h2>购物指南</h2>
                <nav>
                  <ul class="footer-nav2">
                    <li><a href="#">购物流程</a></li>
                    <li><a href="#">会员介绍</a></li>
                    <li><a href="#">生活旅行</a></li>
                    <li><a href="#">常见问题</a></li>
                    <li><a href="#">联系在线客服</a></li>
                  </ul>
                </nav>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-right">
          <h2>扫码下载APP</h2>
          <img src="../../assets/images/code.png" alt="">
          <span>下载领取新人红包</span>
        </div>
      </div>
    </div>
    <i></i>
    <div class="footer-bottom">
      <div class="footer-bottom-right">
        <span>关注我们:</span>
        <img src="../../assets/images/platform.png" alt="">
        <img src="../../assets/images/platform.png" alt="">
        <img src="../../assets/images/platform.png" alt="">
      </div>
      <div class="footer-bottom-left">
        ©️ Copyright 2023 BlueJ, All rights reserved.
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
.footer{
  width: 1920px;
  height: 372px;
  background-color: var(--color-balck);
  overflow: hidden;

}
.footer .footer-content{
  margin: 0 auto;
  width: var(--width-middle);
}
.footer .footer-top{
  display: flex;
  margin: 68px auto 68px auto;
  justify-content: space-between;
}
.footer .footer-content .footer-left1{
  display: flex;
}
/* *** left *** */
.footer .footer-left img{
  width: 112px;
  height: 23px;
}
.footer .footer-left p{
  color: var(--color-fooder-gray);
  width: 280px;
  height: 80px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 24px;
}


/* *** middle *** */
.footer .footer-middle{
  margin-left: 256px;
}
.footer .footer-middle .footer-nav1{
  display: flex;
}

.footer h2{
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}

.footer .footer-middle .footer-nav1 h2{
  margin: 12px 104px 12px 0;
}
.footer .footer-middle .footer-nav2{
  color: var(--color-fooder-gray);
  display: flex;
  flex-direction: column;
}
.footer-nav2 li{
  margin: 8px 0 8px 0;
}

.footer .footer-right{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
}
.footer .footer-right img{
  margin: 20px 0 12px 0;
}
.footer .footer-right span{
  color: var(--color-red);
}

/* ********* 底部栏 ******** */
.footer i{
  width: 100%;
  border-top: 1px solid #303134;
}
.footer .footer-bottom{
  width: var(--width-middle);
  margin: 0 auto;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer .footer-bottom .footer-bottom-right{
  display: flex;
  align-items: center;
}
.footer .footer-bottom .footer-bottom-right span{
  color: #fff;
  /* padding: 30px 0 30px 0; */
}

.footer .footer-bottom .footer-bottom-right img{
  /* display: block; */
  /* margin: 24px 12px 24px 12px; */
  width: 24px;
  height: 24px;
  margin-left: 12px;
}
.footer .footer-bottom .footer-bottom-left{
  color: var(--color-fooder-gray);
}
</style>
