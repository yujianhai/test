<template>
<div>
    {{clientX}}
    {{clientY}}
    {{offsetX}}
    {{offsetY}}
  <div class="content">
    <div ref="scrollDom" class="content-main">
        <div id="circle" ref="circle">

        </div>
    </div>
  </div>
</div>

</template>

<script>
import { ref, toRefs } from '@vue/reactivity'
import { onMounted,reactive} from '@vue/runtime-core'
export default {
    setup(){
        const scrollDom = ref(null)
        const state = reactive({
            clientX:0,
            clientY:0,
            offsetX:0,
            offsetY:0
        })

        const circle = ref(null)
        onMounted(()=>{
            const dom = scrollDom.value
            dom.scrollIntoView({
                block:'end',
                behavior:'smooth',     
            })
            window.addEventListener('mousemove',e=>{
                // console.log(e);
                const {clientX,clientY,offsetX,offsetY} = e
                state.clientX =clientX 
                state.clientY =clientY 
                state.offsetX=offsetX 
                state.offsetY =offsetY 
                if(!circle.value.style) return
                circle.value.style.top = `${state.offsetY-3}px`
                circle.value.style.left = `${state.offsetX-3}px`
            })
            
        })
        return{
            scrollDom,
            ...toRefs(state),
            circle
        }
    }

}
</script>

<style lang="scss" scoped>
.content{
    height: 14.2857rem; 
    width: 14.2857rem;
    border: .0357rem solid red;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: .1429rem;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: .3571rem;
        box-shadow: inset 0 0 .1786rem rgba(0,0,0,0.2);
        background: rgba(0, 0, 0, 0.596);
    }
    &-main{
        height: 28.5714rem;
        width: 100%;
        border: .0357rem solid red;

        #circle{
            position: absolute;
            width: .7143rem;
            height: .7143rem;
            border-radius: .7143rem;
            background: black;
        }

    }
}
</style>