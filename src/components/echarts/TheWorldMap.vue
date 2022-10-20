<template>
  <div>
    <div class="echartRef" ref="echartRef"></div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'
import 'echarts-gl'
export default {
    setup(){
        const echartRef = ref(null)
        const startPoint =[116, 29]
        const Arr = []

        const effectScatter = []

        const countrys = ['加拿大','美国','墨西哥','巴西']

        //  const getLocationArr = ()=>{
        //     for(let i  =0;i<10;++i){
        //     const x = Math.random()*150
        //     const y = Math.random()*60
        //     effectScatter.push({name:"哈哈哈" ,value:[x,y]})
        //     Arr.push( {
        //             coords: [
        //                     startPoint,  // 起点
        //                     [x, y]   // 终点
        //                 ],
        //         })
        // }
        // }
       

        let GeoJSON = null
        const getLocationArr = ()=>{
            const objArr = GeoJSON.features
            effectScatter.push({name:'南京吉山', value: startPoint})
            countrys.forEach(country=>{
            const point =objArr.filter(item=>{
                if(item.properties.name === country)
                return item
            })
            Arr.push( {
                coords: [
                        startPoint,  // 起点
                        point[0].geometry.coordinates[0][0][0]  // 终点
                    ],
            })
            effectScatter.push({name:point[0].properties.name ,value: point[0].geometry.coordinates[0][0][0]})
             })
        }
        const getWorldJson =async ()=>{
            const wroldJSON = await axios.get('/getapi/worldmap')
            GeoJSON = wroldJSON.data
            echarts.registerMap('world',{geoJSON:GeoJSON})
            getLocationArr()
            initChart()
        }

        getWorldJson()


        const getOption = ()=>{
           let option = {
            color:"#75fcff",
            geo: {
                left:0,
                top:0,
                map: 'world',
                itemStyle: {
                    areaColor:'#184477',
                    opacity:0.8,
                    borderColor:'#184477',
                    borderWidth:0
                },
                zoom:1,
                label:{
                    show:false
                },
                regions:[
                    {
                        name:'中国',
                        itemStyle:{
                            areaColor:'#22b4ff'
                        }
                    }
                ],
            },
            series:[
                    {
                        name:' 飞行线路',
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0,
                            symbolSize: 5,
                            color:'#74fbfe',
                            curveness: 0 //线段的弯曲程度
                        },
                        //飞行线底线的样式
                        lineStyle: {
                                color: '#74fbfe',
                                width: 1,
                                opacity: 1,
                        },
                        data: Arr
                    },{
                        name:'散点',
                        coordinateSystem: 'geo',
                        type: 'scatter',
                        label:{
                            show:false
                        },
                        data:[
                            {
                                value:[startPoint[0],startPoint[1]+10],
                                name:'中华人民共和国',
                                itemStyle:{
                                    color:'red'
                                },
                                label:{
                                    show:false
                                }
                            },
                        ]
                    }
                    ,{
                        name:'动画散点',
                        coordinateSystem: 'geo',
                        type: 'effectScatter',
                        label:{
                            show:true,
                            formatter:'{b}',
                            color:'white'
                        },
                        symbolSize:5,
                        rippleEffect :{
                            scale:5
                        },
                        data:effectScatter
                    }
            ]
        }
            return option
        }
        const initChart=()=>{
            let chart =echarts.init(echartRef.value)
            const option = getOption()
            chart.setOption(option,true)
        }
        return {
            echartRef
        }
    }
}
</script>

<style lang="scss" scoped>
.echartRef{
    width: 870px;
    height: 500px;
    border: 1px solid red;
}

</style>