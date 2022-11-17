<template>
  <div>
    <canvas id="canvas1" ref="canvas" width="300" height="150"></canvas>
    <img :src="img" alt="">
  </div>
</template>

<script>
import {nextTick, ref} from 'vue'
export default {
    setup(){
        const canvas = ref(null)
        const img = ref(null)
        const drawCircle =() =>{
            const canvas1 = canvas.value
            if(canvas1.getContext){
                const ctx = canvas1.getContext('2d')
                ctx.beginPath();
                ctx.arc(75, 75, 50, 0, Math.PI * 2, false); // 绘制
                ctx.moveTo(110, 75);
                ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口 (顺时针)
                ctx.moveTo(65, 65);
                ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
                ctx.moveTo(95, 65);
                ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
                ctx.stroke();
            }

            return canvas1
        }
        
        const drawImg = ()=>{
            const canvas1 = canvas.value
            if(canvas1.getContext){
                const ctx = canvas1.getContext('2d')
                const img = new Image()
                // img.onload = function(){

                // }
                img.src = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';
            }
        }

        nextTick(()=>{
          const a =   drawCircle().toDataURL('a.png',1)
          img.value= a
        })

        return {
            canvas,
            img
        }
        
    }
}
</script>

<style>

</style>