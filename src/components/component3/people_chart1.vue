<template>
  <div class="chart-container">
    <div ref="chartContainer" id="people_charts1"></div>
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
  software: [],
  tech: [],
  creat: [],
  education: []
});

const fetchChartData = async (provinceValue) => {
  try {
    console.log("people_chart1请求的省份：", provinceValue);
    const response = await axios.get(`http://localhost:8080/people/chart1/${provinceValue}`);
    console.log("people_chart1返回的数据", response.data);
    if (
      Array.isArray(response.data.years) &&
      Array.isArray(response.data.software) &&
      Array.isArray(response.data.tech) &&
      Array.isArray(response.data.creat) &&
      Array.isArray(response.data.education)
    ) {
      chartData.value.year = response.data.years;
      chartData.value.software = response.data.software;
      chartData.value.tech = response.data.tech;
      chartData.value.creat = response.data.creat;
      chartData.value.education = response.data.education;
      updateChart();
    } else {
      console.error("people_chart1返回数据格式错误，缺少必要字段", response.data);
    }
  } catch (error) {
    console.error("people_chart1数据请求失败", error);
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
  // 使用水平柱状图：x轴为工资（数值），y轴为年份
  const option = {
    title: {
      text: "按行业分城镇就业人员平均工资",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold", color: "#333" }
    },
    tooltip: { trigger: "axis" },
    legend: { top: "bottom", data: ["软件", "技术", "创意", "教育"] },
    grid: { left: "5%", right: "5%", bottom: "10%", containLabel: true },
    xAxis: {
      type: "value",
      name: "工资（元）"
    },
    yAxis: {
      type: "category",
      data: chartData.value.year.map(String),
      name: "年份"
    },
    series: [
      {
        name: "软件",
        type: "bar",
        data: chartData.value.software,
        itemStyle: { color: "#5470c6" }
      },
      {
        name: "技术",
        type: "bar",
        data: chartData.value.tech,
        itemStyle: { color: "#91cc75" }
      },
      {
        name: "创意",
        type: "bar",
        data: chartData.value.creat,
        itemStyle: { color: "#fac858" }
      },
      {
        name: "教育",
        type: "bar",
        data: chartData.value.education,
        itemStyle: { color: "#ee6666" }
      }
    ]
  };
  myChart.value.setOption(option);
};

// 监听全局事件更新省份
eventBus.on("provinceSelected", (newProvince) => {
  province.value = newProvince;
  fetchChartData(newProvince);
});

// 初始加载
onMounted(() => {
  nextTick(() => {
    fetchChartData(province.value);
  });
});
</script>

<style scoped>
#people_charts1 {
  width: 100%;
  height: 100%;
}
</style>
