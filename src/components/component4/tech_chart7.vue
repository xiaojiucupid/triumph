<template>
  <div id="tech_chart7" style="width: 100%; height: 100%"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';

onMounted(() => {
  // 获取 DOM 元素
  const chartDom = document.getElementById('tech_chart7');
  const myChart = echarts.init(chartDom); // 初始化图表实例

  // 设置图表的配置项
  const option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2012} ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012'
        }
      }
    ]
  };

  // 监听 `updateAxisPointer` 事件并更新饼图
  myChart.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: `{b}: {@[${dimension}]} ({d}%)`
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });

  // 设置图表的配置项
  myChart.setOption(option);
});
</script>

<style scoped>
#tech_chart7 {
  width: 100%;
  height: 100%; /* 你可以根据需要调整图表高度 */
}
</style>
