<template>
  <div class="chart-container">
    <div ref="chartContainer" id="people_charts4"></div>
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
  college: [],
  town: []
});

const fetchChartData = async (provinceValue) => {
  try {
    console.log("people_chart4请求的省份：", provinceValue);
    const response = await axios.get(`http://localhost:8080/people/chart4/${provinceValue}`);
    console.log("people_chart4返回的数据", response.data);
    if (
      Array.isArray(response.data.years) &&
      Array.isArray(response.data.total) &&
      Array.isArray(response.data.college) &&
      Array.isArray(response.data.town)
    ) {
      chartData.value.year = response.data.years;
      chartData.value.total = response.data.total;
      chartData.value.college = response.data.college;
      chartData.value.town = response.data.town;
      updateChart();
    } else {
      console.error("people_chart4返回数据格式错误", response.data);
    }
  } catch (error) {
    console.error("people_chart4数据请求失败", error);
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
      text: "居民人均可支配收入",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold" }
    },
    tooltip: { trigger: "axis" },
    legend: { bottom: 0, data: ["全体居民", "农村居民", "城镇居民"] },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.value.year.map(String),
      name: "年份"
    },
    yAxis: {
      type: "value",
      name: "收入（元）"
    },
    series: [
      {
        name: "全体居民",
        type: "bar",
        data: chartData.value.total,
        itemStyle: { color: "#5470c6" }
      },
      {
        name: "农村居民",
        type: "bar",
        data: chartData.value.college,
        itemStyle: { color: "#91cc75" }
      },
      {
        name: "城镇居民",
        type: "bar",
        data: chartData.value.town,
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
#people_charts4 {
  width: 100%;
  height: 100%;
}
</style>
