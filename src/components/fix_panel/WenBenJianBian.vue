<template>
  <div>
    <div class="content">
        <div>文本渐变内容</div>
        <div>文本渐变内容</div>
        <div>文本渐变内容</div>
        <div>文本渐变内容</div>
        <div>文本渐变内容</div>
        <div>文本渐变内容</div>
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
    font-size: 40px;
    background-image:-webkit-linear-gradient(top,black 16%,blue 34%,red 34%,white 50%,white 50%,skyblue 80%, skyblue 100%); 
    -webkit-background-clip:text; 
    -webkit-text-fill-color:transparent; 
}

</style>