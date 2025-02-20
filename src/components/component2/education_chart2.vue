<template>
  <div class="chart-container">
    <div id="education_charts2"></div>
  </div>
</template>

<script setup>
// 引入复用的 echarts 配置方法
import { createChart } from "@/utils/echarts";
import { onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
import eventBus from "@/utils/eventBus"; // 引入事件总线
import axios from "axios";

const province = ref("北京市");
const myChart = ref(null);
const chartContainer = ref(null);

const chartData = ref({ year: [], high_teacher: [] });

const fetchChartData = async (province) => {
  try {
    console.log("education_chart2请求的省份：", province);
    const response = await axios.get(
      `http://localhost:8080/education/chart2/${province}`
    );
    console.log("education_chart2返回的数据", response.data);
    if (response.data.years && response.data.high_teacher) {
      chartData.value.year = response.data.years;
      chartData.value.high_teacher = response.data.high_teacher.map(
        (item) => item.toFixed(2) // 保留两位小数
      );
      updateChart();
    } else {
      console.error("education_chart2返回数据格式错误，缺少必要字段", response.data);
    }
  } catch (error) {
    console.error("education_chart2数据请求失败", error);
  }
};
// 更新ECharts图表
const updateChart = () => {
  if (!chartData.value.year.length) return; // 没数据不更新

  const chartDom = document.getElementById("education_charts2");
  myChart.value = echarts.init(chartDom);

  const option = {
    title: {
      text: "高等学校教职工在职人数", // 设置标题文本
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
    },
    legend: {
      data: ["高等学校教职工在职人数"],
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
        name: "高等学校教职工在职人数",
        type: "line",
        stack: "总量",
        data: chartData.value.high_teacher,
        itemStyle: { color: "#5470c6" }, // 设置折线颜色
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
#education_charts2 {
  width: 100%; /* 宽度自适应 */
  height: 100%; /* 高度自适应 */
}
</style>
