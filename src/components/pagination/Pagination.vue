<template>
<!--  分页器-->
  <div class="pagination">
    <button><i class="iconfont">&#xe6d7;</i></button>
    <button class="active">1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <i>. . .</i>
    <button>99</button>
    <button>100</button>
    <button><i class="iconfont">&#xe621;</i></button>
    <button><i class="iconfont">&#xe6d6;</i></button>
  </div>
</template>

<script>
export default {
  name: "Pagination"
}
</script>

<style scoped>

.pagination{
  margin-top: 48px;
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* !!!!，前后不继承的？ */
.pagination button,.pagination i{
  width: 36px;
  height: 36px;
  margin: 0 6px;
  font-size: 12px;
  font-weight: 500;
  line-height: 36px;
  text-align: center;
}
.pagination button{
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination button.active{
  background-color: var(--color-balck);
  color: #fff;
}
</style>