<template>
  <div class="main">
    <!-- <scroll-into-view /> -->
    <world-map />
  </div>
</template>

<script>
// import ScrollIntoView from '../../fix_panel/ScrollIntoView.vue'
import WorldMap from  '../../echarts/TheWorldMap.vue'
export default {
    components:{
        // ScrollIntoView,
        WorldMap
    }

}
</script>

<style lang="scss" scoped>

</style>