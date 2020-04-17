<template>
  <div>
    <div id="radar" style="width:100%; height:6rem"></div>
  </div>
</template>
        
<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入雷达图
// require("./lib/chart/radar");
// 导入数据
import { option } from "../../assets/js/option-radar";
export default {
  name: "Radar",
  data() {
    return {};
  },
  mounted() {
    let myChart = echarts.init(document.getElementById("radar"));
    myChart.setOption(option);
  }
};
</script>
        
<style scoped>
#gaugeContainer {
  width: 100%;
  height: 400px;
  background: linear-gradient(to left bottom, #ff898f, #fff);
}
</style>
