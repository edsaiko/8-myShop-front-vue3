<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

</script>

<template>
  <el-config-provider :locale="zhCn">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </el-config-provider>
</template>

<style>
/*#app{*/
/*  height: 100%;*/
/*}*/

</style>
