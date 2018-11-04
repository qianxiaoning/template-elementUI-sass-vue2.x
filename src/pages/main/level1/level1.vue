<template>
    <left_sidebar :aside='aside'>
        <router-view/>
    </left_sidebar>    
</template>
<script>
import left_sidebar from '@/structures/left_sidebar'
export default {
    data(){
        return{
            aside:[
                {name:'level1-1',pathName:'level1-1'},
                {name:'level1-2',pathName:'level1-2'},
                {name:'level1-3',pathName:'level1-3'}
            ]
        }
    },
    components:{
        left_sidebar
    }
}
</script>
<style lang="scss" scoped>

</style>
