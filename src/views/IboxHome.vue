<template>
<div id="home">
    <IboxHeader id="header"></IboxHeader>
    <router-view id="content"></router-view>
</div>
</template>

<script>

import IboxHeader from './../components/IboxHeader.vue'

export default {
    name:'IboxHome',
    components: {
    IboxHeader
  }
}

</script>

<style scoped>

</style>