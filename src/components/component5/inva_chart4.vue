<template>
  <div class="chart-container">
    <div ref="chartContainer" id="inva_chart4"></div>
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
  total: [],
  invention: [],
  practicality: [],
  appearance: []
});

const fetchChartData = async (prov) => {
  try {
    console.log("inva_chart4请求的省份：", prov);
    const response = await axios.get(`http://localhost:8080/tech/chart2/${prov}`);
    console.log("inva_chart4返回的数据", response.data);
    if (
      Array.isArray(response.data.years) &&
      Array.isArray(response.data.total) &&
      Array.isArray(response.data.invention) &&
      Array.isArray(response.data.practicality) &&
      Array.isArray(response.data.appearance)
    ) {
      chartData.value.year = response.data.years;
      chartData.value.total = response.data.total;
      chartData.value.invention = response.data.invention;
      chartData.value.practicality = response.data.practicality;
      chartData.value.appearance = response.data.appearance;
      updateChart();
    } else {
      console.error("inva_chart4返回数据格式错误", response.data);
    }
  } catch (error) {
    console.error("inva_chart4数据请求失败", error);
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
      text: "国内专利申请及授权数",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold", color: "#333" }
    },
    tooltip: { trigger: "axis" },
    legend: { bottom: 0, data: ["总量", "发明", "实用新型", "外观设计"] },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.value.year,
      name: "年份"
    },
    yAxis: {
      type: "value",
      name: "项数"
    },
    series: [
      {
        name: "总量",
        type: "line",
        data: chartData.value.total,
        itemStyle: { color: "#5470c6" }
      },
      {
        name: "发明",
        type: "line",
        data: chartData.value.invention,
        itemStyle: { color: "#91cc75" }
      },
      {
        name: "实用新型",
        type: "line",
        data: chartData.value.practicality,
        itemStyle: { color: "#fac858" }
      },
      {
        name: "外观设计",
        type: "line",
        data: chartData.value.appearance,
        itemStyle: { color: "#ee6666" }
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
#inva_chart4 {
  width: 100%;
  height: 100%;
}
</style>
