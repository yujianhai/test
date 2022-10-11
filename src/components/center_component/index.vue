<template>
  <div>
    <component :is="components[props.componentName]"></component>
  </div>
</template>

<script lang="ts" setup>
import One from './components/one.vue'
import Two from './components/two.vue'
import Three from './components/three.vue'
import Four from './components/four.vue'
import Five from './components/five.vue'
import { ref, defineProps } from 'vue'
const currentComponentName = ref('')
//接收父组件传来的参数
const props = defineProps<{ componentName?: string }>()
const components = {
  One,
  Two,
  Three,
  Four,
  Five
}
</script>

<style></style>
