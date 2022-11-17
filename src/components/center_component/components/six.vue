<template>
  <div>
    <grid-1 />
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        Grid1:defineAsyncComponent(()=>import('../../gridposition/Grid1.vue'))
    }

}
</script>

<style>

</style>