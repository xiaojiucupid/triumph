<template>
  <div class="chart-container">
    <div ref="chartContainer" id="people_charts7"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import * as echarts from "echarts";
import axios from "axios";
import eventBus from "@/utils/eventBus";

const province = ref("北京市");
const myChart = ref(null);
const chartContainer = ref(null);

// 定义用于存放后端返回数据的对象
const chartData = ref({});

// 请求后端接口获取人才指数各子指标数据
const fetchChartData = async (provinceValue) => {
  try {
    console.log("people_chart7请求的省份：", provinceValue);
    const response = await axios.get(`http://localhost:8080/people/chart7/${provinceValue}`);
    console.log("people_chart7返回的数据", response.data);
    chartData.value = response.data;
    updateChart();
  } catch (error) {
    console.error("people_chart7数据请求失败", error);
  }
};

const updateChart = async () => {
  // 判断返回数据中是否包含最终指数
  if (!chartData.value.finalTalentIndex) return;
  await nextTick(); // 确保DOM更新

  if (!myChart.value) {
    const chartDom = chartContainer.value;
    if (!chartDom) {
      console.error("chartContainer is null");
      return;
    }
    myChart.value = echarts.init(chartDom);
  }
  
  // 根据各项得分和权重计算每部分的加权得分（单位分值）
  const data = [
    { name: "地区分数", value: chartData.value.regionScore * 0.10 },
    { name: "就业分布得分", value: chartData.value.employmentDistributionScore * 0.133 },
    { name: "法人单位数得分", value: chartData.value.legalEntityScore * 0.167 },
    { name: "学历比例得分", value: chartData.value.academicProportionScore * 0.20 },
    { name: "年龄比例得分", value: chartData.value.ageProportionScore * 0.15 },
    { name: "人才核心得分", value: chartData.value.talentCoreScore * 0.25 }
  ];

  const option = {
    title: {
      text: "人才指数构成",
      left: "center",
      textStyle: { fontSize: 12, fontWeight: "bold", color: "#333" }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      bottom: 0,
      data: data.map(item => item.name)
    },
    series: [
      {
        name: "各指标加权得分",
        type: "pie",
        radius: "50%",
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  myChart.value.setOption(option);
};

// 监听全局事件，切换省份时更新数据
eventBus.on("provinceSelected", (newProvince) => {
  province.value = newProvince;
  fetchChartData(newProvince);
});

// 初始加载时请求当前省份数据
onMounted(() => {
  nextTick(() => {
    fetchChartData(province.value);
  });
});
</script>

<style scoped>
#people_charts7 {
  width: 100%;
  height: 100%;
}
</style>
