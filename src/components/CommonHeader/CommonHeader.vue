<!-- 用户页头部栏组件 -->
<template>
  <!-- 小bug，这里放el-header，布局会失效？ -->
<!--    <el-header>-->
  <div class="header">
    <div class="l-content">
      <el-button size="small" @click="handleCollapse">
        <el-icon :size="20">
          <Menu/>
        </el-icon>
      </el-button>
<!--      面包屑-->
<!--      <el-breadcrumb separator="/">-->
<!--        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
<!--        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>-->
<!--      </el-breadcrumb>-->
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link user">
<!--          <img :src=getImgSrc() alt=""/>-->
          <img :src="getImgSrc('logo')" alt=""/>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
<!--    </el-header>-->
</template>

<script>
import {computed,defineComponent} from "vue";
// import {mapMutations,useStore} from "vuex";
export default defineComponent({
  name: "CommonHeader.vue",
  // methods:{
  //   ...mapMutations('userCenter',[updateIsCollapse])
  // },
  setup() {
    // let store = useStore();
    /**
     * 这么写是因为vite限制。
     * 感觉略为麻烦，vue2清爽多了。
     * 这么返回图片地址的用意是什么？
     * 大概是因为，以前直接放图片文件相对地址，本机能用，但上线版本就访问不了了
     * 这么返回图片资源的url地址能通过端口访问，图片获取流程大概不同，
     * 这样感觉售后更好？
     */
    let getImgSrc = (user) => {
      //把第二个参数作为基准值和第一个参数合并
      return new URL(`../../assets/images/${user}.png`, import.meta.url).href;
    };
    let handleCollapse=()=>{
      // store.commit('userCenter/updateIsCollapse');
    }
    //计算属性
    // const current = computed(()=>{
    //   return store.state.currentMenu;
    // })
    return {
      getImgSrc,
      handleCollapse,
      // current,
    }
  }
})
</script>

<style scoped>
.r-content {
  flex-wrap: wrap;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.r-content .user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>