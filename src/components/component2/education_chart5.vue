<template>
  <div class="chart-container">
    <div ref="chartContainer" id="education_charts5"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import * as echarts from "echarts";
import eventBus from "@/utils/eventBus";
import axios from "axios";

const province = ref("北京市");
const myChart = ref(null);
const chartContainer = ref(null);
const chartData = ref({
  major: [], // 修正拼写
  scope: [],
});

const fetchChartData = async (province) => {
  try {
    console.log("education_chart5请求的省份：", province);
    const response = await axios.get(
      `http://localhost:8080/education/chart5/${province}`
    );
    console.log("education_chart5返回的数据", response.data);

    if (
      Array.isArray(response.data.major) && // 修正拼写
      Array.isArray(response.data.scope)
    ) {
      chartData.value.major = response.data.major; // 修正拼写
      chartData.value.scope = response.data.scope;
      updateChart(); // 更新图表
    } else {
      console.error(
        "education_chart5返回数据格式错误，缺少必要字段",
        response.data
      );
    }
  } catch (error) {
    console.error("education_chart5数据请求失败", error);
  }
};

const updateChart = async () => {
  if (!chartData.value.major.length) return; // 修正 year 检查错误

  await nextTick(); // 确保 DOM 已更新

  if (!myChart.value) {
    if (!chartContainer.value) {
      console.error("chartContainer is null");
      return;
    }
    myChart.value = echarts.init(chartContainer.value); // 绑定到 ref
  }

  const option = {
    title: {
      text: "专业领域得分",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold", color: "#333" },
    },
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.value.major,
      axisTick: { alignWithLabel: true },
      axisLabel: {
        fontSize: 8, // 设置字体大小
        rotate: 10, // 让字体竖着显示（90度旋转）
        interval: 0, // 强制显示所有标签
      },
    },

    yAxis: {
      type: "value",
      name: "分数",
    },
    series: [
      {
        name: "得分",
        type: "bar",
        data: chartData.value.scope,
        itemStyle: { color: "#5470c6" },
      },
    ],
  };

  myChart.value.setOption(option);
};

// 监听 ChinaMap.vue 传递的省份点击事件
eventBus.on("provinceSelected", (newProvince) => {
  province.value = newProvince;
  fetchChartData(newProvince);
});

// 初始加载
onMounted(() => {
  nextTick(() => {
    fetchChartData(province.value);
  });
});
</script>

<style scoped>
/* 让图表填满父容器 */
#education_charts5 {
  width: 100%;
  height: 100%;
}
</style>
