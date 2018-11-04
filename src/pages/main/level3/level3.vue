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
                {name:'level3-1',pathName:'level3-1'},
                {name:'level3-2',pathName:'level3-2'},
                {name:'level3-3',pathName:'level3-3'}
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
