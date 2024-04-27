<!-- 用户页侧边栏 -->

<template>
<!--  <el-aside :width="$store.state.userCenter.isCollapse? '180px' : '64px'" class="asideContain">-->
  <el-aside :width="1? '180px' : '64px'" class="asideContain">
    <el-menu
        height="1000px"
        class="el-menu-vertical-demo"
        :collapse="1"
        :collapse-transition="false"
    >
<!--      :collapse="!$store.state.userCenter.isCollapse"-->

      <!--      <h3 v-show="$store.state.userCenter.isCollapse">后台管理</h3>-->
<!--      <h3 v-show="!$store.state.userCenter.isCollapse">后台</h3>-->
      <h3 v-show="1">后台管理</h3>
      <h3 v-show="1">后台</h3>
      <el-menu-item @click="clickMenu(item)"
          :index="item.path" v-for="item in noChildren()" :key="item.path">
        <!--        <el-icon><icon-menu /></el-icon>-->
        <!--        vue3要用以下方法实现动态引入icon-->
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu :index="item.path" v-for="item in hasChildren()" :key="item.path">
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </template>
        <!--        <el-menu-item-group title="Group One">-->
        <el-menu-item-group>
          <el-menu-item @click="clickMenu(subItem)"
              :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex">
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ item.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

import {useRouter} from "vue-router"
// import {mapMutations, useStore} from "vuex";

export default {
  name: "CommonAside",
  components: {Document, IconMenu, Location, Setting},
  methods:{
    // ...mapMutations('userCenter',['selectMenu'])
  },
  setup() {
    // const store=useStore()
    let list = [
      {
        path: "/user-center/my",
        name: "my",
        label: "我的",
        icon: "user",
        // url: "UserManage/UserManage"
      },
      {
        path: "/user-center/save",
        name: "save",
        label: "安全",
        icon: "user",
      },
      {
        path: "/user-center/save",
        label: "其它",
        icon: "location",
        children: [
          {
            path: "/page1",
            name: "page1",
            label: "页面1",
            icon: "setting",
            url: "Other/PageOne"
          },
          {
            path: "/page2",
            name: "page2",
            label: "页面2",
            icon: "setting",
            url: "Other/PageTwo"
          },
        ]
      }
    ];
    const router = useRouter();
    const noChildren = () => {
      // return list.filter((item) => !item.children);
    }
    const hasChildren = () => {
      // return list.filter((item) => item.children);
    }

    const clickMenu = (item) =>{
      router.push({
        name:item.name,
      });
      // store.commit('userCenter/selectMenu',item)
    }

    // const handleOpen = (key: string, keyPath: string[]) => {
    //   console.log(key, keyPath)
    // }
    // const handleClose = (key: string, keyPath: string[]) => {
    //   console.log(key, keyPath)
    // }
    return {
      // handleOpen, handleClose,
      noChildren, hasChildren,clickMenu
    }
  }
}
</script>

<style scoped>
/*.asideContain ul{*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*}*/
/*.asideContain ul li{*/
/*  height: 30px;*/
/*}*/

.icons {
  width: 18px;
  height: 18px;
}
.el-menu h3{
  line-height: 48px;
  /*color: #fff;*/
  text-align: center;
}
</style>