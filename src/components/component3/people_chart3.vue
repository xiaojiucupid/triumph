<template>
  <div class="chart-container">
    <div ref="chartContainer" id="people_charts3"></div>
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
  postgraduate: [],
  undergrad: [],
  junior: []
});

const fetchChartData = async (provinceValue) => {
  try {
    console.log("people_chart3请求的省份：", provinceValue);
    const response = await axios.get(`http://localhost:8080/people/chart3/${provinceValue}`);
    console.log("people_chart3返回的数据", response.data);
    if (
      Array.isArray(response.data.years) &&
      Array.isArray(response.data.postgraduate) &&
      Array.isArray(response.data.undergrad) &&
      Array.isArray(response.data.junior)
    ) {
      chartData.value.year = response.data.years;
      chartData.value.postgraduate = response.data.postgraduate;
      chartData.value.undergrad = response.data.undergrad;
      chartData.value.junior = response.data.junior;
      updateChart();
    } else {
      console.error("people_chart3返回数据格式错误", response.data);
    }
  } catch (error) {
    console.error("people_chart3数据请求失败", error);
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
      text: "不同学历比例趋势",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold" }
    },
    tooltip: { trigger: "axis" },
    legend: { bottom: 0, data: ["研究生", "本科生", "专科生"] },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.value.year.map(String),
      name: "年份"
    },
    yAxis: {
      type: "value",
      name: "比例"
    },
    series: [
      {
        name: "研究生",
        type: "line",
        data: chartData.value.postgraduate,
        itemStyle: { color: "#5470c6" }
      },
      {
        name: "本科生",
        type: "line",
        data: chartData.value.undergrad,
        itemStyle: { color: "#91cc75" }
      },
      {
        name: "专科生",
        type: "line",
        data: chartData.value.junior,
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
#people_charts3 {
  width: 100%;
  height: 100%;
}
</style>
