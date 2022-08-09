<template>
<div>
    <div id="scroll">
        <Scroll></Scroll>
    </div>
    <div>
        
    </div>
</div>

  
</template>

<script>

import Scroll from '../../components/Scroll.vue'

export default {
    name: 'home',
    components:{
        Scroll,
    }
}
</script>


<style scoped>
#scroll{
    /* 元素的最小宽度 */
    min-width: 1500px;
}
</style>