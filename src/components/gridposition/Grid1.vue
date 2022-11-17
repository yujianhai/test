<template>
  <div>
    <div class="container">
        <div class="item" v-for="(item,index) in dataList" :key="index">
            {{item.name}}
        </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
export default {
    props:{
        style:{
            type:Object,
            default:()=>({
                gap:{
                    width:"20px"
                }
            })
        }
    },
    setup(props){

        const state =reactive({
            // gap:"20px",
            dataList:[
                {
                    name:'A',
                    age:18
                },
                {
                    name:'A',
                    age:18
                },
                {
                    name:'A',
                    age:18
                },
                {
                    name:'A',
                    age:18
                },
                {
                    name:'A',
                    age:18
                },
                {
                    name:'A',
                    age:18
                },
                {
                    name:'A',
                    age:18
                },
                {
                    name:'A',
                    age:18
                },
                {
                    name:'A',
                    age:18
                },
              
            ]
        })

        return {
            ...toRefs(state)
        }
    }

}
</script>

<style lang="scss" scoped>
.container{
    // width: 300px;
    // border: 1px solid red;
    // height: 300px;
    display: grid;
    // grid-template-columns: 1fr 1fr;
    // grid-template-rows: 100px 100px 100px 100px 100px 100px;
    grid-template-columns: repeat(3,200px);

    grid-gap:v-bind("style.gap.width");

    grid-template-rows:100px repeat(1,200px) repeat(1,400px);


    .item{
        // width:100px;
        // height:100px;
        background: sandybrown;

        &:nth-child(1){
            background-color: #ef3429;
        }
        &:nth-child(2){
            background-color: #f68f2531;
        }
        &:nth-child(3){
            background-color: #4ba846;
        }
        &:nth-child(4){
            background-color: #0476c2;
        }
        &:nth-child(5){
            background-color: #c077af;
        }
        &:nth-child(6){
            background-color: #f8d29d;
        }
        &:nth-child(7){
            background-color: #b4a87f;
        }
        &:nth-child(8){
            background-color: #d0e4a8;
        }
        &:nth-child(9){
            background-color: #4dc7ec;
        }

        height: 100%;
        text-align: center;
    }
}
</style>