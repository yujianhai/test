<template>
<div>
          <NumberScoller :config="{width:964,num:`12345678${num}`}"/>
</div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import NumberScoller from './FanPaiQiVue3.vue'
export default {
    components:{
        NumberScoller
    },
    setup(){
                const state = reactive({
            num:0
        })
        setInterval(()=>{
        state.num = Math.round(Math.random()*9)
        },5000)

        return {
            ...toRefs(state)
        }
    }
}
</script>

<style>

</style>