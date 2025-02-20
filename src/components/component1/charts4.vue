<template>
  <div id="charts4" style="width: 100%; height: 100%"></div>
</template>

<script setup>
// 引入复用的 echarts 配置方法
import { createChart } from "@/utils/echarts";
import { onMounted } from "vue";

onMounted(() => {
  const chartDom = document.getElementById("charts4"); // 获取图表容器的 DOM 元素

  const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: '新质生产力指数',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '70%'],
      // adjust the start and end angle
      startAngle: 180,
      endAngle: 360,
      data: [
        { value: 1048, name: '教育指数' },
        { value: 735, name: '人才指数' },
        { value: 580, name: '科技指数' },
        { value: 484, name: '创新指数' },
      ]
    }
  ]
};

  createChart(chartDom, option); // 使用复用的 createChart 函数
});
</script>

<style scoped>
/* 确保容器的大小适合图表 */
#main {
  width: 100%; /* 宽度自适应 */
  height: 100%; /* 高度自适应 */
}
</style>
