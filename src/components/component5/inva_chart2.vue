<template>
  <div class="chart-container">
    <div ref="chartContainer" id="inva_charts3"></div>
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
  qualification: []
});

const fetchChartData = async (prov) => {
  try {
    console.log("inva_chart3请求的省份：", prov);
    const response = await axios.get(`http://localhost:8080/tech/chart3/${prov}`);
    console.log("inva_chart3返回的数据", response.data);
    if (
      Array.isArray(response.data.years) &&
      Array.isArray(response.data.qualification)
    ) {
      chartData.value.year = response.data.years;
      chartData.value.qualification = response.data.qualification;
      updainvaart();
    } else {
      console.error("inva_chart3返回数据格式错误", response.data);
    }
  } catch (error) {
    console.error("inva_chart3数据请求失败", error);
  }
};

const updainvaart = async () => {
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
      text: "科技产品质量合格率",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold", color: "#333" }
    },
    tooltip: { trigger: "axis" },
    legend: { bottom: 0, data: ["质量合格率"] },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.value.year,
      name: "年份"
    },
    yAxis: {
      type: "value",
      name: "合格率(%)"
    },
    series: [
      {
        name: "质量合格率",
        type: "line",
        data: chartData.value.qualification,
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
#inva_charts3 {
  width: 100%;
  height: 100%;
}
</style>
