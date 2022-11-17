//竖向轮播
<template>
<div class="lunbo-content">
    <div 
    :class="['lun-bo-list1']" ref="dom" :style="{'transition':top!==0?'top 1.1s':'','left':'0px'} ">  
            <div class="item" v-for="item in dataList" :key="item.id">
                <span> {{item.id}}</span> &nbsp;&nbsp;
                <span> {{item.age}} </span>&nbsp;&nbsp;
                <span> {{item.name}} </span>
            </div>
    </div>

     <div 
    :class="['lun-bo-list2']" ref="dom" :style="{'transition':top2!==dataList.length*itemHeight?'top 1.1s':'','left':'0px'} ">  
            <div class="item" v-for="item in dataList" :key="item.id">
                <span> {{item.id}}</span> &nbsp;&nbsp;
                <span> {{item.age}} </span>&nbsp;&nbsp;
                <span> {{item.name}} </span>
            </div>
    </div>
</div>
</template>
<script>
import { reactive, ref, toRefs } from '@vue/reactivity'
import { computed, onMounted, onUnmounted } from '@vue/runtime-core'
export default {
    setup(){
        const state = reactive({
            dataList:[
                {
                    id:"001",
                    name:"张三11",
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
                // {
                //     id:"007",
                //     name:"张三",
                //     age:18
                // },
                // {
                //     id:"008",
                //     name:"张三",
                //     age:18
                // },
                // {
                //     id:"009",
                //     name:"张三",
                //     age:18
                // },
                // {
                //     id:"010",
                //     name:"张三",
                //     age:18
                // }
            ],
            top:0,
            top2:0
        })
        const speed = 720;

        const itemHeight = 50;

        const dom = ref(null )

        state.top2 = state.dataList.length*itemHeight;

        const to2 = computed(()=> state.top2 +"px")

        const to = computed(()=> state.top +"px")
        
        let timer = null


        onMounted(()=>{
            timer =  setInterval(()=>{
                state.top -=itemHeight;
                state.top2 -=itemHeight
            },speed)

            setInterval(()=>{
                state.top = 0
                state.top2 = state.dataList.length*itemHeight
            },((state.dataList.length+1)*speed))
        })

        onUnmounted(()=>{
            clearInterval(timer)
        })

        return {
            ...toRefs(state),
            dom,
            to ,
            to2,
            itemHeight,
            itemPX:`${itemHeight}px`
            }
    }
}
</script>

<style lang="scss" scoped>
@keyframes lunbo {
    0%{
        transform: translateY(0px);
    }

    100%{
        transform: translateY(-50px);
    }
}
.lunbo-content{
    position: relative;
    height: 300px;
    width: 300px;
    overflow: hidden;
}

.lun-bo-list1{

    position: absolute;
    width: 100%;
    height: 100%;
    top: v-bind(to);
    .item{
        height:v-bind(itemPX);
        color: white;
        &:nth-child(2n){
            background: rgba( 16, 60, 105,  1.0);
        }
        &:nth-child(2n+1){
            background: rgba( 16, 20, 105,  1.0);
        }

    }
}
.lun-bo-list2{
    position: absolute;
    width: 100%;
    height: 100%;
    top: v-bind(to2);
    .item{
        height:v-bind(itemPX);
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