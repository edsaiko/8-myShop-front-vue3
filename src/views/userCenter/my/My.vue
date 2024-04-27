<template>
my
</template>

<script>
import {defineComponent,onMounted,ref,getCurrentInstance} from "vue"
import axios from "axios"
export  default defineComponent({
  setup(){
    //vue3的全局变量不能直接用this
    const {proxy} = getCurrentInstance();
    let tableData=ref([]);
    const getTableList =async()=>{
      // await axios.get("http://127.0.0.1:4523/m1/4027410-0-default/mock/home/getData").then((res)=>{
      //   console.log(res);
      //   if(res.data.code===200){
      //     tableData.value=res.data.data;
      //     console.log(tableData.value)
      //   }
      // });
      let res = await proxy.$api.getTableData();
      console.log(res);
    };
    onMounted(()=>{
      getTableList();
    })
    return{

    }
  }
})
</script>

<style scoped>

</style>
