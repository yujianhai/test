<template>
  <div id="content">
        <div class="triangle">
            <div class="san" :style="{'margin-left':`${accounted}%`}"></div>
        </div>
        <div class="chartDom" ref="chartDom">
        </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { reactive, ref, toRefs } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'
export default {
    props:{
        data:{
            type:Object,
            default:()=>({})
        }
    },
    setup(props){
        let chart = null
        const chartDom = ref(null)
        const initEcharts = ()=>{
            const option = getOption()
            if(!echarts.getInstanceByDom(chartDom.value)){
                chart = echarts.init(chartDom.value)
            }
            chart.setOption(option,true)
        }

        const {data} = toRefs(props)
        const accounted = ref(0)

        watch(()=>data.value,(newValue)=>{
            if(newValue.value){
                initEcharts()
            }
        })


        const getOption = () => {
            accounted.value =data.value/data.max===0?0:(data.value.value/data.value.max)*100-2;
            const {value,max} =data
            let salvProName =["",];
            let salvProValue =[value];
            let salvProMax =[];//背景按最大值
            for (let i = 0; i < salvProValue.length; i++) {
                salvProMax.push(120)
            }

            const getSymbolData = (data) => {
                let arr = [];
                for (let i = 0; i < data.length; i++) {
                    arr.push({
                        value: data[i],
                        symbolPosition: 'end'
                    })
                }
                return arr;
            }


            return  {
                grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '0%',
                    top: '0%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'none'
                    },
                    formatter: function(params) {
                        return params[0].name  + ' : ' + params[0].value
                    }
                },
                xAxis: {
                    show: false,
                    type: 'value',
                    name :''
                    
                },
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#C4F1FF'
                        },
                        rich: {
                            a: {
                                color: '#C4F1FF',
                                fontWeight:'800',
                                fontSize: 16,
                            },
                        },
                        // formatter:(val)=>{
                        //     console.log('值',val);
                        //     let text  = val.split(' ')
                        //     console.log(text);
                            
                        //     return '{a' + '|' + '◇' + text[0]+ '}' + '\n'+text[1]
                        // }
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    data: []
                }, {
                    type: 'category',
                    inverse: true,
                    axisTick: 'none',
                    axisLine: 'none',
                    show: true,
                    axisLabel: {
                        textStyle: {
                            color: '#C4F1FF',
                            fontWeight:'800'
                        },
                    },
                    // data:salvProValue
                }],
                series: [{
                        name: '',
                        type: 'bar',
                        zlevel: 1,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 30,
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgb(10, 116, 255,1)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(127,237,241,1)'
                                }]),
                            },
                        },
                        z: 2,
                        barWidth: 10,
                        data: salvProValue
                    },
                    {
                        name: '背景',
                        type: 'bar',
                        barWidth: 10,
                        barGap: '-100%',
                        data: salvProMax,
                        itemStyle: {
                            normal: {
                                color: '#004298',
                                barBorderRadius: 30,
                                // backgroundColor:'#091C24'
                                // borderColor:'#00D1F0'
                            }
                        },
                        z: 1,
                    },
                ]
            };
        }

        onMounted(()=>{
            initEcharts()
        })
        return {
            chartDom,
            ...toRefs(data),
            accounted
        }
    }
}
</script>

<style scoped lang = "scss">
    @keyframes right-move {
        from {
            margin-left: -2%;
        }
        /* to {
            margin-left: 55%;
        }         */
    }
    #content{
        position: relative;
        border: 1px solid red;
    }
    .chartDom{
        width: 300px;
        height: 300px;
    }

    .triangle{
        display: flex;
        position: absolute;
        top: 120px;
        width: 100%;
        .san {
            width: 0px;
            height: 0px;
            border: 6px solid #000;
            border-top-color:red;
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
            -webkit-animation: right-move 0.9s ease-in-out;
        }
    }
</style>