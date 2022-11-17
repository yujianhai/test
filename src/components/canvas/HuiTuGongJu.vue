<template>
  <div>
    <canvas id="canvas1" ref="canvas" width="600" height="400"></canvas>
    <!-- <img :src="img" alt=""> -->
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
                canvas1.onmousedown((ev)=>{
                    ctx.beginPath()
                    ctx.moveTo(ev.offsetX,ev.offsetY)
                    ctx.strokeStyle = 'red'
                
                canvas1.onmousemove((e)=>{
                    ctx.lineTo(e.offsetX,e.offsetY)
                    ctx.store()
                })

                // canvas1.onmouseup = ()=>{
                //     canvas1.onmousemove = null
                // }
                    
                })
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
        //   img.value= a
        })

        return {
            canvas,
            // img
        }
        
    }
}
</script>

<style lang="scss" scoped>
#canvas1{
    background: white;
}

</style>