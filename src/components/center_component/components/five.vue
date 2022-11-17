<template>
  <div class="main">
    <!-- <scroll-into-view /> -->
    <world-map />
    <canvas-1 />
    <!-- <hui-tu-gong-ju /> -->
  </div>
</template>

<script>
// import ScrollIntoView from '../../fix_panel/ScrollIntoView.vue'
import WorldMap from  '../../echarts/TheWorldMap.vue'
import Canvas1 from '../../canvas/Test1.vue'
// import HuiTuGongJu from '../../canvas/HuiTuGongJu.vue'
export default {
    components:{
        // ScrollIntoView,
        WorldMap,
        Canvas1,
        // HuiTuGongJu
    }

}
</script>

<style lang="scss" scoped>

</style>