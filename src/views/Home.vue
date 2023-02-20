<template>
  <div class="home">
    <Head />
    <div class="container">
      <LeftMenu class="left" @change="resolveChangeValue" />
      <div>
        Mytest
      </div>
      <Center class="right" :componentName="componentName" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LeftMenu from '../components/left_component'
import Head from '../components/head_component'
import Center from '../components/center_component'
import { ref } from 'vue'
const componentName = ref('')
const resolveChangeValue = (value) => {
  componentName.value = value   
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 10px;
  display: flex;
  .left {
    width: 11%;

  }
  .right {
    width: 88.5%;
    background: seashell;
  }
}
</style>
