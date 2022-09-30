<template>
  <div class="main">
    {{positionX}}
    {{positionY}}
    <div class="out" @mousedown="move">
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
export default {
 setup(){
    const state = reactive({
        positionX:0,
        positionY:0
    })


    const move = (e)=>{
        console.log('被拽着走');
        let odiv = e.target; //获取目标元素

        //打算鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft;
        let disY = e.clientY - odiv.offsetTop

        document.onmousemove = (e)=>{
            //鼠标按下并移动的时间
            console.log(e);
            let left  = e.clientX - 2*disX
            let top = e.clientY - 2*disY

            //绑定元素位置到positionX 和 positionY 上面
            state.positionX = top
            state.positionY = left

            //
            odiv.style.left = `${left}px`
            odiv.style.top = `${top}px`

        }

        document.onmouseup = e =>{
            document.onmousemove = null
            document.onmouseup = null
        }

    }
    return{
        move,
        ...toRefs(state)
    }
 }
}
</script>

<style lang="scss" scoped>
.out{
    position: relative;
    top: 10px;
    left: 10px;
    width: 200px;
    height: 200px;
    background-color: antiquewhite;
}


</style>