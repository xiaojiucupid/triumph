<template>
  <div class="chart-container">
    <div id="education_charts3"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import * as echarts from "echarts";
import eventBus from "@/utils/eventBus";
import axios from "axios";

const province = ref("北京市");
const myChart = ref(null);

const chartData = ref({
  year: [],
  education_expenditure: [],
  total_expenditure: [],
});

const fetchChartData = async (province) => {
  try {
    console.log("education_chart3请求的省份：", province);
    const response = await axios.get(
      `http://localhost:8080/education/chart3/${province}`
    );
    console.log("education_chart3返回的数据", response.data);

    if (
      Array.isArray(response.data.year) &&
      Array.isArray(response.data.education_expenditure) &&
      Array.isArray(response.data.total_expenditure)
    ) {
      chartData.value.year = response.data.year;
      chartData.value.education_expenditure = response.data.education_expenditure.map(
        (item) => item.toFixed(2)
      );
      chartData.value.total_expenditure = response.data.total_expenditure.map(
        (item) => item.toFixed(2)
      );
      
      updateChart(); // 只有数据准备好后才更新图表
    } else {
      console.error("education_chart3返回数据格式错误，缺少必要字段", response.data);
    }
  } catch (error) {
    console.error("education_chart3数据请求失败", error);
  }
};

// 更新ECharts图表
const updateChart = async () => {
  if (!chartData.value.year.length) return; // 没数据不更新

  await nextTick(); // 确保DOM已更新

  if (!myChart.value) {
    const chartDom = document.getElementById("education_charts3");
    if (!chartDom) {
      console.error("education_charts3 DOM 未找到");
      return;
    }
    myChart.value = echarts.init(chartDom);
  }

  const option = {
    title: {
      text: "地区教育支出 & 地区总支出",
      left: "center",
      top: "10%",
      textStyle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#333",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
    },
    legend: {
      data: ["地区教育支出", "地区总支出"],
      bottom: 0,
    },
    grid: {
      left: "5%",
      right: "5%",
      bottom: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: chartData.value.year,
    },
    yAxis: {
      type: "value",
      name: "亿元",
    },
    series: [
      {
        name: "地区教育支出",
        type: "line",
        smooth: true, // 使折线平滑
        data: chartData.value.education_expenditure,
        itemStyle: { color: "#5470c6" },
      },
      {
        name: "地区总支出",
        type: "line",
        smooth: true,
        data: chartData.value.total_expenditure,
        itemStyle: { color: "#91cc75" },
      },
    ],
  };

  myChart.value.setOption(option);
};

// 监听 ChinaMap.vue 传递的省份点击事件
eventBus.on("provinceSelected", (newProvince) => {
  province.value = newProvince;
  fetchChartData(newProvince);
});

// 初始加载
onMounted(() => {
  fetchChartData(province.value);
});
</script>

<style scoped>
/* 确保容器的大小适合图表 */
#education_charts3 {
  width: 100%;
  height: 100%;
}
</style>
