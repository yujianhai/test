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
                            <i class="number-linear" :style="`transition:transform ${time}s ease-in-out`" ref="numberItem">0123456789</i>
                        </span>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        config: {
            type: Object,
            default: () => ({
                width: 0,
                num: '888888',
            }),
        },
    },
    data() {
        return {
            orderNum: [],
            time: 2,
            flag: true,
        };
    },
    watch: {
        config: {
            handler(newVal) {
                setTimeout(() => {
                    if (this.config.num) {
                        this.time = 0;
                        if (!this.flag) {
                            this.toOrderNum(this.getNumber(this.config.num));
                        }
                        if (this.flag) {
                            this.toOrderNum('000000');
                        }
                        this.setNumberTransform();
                        setTimeout(() => {
                            this.time = 2;
                            this.toOrderNum(newVal.num);
                            this.setNumberTransform();
                        }, 100);
                    }
                }, 300);
            },
            immediate: true,
            deep: true,
        },
    },
    mounted() {
        this.flag = false;
        // setTimeout(() => {
        //     this.flag = false;
        // }, 5000);
    },
    methods: {
        // 设置文字滚动
        setNumberTransform() {
            const numberItems = this.$refs.numberItem;
            if (numberItems) {
                const numberArr = this.orderNum.filter(item => (item));
                // translate对数字字符进行滚动
                for (let index = 0; index < numberItems.length; index += 1) {
                    const elem = numberItems[index];
                    elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`;
                }
            }
        },
        toOrderNum(value) {
            if (value) {
                let num = value;
                num = num.toString();
                this.orderNum = num.split('');
            }
        },
        getNumber(str) {
            const val = str;
            const arr = val.split('');
            arr[arr.length - 1] = '0';
            arr[arr.length - 2] = '0';
            return arr.join('');
        },
    },
};
</script>

<style lang="scss" scoped>
.number-scoller {
    display: flex;
    // background-color: red;
    justify-content: space-between;

    .box {
        width: 124px;
        height: 152px;
        // background: url('../../assets/imgs/gundongqi-bgc.svg') 100% 100% no-repeat;
        clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 5% 47%, 94% 47%, 94% 53%, 0 53%, 25% 100%, 100% 100%, 100% 0%);

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
                        // transition: transform 1.5s ease-in-out;
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
