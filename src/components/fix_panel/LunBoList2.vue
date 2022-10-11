//横向轮播
<template>
<div class="lunbo-content">
    <div 
    @mousemove="mouseEnterOrLeave=true" 
    @mouseleave="mouseEnterOrLeave=false"
    :class="['lun-bo-list1',dataList.length>6&&!mouseEnterOrLeave?'list-animation':'']">  
            <div class="item" v-for="item in dataList" :key="item.id">
                <span> {{item.id}} </span> &nbsp;&nbsp;
                <span> {{item.age}} </span>&nbsp;&nbsp;
                <span> {{item.name}} </span>
            </div>
            <div class="item" v-for="item in dataList" :key="item.id">
                <span> {{item.id}} </span> &nbsp;&nbsp;
                <span> {{item.age}} </span>&nbsp;&nbsp;
                <span> {{item.name}} </span>
            </div>
    </div>
</div>
</template>
<script>
import { reactive, ref, toRefs } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
export default {
    setup(){
        const state = reactive({
            dataList:[
                {
                    id:"001",
                    name:"张三",
                    age:18
                },
                {
                    id:"002",
                    name:"张三",
                    age:18
                },
                {
                    id:"003",
                    name:"张三",
                    age:18
                },
                {
                    id:"004",
                    name:"张三",
                    age:18
                },
                {
                    id:"005",
                    name:"张三",
                    age:18
                },
                {
                    id:"006",
                    name:"张三",
                    age:18
                },
                {
                    id:"007",
                    name:"张三",
                    age:18
                },
                {
                    id:"008",
                    name:"张三",
                    age:18
                },
                {
                    id:"009",
                    name:"张三",
                    age:18
                },
                {
                    id:"010",
                    name:"张三",
                    age:18
                },
                {
                    id:"011",
                    name:"张三",
                    age:18
                },
                {
                    id:"012",
                    name:"张三",
                    age:18
                },
                
            ]
        })

        const mouseEnterOrLeave = ref(false)

        const itemWidth = 50  //每条item的高度

        const moveTopPX = computed(()=>{  //计算向上滚动的高度
            return `-${state.dataList.length*itemWidth}px`
        })
        
        return {
            ...toRefs(state),
            moveTopPX,
            itemWidth:`${itemWidth}px`,
            mouseEnterOrLeave,
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes lunbo {
    0%{
        transform: translateX(0px);
    }

    100%{
        transform: translateX(v-bind('moveTopPX'));
    }
}
.lunbo-content{
    position: relative;
    border: 1px solid red;
    height: 150px;
    width: 400px;
    overflow: hidden;

}
.lun-bo-list1{
    position: absolute;
    &.list-animation{
        animation: lunbo 5s infinite forwards;
    }
    height: 100%;
    display: flex;
    .item{
        width:v-bind(itemWidth);
        color: white;
        &:nth-child(2n){
            background: rgba( 16, 60, 105,  1.0);
        }
        &:nth-child(2n+1){
            background: rgba( 16, 20, 105,  1.0);
        }
    }
}

</style>