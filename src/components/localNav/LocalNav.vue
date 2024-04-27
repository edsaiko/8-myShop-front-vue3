<!-- 面包屑 -->
<template>
  <div class="local-nav-list">
    <ul>
      <li><a href="#" class="nav-small">居家生活</a></li>
      <li><i>/</i><a href="#" class="nav-small">乳胶枕</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LocalNav"
}
</script>

<style scoped>
.local-nav-list{
  height: 68px;
  display: flex;
  align-items: center;
}
.local-nav-list i{
  margin: 0 8px 0 8px;
  color: var(--color-old-gray);
}
.local-nav-list li:not(:last-child) a{
  color: var(--color-old-gray);
}

</style>