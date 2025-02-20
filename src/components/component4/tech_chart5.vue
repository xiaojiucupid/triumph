<template>
  <div class="chart-container">
    <div ref="chartContainer" id="tech_charts5"></div>
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
  invent: [],
  useInvent: []
});

const fetchChartData = async (prov) => {
  try {
    console.log("tech_chart5请求的省份：", prov);
    const response = await axios.get(`http://localhost:8080/tech/chart5/${prov}`);
    console.log("tech_chart5返回的数据", response.data);
    if (
      Array.isArray(response.data.years) &&
      Array.isArray(response.data.total) &&
      Array.isArray(response.data.invent) &&
      Array.isArray(response.data.useInvent)
    ) {
      chartData.value.year = response.data.years;
      chartData.value.total = response.data.total;
      chartData.value.invent = response.data.invent;
      chartData.value.useInvent = response.data.useInvent;
      updateChart();
    } else {
      console.error("tech_chart5返回数据格式错误", response.data);
    }
  } catch (error) {
    console.error("tech_chart5数据请求失败", error);
  }
};

const updateChart = async () => {
  if (!chartData.value.year.length) return;
  // 计算每年的比例，若总数为0则比例为0
  const inventRatio = chartData.value.total.map((total, i) => {
    if (total === 0) return 0;
    return parseFloat(((chartData.value.invent[i] / total) * 100).toFixed(2));
  });
  const useInventRatio = chartData.value.total.map((total, i) => {
    if (total === 0) return 0;
    return parseFloat(((chartData.value.useInvent[i] / total) * 100).toFixed(2));
  });

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
      text: "规模以上工业企业专利情况",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold", color: "#333" }
    },
    tooltip: { trigger: "axis" },
    legend: { bottom: 0, data: ["发明专利占比", "有效发明专利占比"] },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.value.year,
      name: "年份"
    },
    yAxis: {
      type: "value",
      name: "比例(%)"
    },
    series: [
      {
        name: "发明专利占比",
        type: "bar",
        data: inventRatio,
        itemStyle: { color: "#5470c6" }
      },
      {
        name: "有效发明专利占比",
        type: "bar",
        data: useInventRatio,
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
#tech_charts5 {
  width: 100%;
  height: 100%;
}
</style>
