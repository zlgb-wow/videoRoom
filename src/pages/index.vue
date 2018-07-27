<template>
    <div id="index">
        <div id="header">
            <vheader></vheader>
        </div>
        <div id="aside">
            <vaside></vaside>
        </div>
        <div id="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import vheader from 'pages/header.vue'
import vaside from 'pages/aside.vue'
export default {
    components:{
        vheader,
        vaside
    }
}
</script>

<style scoped lang="less">
@import url('../assets/css/index.less');
</style>
