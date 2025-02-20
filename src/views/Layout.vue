<script setup>
import HeaderColumn from '../components/HeaderColumn.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <el-container style="height: 100vh;">  <!-- 使用 100vh 使容器占据整个视口 -->
    <el-header style="height: 60px; padding: 0;"> <!-- 设置 header 的高度 -->
      <div class="header">
        <HeaderColumn />
      </div>
    </el-header>
    <el-main style="padding: 0px;">  <!-- 设置 main 区域的内边距 -->
      <RouterView />
    </el-main>
  </el-container>
</template>

<script>
export default {
  components: { HeaderColumn },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #1D1D1D;  /* 下划线 */
}

.el-container {
  display: flex;
  flex-direction: column;  /* 垂直布局 */
}

.el-header {
  height: 60px;  /* 确保 header 高度是固定的 */
  padding: 0;
}

.el-main {
  background-color: #f5f7fa;
  flex-grow: 1;  /* 使 main 区域填充剩余空间 */
}
</style>
