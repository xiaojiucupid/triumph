<template>
  <div class="chart-container">
    <div ref="chartContainer" id="education_charts4"></div>
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
  year: [],
  primary_school: [],
  middle_school: [],
  high_school: [],
  university: [],
});

const fetchChartData = async (province) => {
  try {
    console.log("education_chart4请求的省份：", province);
    const response = await axios.get(
      `http://localhost:8080/education/chart4/${province}`
    );
    console.log("education_chart4返回的数据", response.data);

    if (
      Array.isArray(response.data.year) &&
      Array.isArray(response.data.primary_school) &&
      Array.isArray(response.data.middle_school) &&
      Array.isArray(response.data.high_school) &&
      Array.isArray(response.data.university)
    ) {
      chartData.value.year = response.data.year;
      chartData.value.primary_school = response.data.primary_school;
      chartData.value.middle_school = response.data.middle_school;
      chartData.value.high_school = response.data.high_school;
      chartData.value.university = response.data.university;

      updateChart(); // 更新图表
    } else {
      console.error("education_chart4返回数据格式错误，缺少必要字段", response.data);
    }
  } catch (error) {
    console.error("education_chart4数据请求失败", error);
  }
};

const updateChart = async () => {
  if (!chartData.value.year.length) return;

  await nextTick(); // 确保DOM已更新

  if (!myChart.value) {
    const chartDom = chartContainer.value;
    if (!chartDom) {
      console.error("chartContainer is null");
      return;
    }
    myChart.value = echarts.init(chartDom);
  }

  const option = {
    title: {
      text: "不同教育阶段人数变化",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold", color: "#333" },
    },
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    legend: { bottom: 0, data: ["小学", "初中", "高中", "大专+"] },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.value.year, // 年份作为 X 轴
      axisTick: { alignWithLabel: true },
    },
    yAxis: {
      type: "value",
      name: "人数",
    },
    series: [
      {
        name: "小学",
        type: "bar",
        data: chartData.value.primary_school,
        itemStyle: { color: "#5470c6" },
      },
      {
        name: "初中",
        type: "bar",
        data: chartData.value.middle_school,
        itemStyle: { color: "#91cc75" },
      },
      {
        name: "高中",
        type: "bar",
        data: chartData.value.high_school,
        itemStyle: { color: "#fac858" },
      },
      {
        name: "大专+",
        type: "bar",
        data: chartData.value.university,
        itemStyle: { color: "#ee6666" },
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
/* 确保容器有合适的尺寸 */
#education_charts4 {
  width: 100%;
  height: 100%;
}
</style>
