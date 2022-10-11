<template>
  <div class="main">
    <fan-pai-qi />
    <lun-bo-list />
    <lun-bo-list2 />
    <background-line-g />
    <wen-ben-jian-bian />
    <animation />
  </div>
</template>

<script>
// import DivMove from '../../fix_panel/DivMove.vue'
import FanPaiQi from '../../fix_panel/Fan.vue'
import LunBoList from '../../fix_panel/LunBoList.vue'
import LunBoList2 from '../../fix_panel/LunBoList2.vue'
import BackgroundLineG from '../../fix_panel/BackgroundLineGraid.vue'
import WenBenJianBian from '../../fix_panel/WenBenJianBian.vue'
import Animation from '../../fix_panel/Animation.vue'
export default {
    components:{
        FanPaiQi,
        LunBoList,
        LunBoList2,
        BackgroundLineG,
        WenBenJianBian,
        Animation
    }
}
</script>

<style>

</style>