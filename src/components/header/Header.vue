<!--头部导航-->
<template>
  <div class="header">
    <nav>
      <ul>
        <li>USERNAME <i class="iconfont">&#xe661;</i></li>
        <li><a href="">甄选</a></li>
        <template v-if="userStore.userInfo.token">
          <li><a href="">消息</a></li>
          <li><a href="">订单</a></li>
          <!--        <li>企业采购 <i class="iconfont">&#xe661;</i></li>-->
          <el-dropdown>
            <li class="user-name" @click="$router.push('/member')">
              <img src="@/assets/images/code.png">
              <span>{{ userStore.userInfo.account }}</span>
            </li>
            <!--                <el-dropdown-item>个人中心</el-dropdown-item>-->
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <el-popconfirm title="确认退出吗？" @confirm="confirm"
                  confirm-button-text="确认"
                  cancel-button-text="取消">
                    <template #reference>
                      <span>退出登录</span>
                    </template>
                  </el-popconfirm>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
        <template v-else>
          <li><span @click="router.push({path:'/login'})">请登录</span></li>
        </template>
        <li><a href="">APP</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/userStore.js";
import {useCartStore} from "@/stores/cartStore.js";

const router = useRouter()
const userStore = useUserStore()
const cartStore=useCartStore()

console.log('header.vue:router',router)

//退出逻辑
const confirm=()=>{
  userStore.clearUserInfo()
  cartStore.clearCart()
  // router.push('/login')
}

</script>

<style scoped>
.user-name {
  display: flex;
  align-items: center;
}

.user-name img {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 5px;
}

.header {
  width: 1920px;

  /*width: 100%;*/
  height: 48px;
  background-color: var(--color-balck);
  position: sticky;
  top: 0;
  z-index: 1200;
}

.header nav {
  width: var(--width-middle);
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: end;
}

.header nav ul {
  display: flex;
  line-height: 100%;
  height: 100%;
  color: var(--color-white);
}

.header li {
  /* height: 100%;
  line-height: 100%; */
  height: 48px;
  line-height: 48px;
  padding: 0 10px 0 10px;
  cursor: pointer;
  position: relative;
}

.header li a {
  /* height: 100%; */
  line-height: inherit;
}

.header li:not(:first-child)::after {
  content: '';
  height: 1em;
  line-height: inherit;
  width: 1px;
  /* 不准用bgc？？？ */
  border-left: 1px solid #D8DADF;
  position: absolute;
  /* 底下有隐藏栏的，把两者放一个div，共享宽度，且可top:100% */
  top: 20px;
  left: 0;
}

</style>
