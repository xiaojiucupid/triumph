<template>
  <div class="chart-container">
    <div ref="chartContainer" id="tech_charts1"></div>
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
  turnover: []
});

const fetchChartData = async (prov) => {
  try {
    console.log("tech_chart1请求的省份：", prov);
    const response = await axios.get(`http://localhost:8080/tech/chart1/${prov}`);
    console.log("tech_chart1返回的数据", response.data);
    if (Array.isArray(response.data.years) && Array.isArray(response.data.turnover)) {
      chartData.value.year = response.data.years;
      chartData.value.turnover = response.data.turnover;
      updateChart();
    } else {
      console.error("tech_chart1返回数据格式错误", response.data);
    }
  } catch (error) {
    console.error("tech_chart1数据请求失败", error);
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
      text: "科技创新能力（技术市场成交额）",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold", color: "#333" }
    },
    tooltip: { trigger: "axis" },
    legend: { bottom: 0, data: ["成交额"] },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.value.year,
      name: "年份"
    },
    yAxis: {
      type: "value",
      name: "成交额（亿元）"
    },
    series: [
      {
        name: "成交额",
        type: "line",
        data: chartData.value.turnover,
        itemStyle: { color: "#5470c6" }
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
#tech_charts1 {
  width: 100%;
  height: 100%;
}
</style>
