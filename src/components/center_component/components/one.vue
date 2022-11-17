<template>
  <div @click="handleClick($event)">
    <div class="item" v-for="item in data" :key="item.id">
      <div class="left">
        <span>
          {{ item.id }}
        </span>
        <span>
          {{ item.name }}
        </span>
        <span>{{ item.age }}</span>
        <span>{{ item.address }}</span>
      </div>
      <div class="right">
        <button :data-item-value="JSON.stringify(item)">修改</button>
        <!-- <button @click="handleUpdate(item)">修改</button> -->
        <button @click="handleDelete(item.id)">删除</button>
        <button @click="showInsertPanel = !showInsertPanel">添加</button>
      </div>
    </div>
    <teleport to="body">
      <UpdatePanel
        class="panel-update"
        :information="information"
        @cancelPanel="handleUpdate"
        v-if="showPanel"
      />
    </teleport>

     <teleport to="body">
      <InsertPanel
      @cancelPanel ="handleInsert"
        class="panel-insert"
        v-if="showInsertPanel"
      />
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import UpdatePanel from '../../fix_panel/UpdatePanel'
import InsertPanel from '../../fix_panel/InsertPanel'
import { onMounted, reactive, ref, toRefs } from 'vue'
const state = reactive({
  showPanel: false,
  showInsertPanel:false,
  data: null,
  information: null,
})
const handleUpdate = (item: any): void => {
  state.information = item
  state.showPanel = !state.showPanel
}

const handleInsert = ():void=>{
    console.log('哈哈哈哈');
    
    state.showInsertPanel = false
}

const handleDelete = (id: number): void => {
  const index = state.data.findIndex((item) => item.id === id)
  state.data.splice(index, 1)
}

const handleClick = (ev)=>{
  const data = ev.target.dataset.itemValue
  
  if(data){
    state.information =JSON.parse(data)
    state.showPanel = !state.showPanel
  }
    
}

const { data, information, showPanel,showInsertPanel } = toRefs(state)

onMounted(() => {
  axios.get('/json/person.json').then((res) => {
    state.data = res.data
  })
})
</script>

<style lang="scss" scoped>
.item {
  height: 50px;
  border-bottom: 1px solid skyblue;
  display: flex;
  .left {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .right {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
      width: 120px;
      border: 1px solid azure;
      height: 30px;
      color: honeydew;
      font-size: 15px;
      border-radius: 5px;
      letter-spacing: 3px;
    }
    & > button:nth-child(1) {
      //修改按钮
      background: green;
    }

    & > button:nth-child(2) {
      //删除按钮
      background: pink;
    }

    & > :nth-child(3) {
      //添加按钮
      background: skyblue;
    }
  }
}
@keyframes identifier {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.panel-update {
  animation: identifier 2s;
}
.panel-insert {
  animation: identifier 2s;
}
</style>
