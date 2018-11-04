<template>
    <top-nav :nav='nav'>
        <router-view/>
    </top-nav>
</template>
<script>
import topNav from '@/structures/topNav'
export default {
    data(){
        return{
            nav:[
                {name:'level1',pathName:'level1'},
                {name:'level2',pathName:'level2'},
                {name:'level3',pathName:'level3'}
            ]
        }
    },
    components:{
        topNav
    }
}
</script>
<style lang="scss" scoped>

</style>
