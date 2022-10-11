<template>
  <div class="content">
        <div class="chart" ref="chartDom"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, ref, toRefs } from 'vue'
import useEchart from '../hook/useEchart'
export default {
    props:{
        data:{}
    },
    setup(props){
        let {data}  = toRefs(props)
        const { initChart,chartDom } = useEchart()
        const getOption = ()=>{
            var trafficWay = [{
                name: '在线',
                value: 20
            },{
                name: '离线',
                value: 10
            },{
                name: '故障',
                value: 30
            }];
            var title  = "故障状态统计";
            // var nameArray = trafficWay.map(item=>{
            //     return item.name
            // })


            var data = [];
            var color=[{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'red' // 0% 处的颜色
            }, {
                offset: 1, color: 'blue' // 100% 处的颜色
            }],
            global: false // 缺省为 false
            },{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'red' // 0% 处的颜色
            }, {
                offset: 1, color: 'blue' // 100% 处的颜色
            }],
            global: false // 缺省为 false
            },{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'red' // 0% 处的颜色
            }, {
                offset: 1, color: 'blue' // 100% 处的颜色
            }],
            global: false // 缺省为 false
            }]
            for (var i = 0; i < trafficWay.length; i++) {
                data.push({
                    value: trafficWay[i].value,
                    name: trafficWay[i].name,
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            shadowBlur: 0,
                            
                            borderRadius:0,
                            borderColor:color[i],
                            shadowColor: color[i]
                        }
                    }
                }, {
                    value: 0.5,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
            }
                });
            }
            var seriesOption = [{
                name: '',
                type: 'pie',
                clockWise: false,
                radius: [105, 119],
                width:280,
                height:252,
                hoverAnimation: false,
                center: ['20%', '55%'],
                left:"20%",
                top:"center",
                itemStyle: {
                    normal:{
                        label: {
                            show:false
                        }
                    }
                },
                data
            }];
            const  option = {
                color : color,
                graphic: {
                    elements: [{
                        type: "image",
                        z: 3,
                        style: {
                            width: 280,
                            height: 252
                        },
                        left: '20%',
                        top:  'center',
                    }]
                },
                tooltip: {
                    show: false
                },
                legend: [
                ],
                toolbox: {
                    show: false
                },
                series: seriesOption
            }
            return option
       }
        onMounted(()=>{
            initChart(getOption())
        })

        return {
            chartDom
        }
    }

}
</script>

<style lang = 'scss' scoped>
    .content{
    display: flex;
        .chart{
            width: 300px;
            height: 300px;
            border: 1px solid red;
        }

    }

</style>