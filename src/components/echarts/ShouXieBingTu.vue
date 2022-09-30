<template>
  <div class="main">
    <div class="circle" :style="{'--rotate':`${rotateNumber}deg`}"></div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity"
export default {
    setup(){
        const state = reactive({
            rotateNumber:90
        })

        return {
            ...toRefs(state)
        }
    }
}
</script>
<style lang="scss" scoped>
@keyframes circle {
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(var(--rotate));
    }
}
.main{
    width: 300px;
    height: 300px;
    border: 1px solid red;
}
.circle{
        width: 10px;
        height: 50px;
        background: red;
        animation: circle 2s ;
        transform-origin: 0% 300%;
        transform:  rotate(var(--rotate));
}

</style>