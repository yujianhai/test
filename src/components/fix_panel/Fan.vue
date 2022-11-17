<template>
  <div>
    <NumberScoller :config="{ width: 500, num:num+'' }" />
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, toRefs } from "@vue/reactivity";
import NumberScoller from "./FanPaiQiVue3.vue";
import { onBeforeUnmount } from '@vue/runtime-core';
export default {
  components: {
    NumberScoller,
  },
  setup() {
    const state = reactive({
      num: 0,
      timer:null
    });
    const getMockData = ()=>{
        return  axios.get('/getapi/fanpaiqi')
    }

    const getData = async ()=>{
        const res= await getMockData() 
        state.num = res.data.number
    }

    getData()
    state.timer = setInterval(async () => {
           getData()
    }, 5000);
    onBeforeUnmount(()=>{
        clearInterval(state.timer)
    }) 
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>