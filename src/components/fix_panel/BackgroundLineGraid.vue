<template>
  <div>
    <div class="content">
        背景颜色渐变
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content{
    width: 300px;
    height: 300px;
    border: 1px solid red;
    background-image: linear-gradient(90deg,#63a4ff 20%,black 20%,red 80%,#63a4ff 80%,#63a4ff 100%);
    color: white;
    font-size: 40px;
    text-align: center;
    line-height: 300px;
}

</style>