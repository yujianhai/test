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
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        FanPaiQi:defineAsyncComponent(()=>import('../../fix_panel/Fan.vue')),
        LunBoList:defineAsyncComponent(()=>import('../../fix_panel/LunBoList.vue')),
        LunBoList2:defineAsyncComponent(()=>import('../../fix_panel/LunBoList2.vue')),
        BackgroundLineG:defineAsyncComponent(()=>import('../../fix_panel/BackgroundLineGraid.vue')),
        WenBenJianBian:defineAsyncComponent(()=>import('../../fix_panel/WenBenJianBian.vue')),
        Animation:defineAsyncComponent(()=>import('../../fix_panel/Animation.vue'))
    }
}
</script>