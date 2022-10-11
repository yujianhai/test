import { ref , watch } from 'vue'
import * as echarts from 'echarts'

export default function () {
    const chartDom = ref(null)
    function initChart (option) {
        let myChart = echarts.getInstanceByDom(chartDom)
        if (!myChart) {
            myChart = echarts.init(chartDom.value)
        } else {
            myChart.clear()
        }
        myChart.setOption(option, true)
    }


    return {
        chartDom,
        initChart,
    }
}
