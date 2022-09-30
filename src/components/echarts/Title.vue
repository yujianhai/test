<template>
  <div>
    <div class="title">近7日通统计</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang = "scss" scoped>
    .title{
    position: relative;
    margin-left:12px;
    height: 37px;
    background: #1EC4FF;
    font-size: 28px;
    font-weight: 500;
    color: #171C22;
    line-height: 28px;
    padding: 5px 12px 4px 18px;
    box-sizing: border-box;
    letter-spacing: 1px;

    &::before{
        position: absolute;
        left: -12px;
        top: 0;
        width: 8px;
        height: 37px;
        content: "";
        background: #1EC4FF;
        }

}

</style>