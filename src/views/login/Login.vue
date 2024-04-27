<template>
  <div class="container login-container">
    <div class="header">
      <a href="">
        <img class="login-logo1" src="@/assets/images/logo2_2.png" alt="">
        <img src="@/assets/images/name1_2.png" alt="">
      </a>
    </div>
    <div class="content">
      <h1>登录</h1>
      <div class="icon">
        <div class="icon-item"><i class="iconfont">&#xe62e;</i></div>
        <div class="icon-item"><i class="iconfont">&#xe634;</i></div>
        <div class="icon-item"><i class="iconfont">&#xe664;</i></div>
      </div>
      <div class="way-phone register-form">
        <el-form ref="formRef" :model="form" :rules="rules" label-position="right" status-icon>
          <el-form-item label="账户" prop="account">
            <el-input v-model="form.account"/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" show-password/>
          </el-form-item>
          <el-form-item prop="agree">
            <el-checkbox v-model="form.agree" size="large">
              我已同意隐私条款和服务条款
            </el-checkbox>
          </el-form-item>
        </el-form>
        <!--        <from action="#" class="register-form">-->
        <!--          <div class="from-item">-->
        <!--            <div class="item-title">手机号码</div>-->
        <!--            <div class="input-line">-->
        <!--              <div><span>+86</span><i class="iconfont">&#xe661;</i></div>-->
        <!--              <input type="text" placeholder="请输入手机号码">-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="from-item">-->
        <!--            <div class="item-title">验证码</div>-->
        <!--            <div class="input-line">-->
        <!--              <input type="text" placeholder="请输入验证码">-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="from-item">-->
        <!--            <div class="item-title">密码</div>-->
        <!--            <div class="input-line input-password">-->
        <!--              <input type="text" placeholder="请输入密码">-->
        <!--              <a href="#">忘记密码？</a>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </from>-->
        <button class="create-btn" @click="doLogin">登录</button>
        <div class="have-you">还没有小蓝账号？点击<a>免费注册</a></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/styles/regiLoginSame.css'
import {loginApi} from "@/apis/user.js";


import router from "@/router/index.js";
import {useUserStore} from "@/stores/userStore.js";

//表单对象
const form = ref({
  account: 'heima293',
  password: 'hm#qd@23!',
  agree: true
})
//规则数据对象
const rules = {
  account: [
    {required: true, message: '用户名不能为空', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '密码不能为空', trigger: 'blur'},
    {min: 6, max: 14, message: '密码长度要求6-14个字符', trigger: 'blur'}
  ],
  agree: [
    {
      validator(rule, value, callback) {
        //  自定义校检逻辑
        //  勾选就通过，不勾选不通过
        if (value) {
          callback()
        } else {
          callback(new Error('请勾选协议'))
        }
      }
    }
  ]
}
//form 实例统一校验
const userStore = useUserStore();
const formRef = ref(null)
const doLogin = () => {
  formRef.value.validate(async (valid) => {
    console.log(valid)
    if (valid) {
      const {account, password} = form.value;
      // const res = await loginApi({account, password})
      // console.log(res);
      await userStore.getUserInfo({account, password})
      //这里有点怪，数据请求后，没有进行任何判断，是如何知道是否登录成功的？
      console.log('???')
      ElMessage({type: 'success', message: '登录成功'})
      router.replace({path: '/home'})

    }
  })
}

</script>

<style scoped>
.login-logo1{
  width: 38px;
  height: 38px;
}
.container .content h1 {
  font-size: 24px;
  font-weight: 700;
}

.container .content .icon {
  margin-top: 24px;
  display: flex;
}

.container .content .icon .icon-item {
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

.container .content .icon .icon-item .iconfont {
  font-size: 24px;
  /* line-height: 44px; */
}

/* *** 表单 *** */
.register-form {
  margin-top: 8px;
}

.register-form form {
  font-size: 16px !important;
}

.register-form .from-item .item-title {
  font-size: 14px;
  font-weight: 500;
  margin: 16px 0 12px 0;
}

.register-form .from-item .input-line {
  display: flex;
}

.register-form .from-item .input-line div {
  display: flex;
  align-items: center;
}

.register-form .from-item .input-line div,
.register-form .from-item .input-line input,
.register-form .from-item .input-line button {
  padding: 10px 16px;
  border: 1px solid var(--color-gray);
  border-radius: 8px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  /* display: flex;
  align-items: center; */
}

.register-form .from-item .input-line > :first-child {
  margin-right: 12px;
}

.register-form .from-item .input-line div .iconfont {
  margin-left: 8px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 20px;
}

.register-form .from-item .input-line input {
  flex: 1;
}

.register-form .from-item .input-line button {
  background-color: #FAFCFE;
}

.content .way-phone .register-form .from-item .input-password {
  display: flex;
  flex-direction: column;
}

.content .way-phone .register-form .from-item .input-password :first-child {
  margin: 0 0 12px 0;
}

.content .way-phone .create-btn {
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--color-balck);
  padding: 12px 0;
  color: #fff;
  border-radius: 8px;
  margin-top: 36px;
}

.content .way-phone .have-you {
  margin-top: 12px;
  color: #778294;
  text-align: center;
}

.content .way-phone .have-you a {
  font-size: 14px;
  line-height: 20px;
  color: #119FE4;
}
</style>