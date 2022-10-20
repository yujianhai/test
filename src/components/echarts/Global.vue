<template>
    <div>
        <div v-show="showEarth" ref="echartRef" class="center-earth"></div>
        <div class="back"></div>
    </div>
</template>

<script>
import useEchart from '../echarts/hooks/index'
import axios from 'axios'
import * as echarts from 'echarts'
import {ref,onMounted} from 'vue'

export default {
    setup() {
        const startPoint = [116, 29]
        let baseTexture = null 
        let geoJson = null
        const echartRef2 = ref(null)
        const timer = ref(null)
        const showEarth = ref(false)
        let data = []
        const Arr = []

        for (let i = 0; i < 10; ++i) {
            const x = Math.random() * 150
            const y = Math.random() * 60
            Arr.push({
                coords: [
                    startPoint, // 起点
                    [x, y], // 终点
                ],
            })
        }
        const mockData = () => axios.get('/getapi/earthData')
        const getOption = () => {
            const option = {
                backgroundColor: 'transparent',
                globe: {
                    baseTexture,
                    globeRadius: 112, // 球面半径
                    environment: 'black',
                    shading: 'color',
                    light: {
                        // 光照阴影
                        main: {
                            intensity: 1.2, // 光照强度
                            // alpha: 40,
                            // beta: -30,
                        },
                        // ambient: {
                        //     color: 'white',
                        //     intensity: 10,
                        // },
                    },
                    top: 0,
                    viewControl: {
                        autoRotate: true,
                        glowPower: 2,
                        distance: 190,
                        autoRotateSpeed: 30,
                        // autoRotateAfterStill: 1,
                    },
                    atmosphere: {
                        show: true,
                        color: '#292e44',
                        innerGlowPower: 1,
                        offset: 0.8,
                    },
                    // layers: [
                    //     {
                    //         texture: zhuang4,
                    //         type: 'blend',
                    //         distance: 0,
                    //         blendTo: 'emission',
                    //     },
                    //     {
                    //         texture: wangge,
                    //         type: 'overlay',
                    //         distance: 4,
                    //         blendTo: 'emission',
                    //     },
                    //     {
                    //         texture: zhuang2,
                    //         type: 'blend',
                    //         distance: 4,
                    //         blendTo: 'emission',
                    //     },
                    //     {
                    //         texture: zhuang4,
                    //         type: 'blend',
                    //         distance: 4,
                    //         blendTo: 'emission',
                    //     },

                    // ],
                },
                series: [ 
                    {
                        type: 'bar3D',
                        coordinateSystem: 'globe',
                        data,
                        barSize: 0.7,
                        minHeight: 0.1,
                        maxHeight: 1,
                        silent: false,
                        itemStyle: {
                            color: 'rgba(21, 254, 255,0.5)',
                        },
                    },
                    {
                        type: 'scatter3D',
                        coordinateSystem: 'globe',
                        blendMode: 'lighter',
                        symbolSize: 9,
                        symbol: 'circle',
                        bevelSmoothness: 5,
                        itemStyle: {
                            color: 'rgba(21, 254, 255,1)',
                            opacity: 1,
                        },
                        data,
                    },
                    
                ],
            }
            return option
        }
        const { echartRef, renderChart } = useEchart(getOption)


        //地图渲染方法
        const getBase = () => {
            let canvas = document.createElement('canvas')
            echarts.registerMap('world', geoJson)
            baseTexture = echarts.init(canvas, null, {
                width: 1452,
                height: 1381,
            })
            baseTexture.setOption({
                backgroundColor: 'black', // 海洋的背景颜色
                geo: {
                    type: 'map',
                    map: 'world',
                    left: 100,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    boundingCoords: [
                        [-180, 90],
                        [180, -90],
                    ],
                    label: {
                        show: false,
                        color: 'white',
                    },
                    // regions: [
                    //     {
                    //         name: '中国',
                    //         itemStyle: {
                    //             areaColor: '#22b4ff',
                    //         },
                    //     },
                    // ],
                    zoom: 1,
                    roam: false,
                    itemStyle: {
                        areaColor: '#0f121d',
                        borderColor: '#2b3249',
                        borderWidth: 0,
                        shadowBlur: 1,
                        shadowColor: '#2f344b',
                        borderType: 'solid',
                        opacity: 1,
                    },
                    emphasis: {
                        disabled: false,
                        label: {
                            show: false,
                        },
                        itemStyle: {
                            color: '#0a121a',
                        },
                    },
                },
                series: [
                    {
                        name: '散点',
                        coordinateSystem: 'geo',
                        type: 'effectScatter',
                        symbolSize: 4,
                        rippleEffect: {
                            scale: 10,
                            color: '#abfffe',
                        },
                        data: [
                            {
                                value: startPoint,
                                itemStyle: {
                                    color: 'rgba(21, 254, 255,1)',
                                },
                            },
                            {
                                value: [startPoint[0], startPoint[1] + 10],
                                itemStyle: {
                                    color: 'rgba(21, 254, 255,1)',
                                },
                                label: {
                                    show: false,
                                },
                            },
                            {
                                value: [startPoint[0] - 120, startPoint[1] - 20],
                                itemStyle: {
                                    color: 'rgba(21, 254, 255,1)',
                                },
                                label: {
                                    show: false,
                                },
                            },
                            {
                                value: [startPoint[0] + 10, startPoint[1] + 10],
                                itemStyle: {
                                    color: 'rgba(21, 254, 255,1)',
                                },
                                label: {
                                    show: false,
                                },
                            },
                        ],
                    },
                ],
            }, false)   
        }
        
        onMounted(() => {
            axios.get('/getapi/worldmap').then(async res => {  //请求地球的geojson数据
                geoJson = res.data
                const res2 =  await mockData()     //请求要展示的mock数据
                data =res2.data
                getBase()   //渲染地图
                renderChart(false, {  //渲染地球i
                    notMerge: false,
                    lazyUpdate: true,
                })
            })
        })

        const polling = async () => {
                const res = await mockData()
                data = res.data
                console.log(data);
                renderChart(false, {
                    notMerge: false,
                    lazyUpdate: true,
                })
        } 

        setTimeout(() => {
            showEarth.value = true
        }, 2000)

        polling()
        return {
            echartRef,
            echartRef2,
            showEarth,
        }
    },
}
</script>

<style lang="scss" scoped>
.center-earth {
    position: relative;
    z-index: 4;
    width: 552px;
    height: 581px;
}


</style>