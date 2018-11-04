<template>
    <top-nav :nav='nav' class='nav'>
        <router-view/>
    </top-nav>
</template>
<script>
import topNav from '@/structures/topNav'
export default {
    data(){
        return{
            nav:[
                {name:'level2-1',pathName:'level2-1'},
                {name:'level2-2',pathName:'level2-2'},
                {name:'level2-3',pathName:'level2-3'}
            ]
        }
    },
    components:{
        topNav
    }
}
</script>
<style lang="scss" scoped>
.nav{position: absolute;height:100%;width:100%;}
</style>
