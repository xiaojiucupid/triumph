<template>
  <div class="chart-container">
    <div ref="chartContainer" id="education_charts6"></div>
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

const chartData = ref({});

const fetchChartData = async (province) => {
  try {
    console.log("education_chart6请求的省份：", province);
    const response = await axios.get(
      `http://localhost:8080/education/chart6/${province}`
    );
    console.log("education_chart6返回的数据", response.data);
    
    chartData.value = response.data;
    updateChart(); // 更新图表
  } catch (error) {
    console.error("education_chart6数据请求失败", error);
  }
};

const updateChart = async () => {
  if (!chartData.value.finalScore) return;

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
      text: "教育指数构成",
      left: "center",
      textStyle: { fontSize: 10, fontWeight: "bold", color: "#333" },
    },
    tooltip: { trigger: "item" },
    legend: { bottom: 0 },
    series: [
      {
        name: "教育指标占比",
        type: "pie",
        radius: "50%",
        data: [
          { name: "地区分数", value: chartData.value.regionScore*0.1 },
          { name: "教育投入分数", value: chartData.value.educationInputScore*0.267 },
          { name: "平均专业评分", value: chartData.value.averageProfessionalScore*0.133 },
          { name: "大专占比分数", value: chartData.value.juniorCollegeScore*0.20 },
          { name: "教职工分数", value: chartData.value.teacherScore*0.17 },
          { name: "本科生&专科生分数", value: chartData.value.undergradScore*0.13 },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
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
#education_charts6 {
  width: 100%;
  height: 100%;
}
</style>
