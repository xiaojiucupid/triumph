<template>
  <div class="chart-container">
    <div ref="chartContainer" id="people_charts5"></div>
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
  juvenile: [],
  teenager: [],
  older: []
});

const fetchChartData = async (provinceValue) => {
  try {
    console.log("people_chart5请求的省份：", provinceValue);
    const response = await axios.get(`http://localhost:8080/people/chart5/${provinceValue}`);
    console.log("people_chart5返回的数据", response.data);
    if (
      Array.isArray(response.data.years) &&
      Array.isArray(response.data.juvenile) &&
      Array.isArray(response.data.teenager) &&
      Array.isArray(response.data.older)
    ) {
      chartData.value.year = response.data.years;
      chartData.value.juvenile = response.data.juvenile;
      chartData.value.teenager = response.data.teenager;
      chartData.value.older = response.data.older;
      updateChart();
    } else {
      console.error("people_chart5返回数据格式错误", response.data);
    }
  } catch (error) {
    console.error("people_chart5数据请求失败", error);
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
      text: "人口年龄构成比例",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold" }
    },
    tooltip: { trigger: "axis" },
    legend: { bottom: 0, data: ["0-14岁", "15-64岁", "65岁及以上"] },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.value.year.map(String),
      name: "年份"
    },
    yAxis: {
      type: "value",
      name: "人数"
    },
    series: [
      {
        name: "0-14岁",
        type: "bar",
        data: chartData.value.juvenile,
        itemStyle: { color: "#5470c6" }
      },
      {
        name: "15-64岁",
        type: "bar",
        data: chartData.value.teenager,
        itemStyle: { color: "#91cc75" }
      },
      {
        name: "65岁及以上",
        type: "bar",
        data: chartData.value.older,
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
#people_charts5 {
  width: 100%;
  height: 100%;
}
</style>
