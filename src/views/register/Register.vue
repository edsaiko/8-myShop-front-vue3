<template>
  <div class="container">
    <div class="header">
      <a href="">
        <img src="../../assets/images/logo1.png" alt="">
      </a>
    </div>
    <div class="content">
      <h1>登录</h1>
      <div class="icon">
        <div class="icon-item"><i class="iconfont">&#xe62e;</i></div>
        <div class="icon-item"><i class="iconfont">&#xe634;</i></div>
        <div class="icon-item"><i class="iconfont">&#xe664;</i></div>
      </div>
      <div class="way-phone">
        <from action="#" class="register-form">
          <div class="from-item">
            <div class="item-title">手机号码</div>
            <div class="input-line">
              <div><span>+86</span><i class="iconfont">&#xe661;</i></div>
              <input type="text" placeholder="请输入手机号码">
            </div>
          </div>
          <div class="from-item">
            <div class="item-title">验证码</div>
            <div class="input-line">
              <input type="text" placeholder="请输入验证码">
              <button>获取验证码</button>
            </div>
          </div>
          <div class="from-item">
            <div class="item-title">密码</div>
            <div class="input-line input-password">
              <input type="text" placeholder="请输入密码">
              <input type="text" placeholder="请再次输入密码">
            </div>
          </div>
        </from>
        <button class="create-btn">登录</button>
        <div class="have-you">已有账号？点击<a>登录</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/css/regiLoginSame.css'
</script>

<style scoped>
.container .content h1{
  font-size: 24px;
  font-weight: 700;
}
.container .content .icon{
  margin-top: 24px;
  display: flex;
}
.container .content .icon .icon-item{
  width: 44px;
  height: 44px;
  margin-right: 12px;
  border: 1px solid var(--color-gray);
  border-radius: 22px;
  /* text-align: center; */
  /* display: inline-block; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.container .content .icon .icon-item .iconfont{
  font-size: 24px;
  /* line-height: 44px; */
}
/* *** 表单 *** */
.way-phone .register-form{
  margin-top: 8px;
}
.way-phone .register-form .from-item .item-title{
  font-size: 14px;
  font-weight: 500;
  margin: 16px 0 12px 0;
}
.way-phone .register-form .from-item .input-line{
  display: flex;
}
.register-form .from-item .input-line div{
  display: flex;
  align-items: center;
}
.register-form .from-item .input-line div,
.register-form .from-item .input-line input,
.register-form .from-item .input-line button
{
  padding: 10px 16px;
  border: 1px solid var(--color-gray);
  border-radius: 8px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  /* display: flex;
  align-items: center; */
}
.register-form .from-item .input-line> :first-child{
  margin-right: 12px;
}
.register-form .from-item .input-line div .iconfont{
  margin-left: 8px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 20px;
}
.register-form .from-item .input-line input{
  flex: 1;
}
.register-form .from-item .input-line button{
  background-color: #FAFCFE;
}
.content .way-phone .register-form .from-item .input-password{
  display: flex;
  flex-direction: column;
}
.content .way-phone .register-form .from-item .input-password :first-child{
  margin: 0 0 12px 0;
}
.content .way-phone .create-btn{
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--color-balck);
  padding: 12px 0;
  color: #fff;
  border-radius: 8px;
  margin-top: 36px;
}
.content .way-phone .have-you{
  margin-top: 12px;
  color: #778294;
  text-align: center;
}
.content .way-phone .have-you a{
  font-size: 14px;
  line-height: 20px;
  color: #119FE4;
}
</style>