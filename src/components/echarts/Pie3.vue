<template>
  <div class="content">
        <div class="chart" ref="chartDom"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, ref, toRefs, watch } from 'vue'
import useEchart from '../hook/useEchart'
export default {
    props:{
        data:{}
    },
    setup(props){
        let chart = null
        const dataList = toRefs(props.data)
        const colorArr = ['rgba(48, 236, 166, 0.7)','red','skyblue']
        const max = dataList.reduce((pre,next)=>pre+next.value,0)
        const du = 360; //圆环整体的环形体
        const startAngle = 90  //旋转的角度
        const center = ['50%', '50%'] //整体的位置
        const getS1 =()=>{
            const arr = []
            let currentTotal = 0
            dataList.forEach((item,index)=>{
                const obj = {   //第一条  绿色
                        type: 'bar',
                        stack: '测试',
                        data: [
                            {
                                //上层圆环，显示数据
                                value: item.value,
                                name: 'sdfasdf',
                                itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color:colorArr[index],
                                    },
                                    {
                                        offset: 1,
                                        color:colorArr[index],
                                    },
                                    ]),
                                },
                            },
                            
                        ],
                        barGap: '-100%', //柱间距离,上下两层圆环重合
                        coordinateSystem: 'polar',
                        roundCap: true, //顶端圆角从 v4.5.0 开始支持
                        z: 2,
                    }

                currentTotal+=item.value;
                const littleCircle = currentTotal/max;
                const obj2 = { //小圆环
                    type: 'pie',
                    radius: ['72%', '72%'], //圆圈的位置
                    center,
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
                            backgroundColor: '#fff',
                            borderRadius: 16,
                            padding: 5, // 可以控制圆的大小
                            borderWidth: 6,
                            borderColor: colorArr[index],
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
                        itemStyle: {
                            color: 'rgba(255,255,255,0)',
                        },
                        },
                    ],
                }
                if(index<dataList.length-1){
                    arr.push(obj)
                    arr.push(obj2)
                }
            })
            return arr
        }

        const getOption = ()=>{
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
                    center,
                    radius: '150%',
                },
                series: [
                    ...getS1(),
                    {  //第三条  最大值减去前面两条
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
                    // 带空心的小圆点3
                      {
                        type: 'pie',
                        radius: ['72%', '72%'], //圆圈的位置
                        center,
                        zlevel: 10,
                        silent: true,
                        startAngle, //极坐标初始角度
                        endAngle: 0,
                        data: [
                            {
                                name: '',
                                value:du/360,
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
                                backgroundColor: '#fff',
                                borderRadius: 16,
                                padding: 5, // 可以控制圆的大小
                                borderWidth: 6,
                                borderColor: 'blue',
                            },
                            },
                            {    
                            name: '',
                            value: 1-du/360,
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            itemStyle: {
                                color: 'rgba(255,255,255,0)',
                            },
                            },
                        ],
                    },
                ],
            };

        }

        const { initChart,chartDom } = useEchart()
        
        onMounted(()=>{
            initChart(getOption())
        })

        watch(props,()=>{
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