<!-- 翻牌器 -->
<template>
    <div class="number-scoller" :style="`width:${config.width}px`">
        <div class="box" v-for="(item, index) in config.num.length" :key="index">
            <div class="box-number-bgc">
                <div class="box-item">
                    <li
                        class="number-item"
                    >
                        <span>
                            <i class="number-linear"  ref="numberItems">0123456789</i>
                        </span>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted,watch,reactive, ref, toRefs } from 'vue'
export default {
    props:{
        config:{
            type:Object,
            default:()=>({
                width:0,
                num:'88888'
            })
        }
    },
    setup(props){
        const state = reactive({
            orderNum:[],
            time:2,
            flag:true
        })

        const toOrderNum = (value)=>{
               if (value) {
                let num = value;
                num = num.toString();
                state.orderNum = num.split('');
            }
        }

        const numberItems = ref(null)
        const setNumberTransform = ()=>{
            const numberItemsNum = numberItems.value;
            if (numberItemsNum) {
                const numberArr = state.orderNum.filter(item => (item));
                // translate对数字字符进行滚动
                for (let index = 0; index < numberItemsNum.length; index += 1) {
                    const elem = numberItemsNum[index];
                    elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`;
                }
            }
        }

        const getNumber = (str)=> {
            const val = str;
            const arr = val.split('');
            return arr.join('');
        } 

        watch(props,(newVal)=>{
            setTimeout(()=>{
                if (props.config.num) {
                    state.time = 0;
                    if (state.flag) {
                        toOrderNum(getNumber(props.config.num));
                    }
                    setNumberTransform();
                    // setTimeout(() => {
                    //     state.time = 2;
                    //     toOrderNum(newVal.num);
                    //     setNumberTransform();
                    // }, 300);
                }
            },100)
        },{
            immediate: true,
            deep: true,
        })

        onMounted(()=>{
            setNumberTransform()
        })

        return {
            numberItems,
            ...toRefs(state)
        }
    }
}
</script>

<style lang="scss" scoped>
.number-scoller {
    display: flex;
    // background-color: red;
    justify-content: space-between;

    .box {
        width: 124px;
        height: 152px;
        // clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 5% 47%, 94% 47%, 94% 53%, 0 53%, 25% 100%, 100% 100%, 100% 0%); //文字切割

        .box-number-bgc {
            position: relative;
            left: 10px;
            top: 4px;

            .box-item {
                position: relative;
                font-size: 102px;
                font-weight: 600;
                line-height: 100px;
                text-align: center;
                list-style: none;
                writing-mode: vertical-lr;
                text-orientation: upright;
                overflow: hidden;
                color: #ffce75;
                user-select: none;
            }

            .number-item {
                width: 100px;
                height: 130px;
                list-style: none;
                margin-right: 5px;
                margin-top: -10px;
                border-radius: 4px;

                & > span {
                    position: relative;
                    display: inline-block;
                    margin-right: 10px;
                    width: 100%;
                    height: 100%;
                    writing-mode: vertical-rl;
                    text-orientation: upright;
                    overflow: hidden;

                    & > i {
                        font-style: normal;
                        position: absolute;
                        top: 11px;
                        left: 50%;
                        transform: translate(-50%, 0);
                        transition: transform 4s ease-in-out;
                        letter-spacing: 10px;
                    }
                }
            }

            .number-item:last-child {
                margin-right: 0;
            }
        }
    }
}

</style>
