<template>
  <div class="chart-container">
    <div ref="chartContainer" id="people_charts6"></div>
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
  skill: null,
  altitude: null,
  communicate: null,
  creativity: null,
  adopt: null,
  self: null
});

const fetchChartData = async (provinceValue) => {
  try {
    console.log("people_chart6请求的省份：", provinceValue);
    const response = await axios.get(`http://localhost:8080/people/chart6/${provinceValue}`);
    console.log("people_chart6返回的数据", response.data);
    if (
      response.data.skill != null &&
      response.data.altitude != null &&
      response.data.communicate != null &&
      response.data.creativity != null &&
      response.data.adopt != null &&
      response.data.self != null
    ) {
      chartData.value.skill = response.data.skill;
      chartData.value.altitude = response.data.altitude;
      chartData.value.communicate = response.data.communicate;
      chartData.value.creativity = response.data.creativity;
      chartData.value.adopt = response.data.adopt;
      chartData.value.self = response.data.self;
      updateChart();
    } else {
      console.error("people_chart6返回数据格式错误", response.data);
    }
  } catch (error) {
    console.error("people_chart6数据请求失败", error);
  }
};

const updateChart = async () => {
  await nextTick();
  if (!myChart.value) {
    const chartDom = chartContainer.value;
    if (!chartDom) {
      console.error("chartContainer is null");
      return;
    }
    myChart.value = echarts.init(chartDom);
  }
  // 指标名称
  const indicators = ["技能能力", "工作态度", "沟通能力", "创新能力", "适应能力", "个人素质"];
  const values = [
    chartData.value.skill,
    chartData.value.altitude,
    chartData.value.communicate,
    chartData.value.creativity,
    chartData.value.adopt,
    chartData.value.self
  ];
  const option = {
    title: {
      text: "人才核心评判指标",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold" }
    },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: indicators,
      name: "指标"
    },
    yAxis: {
      type: "value",
      name: "得分"
    },
    series: [
      {
        name: "得分",
        type: "line",
        data: values,
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
#people_charts6 {
  width: 100%;
  height: 100%;
}
</style>
