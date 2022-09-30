<template>
    <div class="content">
        <div ref="chartsDom" class="charts"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import {ref,onMounted,onBeforeUnmount,toRefs, watch} from 'vue'
export default {
    props:{
        data:[]
    },
    setup(props) {
        const {data} = toRefs(props)
     
        const chartsDom = ref(null)// 获取 chart DOM 

        const initCharts = () => {
            let myChart = echarts.getInstanceByDom(chartsDom.value)
            if (!myChart) {
                myChart = echarts.init(chartsDom.value)
            } 
            myChart.setOption(option, true)
        }

        watch(data.value,newValue=>{
            if(newValue.length>0){
                initCharts()
            }
        })

        const colorList = [
            'rgba(63, 191, 111, 1)',
            'rgba(172, 91, 255, 1)',
            'rgba(239, 207, 45,1)',
            'rgba(60, 90, 224,1)',
        ]

        const getOption = () => ({
            polar: {
                radius: ['90%', '90%'],
                center: ['50%', '50%'],
            },
            title: {
                zlevel: 0,
                textStyle: {
                    color: '#FFA042',
                    fontSize: 50,
                },
                subtextStyle: {
                    fontSize: 40,
                    color: '#fff',
                },
            },
            animation: true,
            angleAxis: {
                max: 100,
                show: false,
                startAngle: 0,
            },
            radiusAxis: {
                type: 'category',
                show: true,
                axisLabel: { show: false },
                axisLine: { show: false },
                axisTick: { show: false },
            },
            series: [
            // 外层刻度
                {
                    hoverAnimation: false,
                    type: 'pie',
                    z: 2,
                    data: [],
                    radius: ['90%', '80%'],
                    zlevel: -2,
                    label: {
                        position: 'inside',
                        show: false,
                    },
                },
            ],
        })
    
 

        const option = getOption()
        const startChart = async () => {
            const total = data.value.reduce((pre, next) => pre + next.value, 0)
            option.series[0].data = []
            data.value.map((item, index) => {
                item.color = colorList[index]
                if (item.value > 0) {
                    let num = Math.round((item.value / total) * 28) //控制每一块的大小
                    for (let i = 0; i < num; ++i) {
                        option.series[0].data.push(
                            {
                                value: 3, // 有颜色部分的宽度
                                name: i,
                                //   ratio: item.ratio,
                                itemStyle: {
                                    color: colorList[index],
                                },
                            },
                            {
                                value: 1, // 无颜色部分的宽度
                                name: '',
                                itemStyle: {
                                    label: { show: false },
                                    labelLine: { show: false },
                                    color: 'rgba(0, 0, 0, 0)',
                                    borderColor: 'rgba(0, 0, 0, 0)',
                                    borderWidth: 0,
                                },
                            },
                        )
                    }
                }
                return null
            })

            initCharts()
        }

        onMounted(() => {
            startChart()
            // if (typeof window.polling.jin30GuZhangZhanBi === 'number') {
            //     state.timer = setInterval(async () => {
            //         startChart()
            //     }, window.polling.jin30GuZhangZhanBi * 1000)
            // }
        })

        onBeforeUnmount(() => {
            // clearInterval(state.timer)
        })
        return {
            chartsDom,
            ...toRefs(data),
        }
    },
}
</script>

<style lang="scss" scoped>
    .content {
        position: relative;
        width: 300px;
        height: 300px;
        border: 1px solid red;

        .charts {
              width: 270px;
            height: 270px;
        }

        .legend {
            position: relative;
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 100%;

            .item {
                &:nth-child(1) {
                    position: absolute;
                    top: 50px;
                    right: 23px;
                }

                &:nth-child(2) {
                    position: absolute;
                    right: 23px;
                    bottom: -7px;
                }

                &:nth-child(3) {
                    position: absolute;
                    bottom: -7px;
                    left: 17px;
                }

                &:nth-child(4) {
                    position: absolute;
                    top: 50px;
                    left: 17px;
                }

                .name {
                    font-family: SourceHanSansCN-Regular, sans-serif;
                    font-size: 26px;
                    font-weight: 400;
                    color: white;
                }

                .value {
                    margin-top: 12px;
                    font-family: DINPro-Medium, sans-serif;
                    font-size: 34px;
                    font-weight: 500;
                    color: white;
                }
            }
        }
    }
</style>
