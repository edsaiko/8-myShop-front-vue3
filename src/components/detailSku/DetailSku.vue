<template>
  <div class="right-attribute">
    <div class="tr" v-for="item in goods.specs" :key="item.id">
      <span>{{ item.name }}</span>
      <div class="td">
        <template v-for="val in item.values" :key="val.name">
          <img :class="{active:val.selected,disabled:val.disabled}"
               @click="clickSpecs(item,val)"
               v-if="val.picture"
               :src="val.picture" alt="">
          <span class="box detail-box" :class="{active:val.selected,disabled:val.disabled}"
                @click="clickSpecs(item,val)" v-else>
            {{ val.name }}
          </span>
        </template>
<!--        <img class="active" src="../../assets/images/cart/cup2.png" alt="">-->
      </div>
    </div>
<!--    <div class="tr">-->
<!--      <span>尺码</span>-->
<!--      <div class="td">-->
<!--        <div class="box detail-box">36</div>-->
<!--        <div class="box detail-box">36</div>-->
<!--        <div class="box detail-box">36</div>-->
<!--        <div class="box detail-box active">36</div>-->
<!--        <div class="box detail-box">36</div>-->
<!--        <div class="box detail-box">36</div>-->
<!--        <div class="box detail-box">36</div>-->
<!--        <div class="box detail-box">36</div>-->
<!--        <div class="box detail-box">36</div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="tr">-->
<!--      <span>数量</span>-->
<!--      <div class="td">-->
<!--        <div class="box num-box">-->
<!--          <i class="detail-box-add">-</i>-->
<!--          <div>1</div>-->
<!--          <i class="detail-box-add">+</i>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import { watchEffect } from 'vue'
import getPowerSet from './power-set'
const spliter = '★'
// 根据skus数据得到路径字典对象
const getPathMap = (skus) => {
  const pathMap = {}
  if (skus && skus.length > 0) {
    skus.forEach(sku => {
      // 1. 过滤出有库存有效的sku
      if (sku.inventory) {
        // 2. 得到sku属性值数组
        const specs = sku.specs.map(spec => spec.valueName)
        // 3. 得到sku属性值数组的子集
        const powerSet = getPowerSet(specs)
        // 4. 设置给路径字典对象
        powerSet.forEach(set => {
          const key = set.join(spliter)
          // 如果没有就先初始化一个空数组
          if (!pathMap[key]) {
            pathMap[key] = []
          }
          pathMap[key].push(sku.id)
        })
      }
    })
  }
  return pathMap
}

// 初始化禁用状态
function initDisabledStatus (specs, pathMap) {
  if (specs && specs.length > 0) {
    specs.forEach(spec => {
      spec.values.forEach(val => {
        // 设置禁用状态
        val.disabled = !pathMap[val.name]
      })
    })
  }
}

// 得到当前选中规格集合
const getSelectedArr = (specs) => {
  const selectedArr = []
  specs.forEach((spec, index) => {
    const selectedVal = spec.values.find(val => val.selected)
    if (selectedVal) {
      selectedArr[index] = selectedVal.name
    } else {
      selectedArr[index] = undefined
    }
  })
  return selectedArr
}

// 更新按钮的禁用状态
const updateDisabledStatus = (specs, pathMap) => {
  // 遍历每一种规格
  specs.forEach((item, i) => {
    // 拿到当前选择的项目
    const selectedArr = getSelectedArr(specs)
    // 遍历每一个按钮
    item.values.forEach(val => {
      if (!val.selected) {
        selectedArr[i] = val.name
        // 去掉undefined之后组合成key
        const key = selectedArr.filter(value => value).join(spliter)
        val.disabled = !pathMap[key]
      }
    })
  })
}


export default {
  name: 'Sku',
  props: {
    // specs:所有的规格信息  skus:所有的sku组合
    goods: {
      type: Object,
      default: () => ({ specs: [], skus: [] })
    }
  },
  emits: ['change'],
  setup (props, { emit }) {
    console.log('goods',props.goods)
    let pathMap = {}
    watchEffect(() => {
      // 得到所有字典集合
      pathMap = getPathMap(props.goods.skus)
      // 组件初始化的时候更新禁用状态
      initDisabledStatus(props.goods.specs, pathMap)
    })

    const clickSpecs = (item, val) => {
      if (val.disabled) return false
      // 选中与取消选中逻辑
      if (val.selected) {
        val.selected = false
      } else {
        item.values.forEach(bv => { bv.selected = false })
        val.selected = true
      }
      // 点击之后再次更新选中状态
      updateDisabledStatus(props.goods.specs, pathMap)
      // 把选择的sku信息传出去给父组件
      // 触发change事件将sku数据传递出去
      const selectedArr = getSelectedArr(props.goods.specs).filter(value => value)
      // 如果选中得规格数量和传入得规格总数相等则传出完整信息(都选择了)
      // 否则传出空对象
      if (selectedArr.length === props.goods.specs.length) {
        // 从路径字典中得到skuId
        const skuId = pathMap[selectedArr.join(spliter)][0]
        const sku = props.goods.skus.find(sku => sku.id === skuId)
        // 传递数据给父组件
        emit('change', {
          skuId: sku.id,
          price: sku.price,
          oldPrice: sku.oldPrice,
          inventory: sku.inventory,
          specsText: sku.specs.reduce((p, n) => `${p} ${n.name}：${n.valueName}`, '').trim()
        })
      } else {
        emit('change', {})
      }
    }
    return { clickSpecs }
  }
}
</script>

<style scoped>
/* *** 颜色 *** */
.right-attribute .tr {
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-left: 16px;
}

.right-attribute .tr span,
.right-buy-detail .buy-line span {
  width: 72px;
  color: var(--color-detail-gray);
}

.right-attribute .tr .td {
  display: flex;
}

.right-attribute .tr .td img {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #E6E8EC;
  background-color: #F9FAFE;
  margin-right: 8px;
}

.right-attribute .tr .td .box {
  border: 1px solid #E6E8EC;
  border-radius: 4px;
  height: 32px;
  line-height: 32px;
}

.right-attribute .tr .td .detail-box {
  margin-right: 6px;
  padding: 0 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.right-attribute .tr .td .active {
  border: 1px solid #119FE4;
}

.right-attribute .tr .td .box div {
  width: 48px;
  line-height: 32px;
  display: inline-block;
  text-align: center;
  border-left: 1px solid #E6E8EC;
  border-right: 1px solid #E6E8EC;
}

.right-attribute .tr .td .box .detail-box-add {
  margin: 6px;
  width: 24px;
  /* align-items: center;跟text的区别？ */
  text-align: center;
}

.right-attribute .tr .td .num-box {
  display: flex;
  align-items: center;
}
</style>