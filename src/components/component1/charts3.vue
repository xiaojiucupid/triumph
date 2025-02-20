<template>
  <div class="map" ref="map"></div>
</template>

<script>
import { ref, onMounted } from "vue"; // 导入Vue中的ref和onMounted函数
import * as echarts from "echarts"; // 导入ECharts库
import chinaJSON from "@/components/map/china.json"; // 引入中国地图的GeoJSON数据
import axios from "axios"; // 引入axios用于发送HTTP请求
import eventBus from "@/utils/eventBus"; // 引入事件总线

export default {
  name: "ChinaMap", // 组件名称
  setup() {
    const map = ref(null); // 使用ref创建地图的引用

    onMounted(() => {
      const myMap = echarts.init(map.value); // 创建ECharts实例
      echarts.registerMap("china", chinaJSON); // 注册中国地图数据

      let zoomLevel = 1.9; // 初始缩放级别

      // 设置ECharts的地图配置
      const option = {
        geo: {
          map: "china",
          roam:true,
          zoom: zoomLevel,
          center: [104.1954, 35.8617],
          itemStyle: {
            areaColor: "rgb(102.2, 177.4, 255)",
            borderColor: "#ffffff",
            borderWidth: 1,
          },
          emphasis: {
            itemStyle: {
              areaColor: "rgb(235, 180.6, 99)",
            },
          },
          select: {
            itemStyle: {
              areaColor: "#ffeb3b",
            },
          },
          selectedMode: "single",
        },
      };

      // 设置地图配置项
      myMap.setOption(option);

      // 监听鼠标滚轮缩放事件
      map.value.addEventListener("wheel", (event) => {
        if (event.ctrlKey) {
          event.preventDefault(); // 阻止浏览器默认的缩放行为
          zoomLevel += event.deltaY > 0 ? -0.1 : 0.1; // 滚轮向上放大，向下缩小
          zoomLevel = Math.min(Math.max(zoomLevel, 0.5), 5); // 限制缩放范围

          myMap.setOption({
            geo: {
              zoom: zoomLevel,
            },
          });
        }
      });

    // 监听地图点击事件，并通过 eventBus 发送事件
      myMap.on("click", (event) => {
        const selectedRegion = event.name;
        console.log("点击的省份是：", selectedRegion);
        if (selectedRegion) {
          eventBus.emit("provinceSelected", selectedRegion); // 发送事件
          myMap.dispatchAction({
            type: "mapSelect",
            name: selectedRegion,
          });
        }
      });
    });

    // 异步请求获取省份数据
    const fetchProvinceData = async (province) => {
      try {
        // 假设后端有接口能够根据省份名称返回数据
        const response = await axios.get(`/api/province-data/${province}`);
        const data = response.data;

        // 打印返回的数据，用于调试
        console.log("返回的数据：", data);

        // 可以在此处根据需要对数据进行进一步处理或图表更新
        // 例如，更新图表或展示其他信息
        // updateChart(data); // 在此调用更新图表的函数
      } catch (error) {
        // 如果请求发生错误，捕获并输出错误信息
        console.error("请求省份数据失败:", error);
      }
    };

    // 返回地图的引用
    return { map };
  },
};
</script>

<style scoped>
/* 设置地图的容器样式，使其占据父容器的100%宽度和高度 */
.map {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
