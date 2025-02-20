<template>
  <div id="charts1" style="width: 100%; height: 100%"></div>
</template>

<script setup>
import { createChart } from "@/utils/echarts";
import { onMounted } from "vue";

onMounted(() => {
  const chartDom = document.getElementById("charts1");

  const option = {
    title: {
      text: "", // 设置标题
      left: "center", // 居中对齐
      textStyle: {
        color: "#000000", // 标题颜色
        fontSize: 20, // 标题字体大小
        fontWeight: "bold", // 标题加粗
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["教育指数"],
      textStyle: {
        color: "#000000", // 图例颜色
        fontSize: 8,
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      bottom: "1%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
      axisLine: {
        lineStyle: {
          color: "#ffffff", // X轴线颜色
        },
      },
      axisLabel: {
        color: "#000000", // X轴文字颜色
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#ffffff", // Y轴线颜色
        },
      },
      axisLabel: {
        color: "#000000", // Y轴文字颜色
      },
      splitLine: {
        lineStyle: {
          color: "#444444", // Y轴网格线颜色
          type: "dashed", // 设置为虚线
        },
      },
      min:60,
      max:80
    },
    series: [
      {
        name: "教育指数",
        type: "line",
        data: [68.8, 70,72, 73.8, 74, 72, 77],
        lineStyle: {
          color: "#ff0000", // 线条颜色（红色）
          width: 2, // 线条宽度
        },
      },
    ],
  };

  createChart(chartDom, option);
});
</script>

<style scoped>
/* 确保容器的大小适合图表 */
#charts1 {
  width: 100%;
  height: 100%;
}
</style>
