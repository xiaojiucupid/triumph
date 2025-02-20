<template>
  <div class="chart-container">
    <div ref="chartContainer" id="people_charts2"></div>
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
  first: [],
  second: [],
  third: []
});

const fetchChartData = async (provinceValue) => {
  try {
    console.log("people_chart2请求的省份：", provinceValue);
    const response = await axios.get(`http://localhost:8080/people/chart2/${provinceValue}`);
    console.log("people_chart2返回的数据", response.data);
    if (
      Array.isArray(response.data.years) &&
      Array.isArray(response.data.first) &&
      Array.isArray(response.data.second) &&
      Array.isArray(response.data.third)
    ) {
      chartData.value.year = response.data.years;
      chartData.value.first = response.data.first;
      chartData.value.second = response.data.second;
      chartData.value.third = response.data.third;
      updateChart();
    } else {
      console.error("people_chart2返回数据格式错误", response.data);
    }
  } catch (error) {
    console.error("people_chart2数据请求失败", error);
  }
};

const updateChart = async () => {
  if (!chartData.value.year.length) return;
  await nextTick();
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
      text: "法人单位数趋势",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold" }
    },
    tooltip: { trigger: "axis" },
    legend: { bottom: 0, data: ["第一产业", "第二产业", "第三产业"] },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.value.year.map(String),
      name: "年份"
    },
    yAxis: {
      type: "value",
      name: "法人单位数（人）"
    },
    series: [
      {
        name: "第一产业",
        type: "line",
        data: chartData.value.first,
        itemStyle: { color: "#5470c6" }
      },
      {
        name: "第二产业",
        type: "line",
        data: chartData.value.second,
        itemStyle: { color: "#91cc75" }
      },
      {
        name: "第三产业",
        type: "line",
        data: chartData.value.third,
        itemStyle: { color: "#fac858" }
      }
    ]
  };
  myChart.value.setOption(option);
};

eventBus.on("provinceSelected", (newProvince) => {
  province.value = newProvince;
  fetchChartData(newProvince);
});

onMounted(() => {
  nextTick(() => {
    fetchChartData(province.value);
  });
});
</script>

<style scoped>
#people_charts2 {
  width: 100%;
  height: 100%;
}
</style>
