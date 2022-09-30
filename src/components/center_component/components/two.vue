<template>
  <div class="content">
    <div class="l1">
    <img v-show="!light2Show" :src="light1" alt="" width="500" height="500">    
    </div>
    <img v-show="light2Show" :src="light2" alt="" width="500" height="500">    
    <div class="l2"></div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import light1 from '../../../assets/light.png';
import light2 from '../../../assets/light2.png';
import { onBeforeUnmount } from '@vue/runtime-core';
export default{
    setup(){
        const l1 = light1;
        const l2 = light2;
        const state = reactive({
            light2Show:false
        })
     
    //    const timer =  setInterval(() => {
    //         state.light2Show = !state.light2Show
    //     }, 2810);

 
        setTimeout(()=>{
            state.light2Show = !state.light2Show
        },2800)

       const timer = setInterval(() => {
            state.light2Show =  !state.light2Show
            setTimeout(()=>{
                state.light2Show =!state.light2Show
            },2800) //第一个动画的时间长度
        }, 5600); //总的时间周期长度
       onBeforeUnmount(()=>{
            clearInterval(timer)
        })
        return {
            light1,
            light2,
            ...toRefs(state)
        }
    }
}

</script>

<style lang="scss" scoped>
.content{
    display: flex;
.l1{
    width: 600px;
    height: 600px;

}

.l2{
     width: 600px;
    height: 600px; 
}
}


</style>