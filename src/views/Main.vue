<template>
  <el-table
      ref="tableData"
      :data="tableData"
      style="width: 100%"
  >
    <el-table-column property="num" label="数量">
      <template #default="{row,$index}">
<!--        这里的v-model会占用对象的对应属性，导致再次使用该数据时就会报错。浪费我5小时-->
        <el-input-number v-model="row.num" :min="1" :max="10" @change="handleChange(row.id,row.num)"/>
      </template>
    </el-table-column>
  </el-table>

<!--  <h2>name{{tableData}}</h2>-->
<!--&lt;!&ndash;  <h2>testComputed{{testComputed}}</h2>&ndash;&gt;-->
<!--  <el-button @click="changeInfo">+</el-button>-->
<!--  <h2>{{ name }}</h2>-->
<!--  <button @click="changeInfo">-</button>-->
</template>

<script>
import {ref,computed,reactive} from 'vue'
import {ElTable} from 'element-plus'

export default {
  name: "Main",
  setup() {
    const handleChange = (id,num) => {
      // console.log(tableData)
      // console.log(tableData.map((item)=> {
      //   if (item.id === id) {
      //     // console.log('num=', item.num)
      //   }
      // }))
        // return item.id===id}))
    }
    //用test，在函数里面识别不出了是个impl？
    let name=reactive({
      age:1,
      num:3
    })
    console.log('name=',name.value)
    function changeInfo(){
      console.log('before',name.age)
      tableData[1].num=2
      console.log(name)
    }

    // let testComputed=computed(()=>{
    //   // let temp=tableData[1].num+tableData[2].num+tableData[0].num
    //
    //   // return 1
    //   return tableData[1].num+tableData[2].num+tableData[0].num
    // })

    let tableData= reactive([
      {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        name: '鸟一只',
        price: 998,
        category: '颜色分类：棕色',
        num: 9,
        isChoose: false,
        totalPrice: '998'
      },
      {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        name: '鸟一只',
        price: 998,
        category: '颜色分类：棕色',
        num: 1,
        isChoose: false,
        totalPrice: '998'
      },
      {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        name: '鸟一只',
        price: 998,
        category: '颜色分类：棕色',
        num: 1,
        isChoose: false,
        totalPrice: '998'
      },
    ])
    // const tableData= [
    //   {
    //     id:1,
    //     image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    //     name: '鸟一只',
    //     price: 998,
    //     category: '颜色分类：棕色',
    //     num: 9,
    //     isChoose: false,
    //     totalPrice: '998'
    //   },
    //   {
    //     id:2,
    //     image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    //     name: '鸟一只',
    //     price: 998,
    //     category: '颜色分类：棕色',
    //     num: 1,
    //     isChoose: false,
    //     totalPrice: '998'
    //   },
    //   {
    //     id:3,
    //     image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    //     name: '鸟一只',
    //     price: 998,
    //     category: '颜色分类：棕色',
    //     num: 1,
    //     isChoose: false,
    //     totalPrice: '998'
    //   },
    // ]

      return {
      tableData, handleChange
        // ,testComputed
        ,changeInfo,name
    }
  }
}
</script>

<style scoped>

</style>
