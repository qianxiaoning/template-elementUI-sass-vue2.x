<template>
    <div class='topNav flex fd-c'>
        <nav class='nav f-n'>
            <router-link class='nav_link' active-class="active" v-for='(item,index) in nav' :key='index' :to="{name:item.pathName}" tag='a'>{{item.name}}</router-link>
        </nav>
        <div class='container f-a'>
            <slot></slot>    
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        nav:{        
            type: Array,
            default() {
                return [];
            }
        }
    }    
}
</script>
<style lang="scss" scoped>
.topNav{
    height:100%;
    .nav{
        .nav_link{
            &.active{color:red;}
        }
    }
    .container{
        position: relative;
    }
}
</style>
