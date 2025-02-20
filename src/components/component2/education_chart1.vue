<template>
  <div class="chart-container">
    <div id="education_charts1"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import * as echarts from "echarts";
import eventBus from "@/utils/eventBus"; // 引入事件总线

const province = ref("北京市"); // 选中的省份
const chartContainer = ref(null); // 绑定ECharts容器
const myChart = ref(null); // ECharts实例

// 存储图表数据
const chartData = ref({ year: [], undergrad: [], junior: [] });

const fetchChartData = async (province) => {
  try {
    console.log("education_chart1请求的省份：", province);
    const response = await axios.get(
      `http://localhost:8080/education/chart1/${province}`
    );

    console.log("education_chart1返回的数据：", response.data);

    // 确保返回的数据包含必要的字段
    if (
      response.data.years &&
      response.data.subStudents &&
      response.data.enrolledGrads
    ) {
      chartData.value.year = response.data.years;
      chartData.value.undergrad = response.data.subStudents.map(
        (item) => item.toFixed(2) // 保留两位小数
      );
      chartData.value.junior = response.data.enrolledGrads.map((item) =>
        item.toFixed(2)
      );
      updateChart();
    } else {
      console.error(
        "education_chart1返回数据格式错误，缺少必要字段",
        response.data
      );
    }
  } catch (error) {
    console.error("education_chart1数据请求失败", error);
  }
};

// 更新ECharts图表
const updateChart = () => {
  if (!chartData.value.year.length) return; // 没数据不更新

  const chartDom = document.getElementById("education_charts1");
  myChart.value = echarts.init(chartDom);

  const option = {
    title: {
      text: "普通本科 & 专科 在校生数据", // 设置标题文本
      left: "center", // 标题居中
      top: "10%", // 设置距离顶部的距离
      textStyle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#333",
      },
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["普通本科在校人数", "普通专科在校人数"],
      bottom:0,
    },
    grid: {
      left: "3%",
      right: "4%",
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
      name: "万人",
    },
    series: [
      {
        name: "普通本科在校人数",
        type: "line",
        stack: "总量",
        data: chartData.value.undergrad,
        itemStyle: { color: "#5470c6" }, // 设置折线颜色
      },
      {
        name: "普通专科在校人数",
        type: "line",
        stack: "总量",
        data: chartData.value.junior,
        itemStyle: { color: "#91cc75" }, // 设置折线颜色
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
/* 保留你的样式不变 */
#education_charts1 {
  width: 100%;
  height: 100%;
}
</style>
