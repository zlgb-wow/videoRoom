<template>
    <div class="aside">
        <ul>
            <router-link tag="li" :to='{name:"a"}'>跳转1</router-link>
            <router-link tag="li" :to='{name:"b"}'>跳转2</router-link>
            <router-link tag="li" :to='{name:"c"}'>跳转3</router-link>
            <router-link tag="li" :to='{name:"d"}'>跳转4</router-link>
        </ul>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
export default {
    
}
</script>

<style scoped lang="less">
@import url('../assets/css/aside.less');
</style>