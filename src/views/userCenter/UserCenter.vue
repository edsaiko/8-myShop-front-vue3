<!--用户页-->
<template>
  <div class="common-layout content user-contain">
    <el-container class="el-container">
      <common-aside class="common-aside"/>
      <el-container>
        <el-header>
          <common-header/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import CommonHeader from "../../components/CommonHeader/CommonHeader.vue";
import CommonAside from "../../components/commonAside/CommonAside.vue";

export default defineComponent({
  components: {
    CommonHeader, CommonAside
  },
});
</script>

<style scoped>
.user-contain{
  margin-top: 10px;
  min-height: 500px;
}
.el-container,.common-layout .el-container .common-aside{
  /*height: 100%;*/
  min-height: 500px;

}
.common-layout .el-container{
  height: 100%;
}
.common-layout .el-container .common-aside{
  background-color: gray;
}
</style>
