<template>
  <div>
    <!-- 地图组件 -->
    <div ref="mapChart" style="width: 600px; height: 400px;"></div>
    <!-- 柱状图组件 -->
    <div ref="barChart" style="width: 600px; height: 400px; margin-top: 20px;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'
import chinaJSON from "@/components/map/china.json"; 

// 注册中国地图，确保变量名称一致
echarts.registerMap('china1', chinaJSON)

const mapChart = ref(null)
const barChart = ref(null)

const url=""
let mapChartInstance = null
let barChartInstance = null

// 初始化中国地图图表
const initMapChart = () => {
  mapChartInstance = echarts.init(mapChart.value)
  const option = {
    title: {
      text: '中国地图',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '中国',
        type: 'map',
        map: 'china1', // 使用注册后的地图名称
        roam: false,
        label: {
          show: true
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: [] // 可根据需要配置数据
      }
    ]
  }
  mapChartInstance.setOption(option)

  // 点击地图时触发事件
  mapChartInstance.on('click', function (params) {
    if (params.name) {
      fetchProvinceData(params.name)
    }
  })
}

// 初始化柱状图图表
const initBarChart = () => {
  barChartInstance = echarts.init(barChart.value)
  const option = {
    title: {
      text: '省份数据'
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: [] // 后续更新数据
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      type: 'bar',
      data: [] // 后续更新数据
    }]
  }
  barChartInstance.setOption(option)
}

// 根据选中省份从后端获取数据
const fetchProvinceData = async (province) => {
  try {
    const response = await axios.get('http://localhost:8080/api/province-data', {
      params: { province }
    })
    const data = response.data
    // 假设返回的数据为数组，每项包含 id 和 value
    const xData = data.map(item => `ID ${item.id}`)
    const yData = data.map(item => item.value)
    // 更新柱状图数据
    barChartInstance.setOption({
      xAxis: {
        data: xData
      },
      series: [{
        data: yData
      }]
    })
  } catch (error) {
    console.error('获取数据失败：', error)
  }
}

onMounted(() => {
  initMapChart()
  initBarChart()
})
</script>

<style scoped>
/* 可根据需要添加样式 */
</style>
