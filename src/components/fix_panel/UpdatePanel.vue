<template>
  <div>
    <div ref="dom" :class="['container']">
      <div class="main">
        <h3>修改页面弹窗</h3>
        <span @click="handelCancel" class="cancel">X</span>
        <div class="table">
          <div class="message" v-if="showChangeSuccess">修改成功</div>
          <div
            class="item"
            v-for="(item, index) in Object.keys(information)"
            :key="index"
          >
            <div class="left">
              <span>
                {{ item }}
              </span>
            </div>
            <div class="right">
              <input type="text" :value="information[item]" />
            </div>
          </div>
          <div class="bottom">
            <button @click="handelUpdate(item)">修改</button>
            <button @click="handelCancel">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  defineEmits,
  toRef,
  defineProps,
  ref,
  onBeforeUnmount,
  onMounted,
} from 'vue'
//定义了向父组件发送消息的函数
const showChangeSuccess = ref(false)
type Props = {
  id?: number
  name?: string
  age?: number
  address?: string
}
const emit = defineEmits<{
  (e: 'cancelPanel', flag: boolean): void //e:表示形参，后面的是参数的名称，flag也是形参，接着是参数的类型
  (e: 'update', data: Props): void
}>() //相当于定义了一个函数，当需要向父组件发送消息时，就相当于调用了其中的函数

//定义了接收父组件传入的数据的函数
const props = defineProps<{
  information: Props
}>()
const information = toRef(props, 'information')
//定义点击触发的函数
const handelCancel = () => {
  emit('cancelPanel', false)
}

const handelUpdate = (data: Props): void => {
  emit('updateData', information)
  showChangeSuccess.value = true
  setTimeout(() => {
    emit('cancelPanel', false)
  }, 2300)
}

//vue的生命周期函数
const dom = ref(null)
</script>

<style lang="scss" scoped>
@keyframes identifier {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.container {
  position: absolute;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 30, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    position: relative;
    width: 500px;
    height: 500px;
    background: whitesmoke;
    h3 {
      text-align: center;
      margin-top: 10px;
    }
    .cancel {
      position: absolute;
      width: 30px;
      height: 30px;
      text-align: center;
      right: 5px;
      top: 5px;
      font-size: 25px;
      color: red;
      border: 1px dotted red;
      cursor: pointer;
    }
    .table {
      position: absolute;
      height: 80%;
      width: 100%;
      top: 20%;
      left: 0;
      .message {
        width: 30%;
        height: 10%;
        background: green;
        position: absolute;
        left: 38%;
        top: 30%;
        color: white;
        border-radius: 4px;
        text-align: center;
        line-height: 40px;
        animation: identifier 2s;
      }
      .item {
        display: flex;
        margin: 10px auto;
        width: 75%;
        .left {
          width: 20%;
          text-align: center;
          line-height: 30px;
        }
        .right {
          width: 80%;
          input {
            width: 100%;
            height: 30px;
            border: 1px solid silver;
          }
        }
      }

      .bottom {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        button {
          width: 130px;
          height: 32px;
          font-size: 15px;
          border-radius: 5px;
        }
        & button:nth-of-type(1) {
          border: 1px solid green;
        }
        & button:nth-of-type(2) {
          border: 1px solid red;
        }
      }
    }
  }
}
</style>
