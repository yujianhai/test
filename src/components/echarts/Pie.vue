<template>
  <div class="content">
        <div class="chart" ref="chartDom"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, ref, toRefs } from 'vue'
import useEcharts from '../hook/useEchart'
export default {
    props:{
        data:{}
    },
    setup(props){
        let {data}  = toRefs(props)
        const {chartDom,initChart} = useEcharts()
        const getOption = () =>{
            const {max,value} = data.value;
            const littleCircle =value/max;
            const du = 270; //圆环整体的环形体
            const startAngle = 90  //旋转的角度
            return {
                angleAxis: {
                    show: false,
                    max: (max * 360) / du, //-45度到225度，二者偏移值是270度除360度
                    type: 'value',
                    startAngle, //极坐标初始角度
                    splitLine: {
                        show: false,
                    },
                },
                barMaxWidth: 10, //圆环宽度
                radiusAxis: {
                    show: false,
                    type: 'category',
                },
                //圆环位置和大小
                polar: {
                    center: ['50%', '50%'],
                    radius: '150%',
                },
                series: [
                    {
                        type: 'bar',
                        stack: '测试',
                        data: [
                            {
                                //上层圆环，显示数据
                                value: value,
                                name: 'sdfasdf',
                                itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color:'rgba(48, 236, 166, 0.7)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(48, 236, 166, 1)',
                                    },
                                    ]),
                                },
                            },
                        ],
                        barGap: '-100%', //柱间距离,上下两层圆环重合
                        coordinateSystem: 'polar',
                        roundCap: true, //顶端圆角从 v4.5.0 开始支持
                        z: 2,
                    },
                    {
                        //下层圆环，显示最大值
                        type: 'bar',
                        data: [
                            {
                                value: max,
                                itemStyle: {
                                    color: 'blue'
                                },
                            },
                        ],
                        barGap: '-100%',
                        coordinateSystem: 'polar',
                        roundCap: true,
                        z: 1,
                    },
            
                    // 带空心的小圆点
                    {
                    type: 'pie',
                    radius: ['72%', '72%'], //圆圈的位置
                    center: ['50%', '50%'],
                    zlevel: 10,
                    silent: true,
                    startAngle, //极坐标初始角度
                    endAngle: 0,
                    data: [
                        {
                            name: '',
                            value: littleCircle,
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            itemStyle: {
                                color: 'rgba(0,0,0,0)',
                            },
                        },
                
                        // 画中间的图标
                        {
                        name: '',
                        value: 0,
                        label: {
                            position: 'inside',
                            backgroundColor: 'white',
                            borderRadius: 16,
                            padding: 5, // 可以控制圆的大小
                            borderWidth: 6,
                            borderColor: 'red',
                        },
                        },
                        {    
                            name: '',
                            value: (360/du) - littleCircle,
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                    ],
                    },
                ],
            };

        }
        onMounted(()=>{
            const option = getOption()
            initChart(option)
        })

        return {
            chartDom,
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