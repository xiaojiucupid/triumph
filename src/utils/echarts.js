import * as echarts from 'echarts/core'; // 导入 ECharts 核心库
// 导入常用的组件
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,  // 数据集组件
} from 'echarts/components';

// 导入具体的图表类型组件
import { LineChart, BarChart, PieChart } from 'echarts/charts';
// 渲染器
import { CanvasRenderer } from 'echarts/renderers';

// 注册所需要的组件和图表类型
echarts.use([
  TitleComponent,        // 标题组件
  TooltipComponent,      // 提示框组件
  GridComponent,         // 网格组件
  LegendComponent,       // 图例组件
  DatasetComponent,      // 数据集组件
  LineChart,             // 折线图
  BarChart,              // 条形图
  PieChart,              // 饼图
  CanvasRenderer,        // 渲染器
]);

/**
 * 创建并初始化 ECharts 图表
 * @param {HTMLElement} chartDom - 图表的容器元素
 * @param {Object} option - ECharts 图表的配置项
 * @returns {Object} - 返回 ECharts 图表实例
 */
export function createChart(chartDom, option) {
  // 初始化图表实例
  const myChart = echarts.init(chartDom);
  // 设置图表配置项
  myChart.setOption(option);
  // 返回图表实例
  return myChart;
}
