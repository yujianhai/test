<template>
  <div>
    <div class="content">
        <img :class="[openAnimation?'start-animation':'end-animation']" @mousemove="openAnimation=true" @mouseleave="openAnimation=false" :src="ani1" alt="">
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import ani1 from '../../assets/animation1.png'
export default {
    setup(){
        const img1 = ref(ani1)
        const openAnimation = ref(null)
        return {
            ani1,
            openAnimation
        }

    }
}
</script>

<style lang="scss" scoped>
@keyframes identifier {
    from{
        top: 0;
    }
    to{
        transform: translateY(-2560px);
    }
}

@keyframes identifierReverse {
    from{
        transform: translateY(-2560px);
    }
    to{
        top: 0px;
    }
}

.content{
    position: relative;
    width: 120px;
    height: 120px;
    border: 1px solid red;
    overflow: hidden;

    .start-animation{
        position: absolute;
        animation: identifier 0.8s forwards steps(20,end);
    }

    .end-animation {
        position: absolute;
        animation: identifierReverse 0.5s forwards steps(20,end);
    }
}
</style>