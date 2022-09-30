<template>
  <div>
    <div class="content">
        <div class="panel">
            <button @click="handelPanel">取消</button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineEmits,reactive, toRefs } from 'vue'
export default {
    setup(){
        const state = reactive({
            isShow:true
        })
        const emit = defineEmits<{
            (e: 'cancelPanel', flag: boolean): void //e:表示形参，后面的是参数的名称，flag也是形参，接着是参数的类型
        }>()
        
        const handelPanel=()=>{
            const currentStatus = !state.isShow
            emit('cancelPanel',currentStatus)
        }
        return{
            ...toRefs(state),
            handelPanel
        }
    }
}
</script>

<style lang="scss" scoped>
.content{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
     top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    .panel{
        width: 500px;
        height: 500px;
        background: white;
        border-radius: 10px;
    }
  
}


</style>