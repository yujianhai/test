<template>
  <div class="main">
        <Pie :data="pie.data" />
        <Pie2 :data="pie2.data" />
        <Pie3 :data="pie3.data" />
        <Histogram :data="histogram.data" />
        <ZhuTu />
        <Pie4 :data="pie4.data" />
        <ShouXieBingTu />
  </div>
</template>

<script>
import Pie from '../../echarts/Pie.vue'
import Pie2 from '../../echarts/Pie2.vue'
import Pie3 from '../../echarts/Pie3.vue'
import Pie4 from '../../echarts/Pie4.vue'
import Histogram from '../../echarts/Histogram.vue'
import ShouXieBingTu from '../../echarts/ShouXieBingTu.vue'
import ZhuTu from '../../echarts/ZhuTu.vue'
import { reactive, toRefs } from '@vue/reactivity'
export default {
    components:{
        Pie,
        Pie2,
        Pie3,
        Pie4,
        Histogram,
        ZhuTu,
        ShouXieBingTu,
    },
    setup(){
        const state = reactive({
            pie: {
                data:{
                    value:200,
                    max:300
                }
            },
            pie2:{
                data:[
                {
                    "name": "故障1",
                    "value": 20,
                    "unit": "%"
                },
                {
                    "name": "故障2",
                    "value": 20,
                    "unit": "%"
                },
                {
                    "name": "故障3",
                    "value": 20,
                    "unit": "%"
                },
                {
                    "name": "故障4",
                    "value": 20,
                    "unit": "%"
                }
            ]
            },
             pie3: {
                data:[41,5,5,10]
            },
            pie4:{
                data:[{
                    name: '病假',
                    value: 30
                },{
                    name: '事假',
                    value: 20
                },{
                    name: '婚假',
                    value: 30
                }]
            },
            histogram:{
               data: {
                    value:60,
                    max:120
                }   
            }
        })

        return {
            ...toRefs(state)
        }
    }
}
</script>

<style lang ="scss" scoped>
.main{
    display: flex;
    flex-wrap: wrap;

}
</style>