<template>
<div>
  <div class="content">
    <div ref="scrollDom" class="content-main">

    </div>
  </div>
</div>

</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    setup(){
        const scrollDom = ref(null)
        onMounted(()=>{
            const dom = scrollDom.value
            dom.scrollIntoView({
                block:'end',
                behavior:'smooth',
            })
            
        })
        return{
            scrollDom
        }
    }

}
</script>

<style lang="scss" scoped>
.content{
    height: 400px;
    width: 400px;
    border: 1px solid red;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
    }
    &-main{
        height: 800px;
        width: 100%;
        border: 1px solid red;

    }
}
</style>