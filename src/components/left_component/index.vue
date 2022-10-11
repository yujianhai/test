<template>
  <div class="left-content">
    <div
      :class="['menu', currentIndex === index ? 'active' : '']"
      v-for="(item, index) in menu"
      @click="changeMenu(index)"
      :key="index"
    >
      <span> {{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, defineEmits } from 'vue'
    const state = reactive({
    currentIndex: 0,
    })
    const menu = [
        {
            icon: 'a',
            name: 'ToList',
            number: 'One',
        },
        {
            icon: 'b',
            name: '图片动效',
            number: 'Two',
        },
        {
            icon: 'c',
            name: '图表组件',
            number: 'Three',
        },
        {
            icon: 'd',
            name: '滚牌器',
            number: 'Four',
        },
        {
            icon: 'e',
            name: 'Five',
            number: 'Five',
        },
        {
            icon: 'f',
            name: 'XXX',
            number: 'Two',
        },
        {
            icon: 'g',
            name: 'XXX',
            number: 'Two',
        },
        {
            icon: 'h',
            name: 'XXX',
            number: 'Two',
        },
        {
            icon: 'i',
            name: 'XXX',
            number: 'Two',
        },
    ]
    const emit = defineEmits<{
        (e: 'change', number: number): void
        (e: 'update', number: string): void
    }>()
    //非ts写法
    // const emit2 = defineEmits(['change','update'])

    const changeMenu = (index: number): void => {
            state.currentIndex = index
            emit('change', menu[index].number)
    }

const { currentIndex } = toRefs(state)
</script>
<style lang="scss" scoped>

.left-content{
    height: 100%;
    background: aliceblue;
}
.menu {
    position: relative;
    left: 0px;
    margin-left: 50px;
    height: 40px;
    width: 150px;
     display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid wheat;
    border-bottom-width: 0px;
&:last-child{
    border: 1px solid wheat;
}
&::before{
    position: absolute;
    top: 8px;
    left: -40px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: 1px solid wheat;
    box-sizing: border-box;
    content: "";
  }
}
.active {
    background: skyblue;
    color: white;
    ::before{
     position: absolute;
    top: 8px;
    left: -40px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: skyblue;
    content: "";
  }
}
</style>
