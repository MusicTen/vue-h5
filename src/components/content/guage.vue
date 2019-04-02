<template>          
    <div>
        <div id="gaugeContainer" style="width:100%; height:400px"></div>
    </div>
</template>
        
<script>
    const echarts = require('echarts');
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
       
</style>
