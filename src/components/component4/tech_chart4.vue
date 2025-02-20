<template>
  <div class="chart-container">
    <div ref="chartContainer" id="tech_charts4"></div>
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
  enter: [],
  export: []
});

const fetchChartData = async (prov) => {
  try {
    console.log("tech_chart4请求的省份：", prov);
    const response = await axios.get(`http://localhost:8080/tech/chart4/${prov}`);
    console.log("tech_chart4返回的数据", response.data);
    if (
      Array.isArray(response.data.years) &&
      Array.isArray(response.data.enter) &&
      Array.isArray(response.data.export)
    ) {
      chartData.value.year = response.data.years;
      chartData.value.enter = response.data.enter;
      chartData.value.export = response.data.export;
      updateChart();
    } else {
      console.error("tech_chart4返回数据格式错误", response.data);
    }
  } catch (error) {
    console.error("tech_chart4数据请求失败", error);
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
      text: "外商投资企业货物进出口总额",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold", color: "#333" }
    },
    tooltip: { trigger: "axis" },
    legend: { bottom: 0, data: ["进口", "出口"] },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.value.year,
      name: "年份"
    },
    yAxis: {
      type: "value",
      name: "金额（千美元）"
    },
    series: [
      {
        name: "进口",
        type: "bar",
        data: chartData.value.enter,
        itemStyle: { color: "#5470c6" }
      },
      {
        name: "出口",
        type: "bar",
        data: chartData.value.export,
        itemStyle: { color: "#91cc75" }
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
#tech_charts4 {
  width: 100%;
  height: 100%;
}
</style>
