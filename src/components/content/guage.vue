<template>          
    <div>
        <div id="gaugeContainer" style="width:100%; height:400px"></div>
    </div>
</template>
        
<script>
    const echarts = require('echarts')
    // 导入数据
    import {option} from '../../assets/js/guage-option'
    export default {
        name: '',
        data () {
            return {
                
            }
        },
        mounted() {
            let myChart = echarts.init(document.getElementById('gaugeContainer'))
            myChart.setOption(option);
        }
    }
</script>
        
<style scoped>
    #gaugeContainer {
        width: 100%;
        height: 400px;
        background: linear-gradient(to left bottom, #ff898f, #fff);
        /* (水平半径：左上 右上 右下 左下)/(垂直半径：左上 右上 右下 左下) */
        border-radius:0 0 200px 200px/0 0 50px 50px;
    }
</style>
