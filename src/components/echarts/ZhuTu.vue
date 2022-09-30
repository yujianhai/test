<template>
  <div class="content">
    <div class="yuanzhu3" :style="{ '--data3': v3 }"></div>
    <div class="yuanzhu2" :style="{ '--data2': v2 }"></div>
    <div class="yuanzhu1" :style="{ '--data1': v1 }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v1: "20%",
      v2: "70%",
      v3: "50%",
    };
  },
};
</script>

<style lang="scss" scoped>
@keyframes top1 {
  from {
    height: 0%;
  }
  to {
    height: var(--data1);
  }
}
@keyframes top2 {
  from {
    height: 0%;
  }
  to {
    height: var(--data2);
  }
}
@keyframes top3 {
  from {
    height: 0%;
  }
  to {
    height: var(--data3);
  }
}

.content {
  display: flex;
  transform: rotate(180deg);
  width: 300px;
  height: 300px;
  border: 1px solid red;
  .yuanzhu1 {
    position: relative;
    height: var(--data1);
    width: 50px;
    background: -webkit-linear-gradient(left, #0158a9, #0158a9);
    margin: 50px auto;
    z-index: 999;
    animation: top1 3s;
    &::before {
      position: absolute;
      bottom: -10px;
      content: "";
      width: 50px;
      height: 20px;
      border-radius: 50%;
      background: -webkit-linear-gradient(left, #0158a9, #0095cf);
      z-index: 99;
    }

    &::after {
      position: absolute;
      top: -10px;
      content: "";
      width: 50px;
      height: 20px;
      border-radius: 70%;
      background: #0158a9;
      z-index: 9;
    }
  }

  .yuanzhu2 {
    position: relative;
    height: var(--data2);
    width: 50px;
    background: -webkit-linear-gradient(left, #957918, #957918);
    margin: 30px auto;
    z-index: 999;
    animation: top2 3s;
    &::before {
      position: absolute;
      bottom: -10px;
      content: "";
      width: 50px;
      height: 20px;
      border-radius: 50%;
      background: #957f18;
      z-index: 99;
    }

    &::after {
      position: absolute;
      top: -10px;
      content: "";
      width: 50px;
      height: 20px;
      border-radius: 50%;
      background: -webkit-linear-gradient(left, #957f18, #957f18);
      z-index: 9;
    }
  }
  .yuanzhu3 {
    position: relative;
    height: var(--data3);
    width: 50px;
    background: -webkit-linear-gradient(left, #0f5978, #0f5978);
    margin: 50px auto;
    z-index: 999;
    animation: top3 3s;
    &::before {
      position: absolute;
      bottom: -10px;
      content: "";
      width: 50px;
      height: 20px;
      border-radius: 50%;
      background: -webkit-linear-gradient(left, #082259, #0f5978);
      z-index: 99;
    }

    &::after {
      position: absolute;
      top: -10px;
      content: "";
      width: 50px;
      height: 20px;
      border-radius: 50%;
      background: #0f5978;
      z-index: 9;
    }
  }
}
</style>>
