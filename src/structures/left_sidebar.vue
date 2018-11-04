<template>
    <div class='left_sidebar flex'>
        <div class='left'>
            <ul>
                <router-link class='aside_link' active-class="active" v-for='(item,index) in aside' :key='index' :to="{name:item.pathName}" tag='li'>{{item.name}}</router-link>
            </ul>
        </div>
        <div class='right'>
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
        aside:{        
            type: Array,
            default() {
                return [];
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.left_sidebar{
    width:100%;height:100%;position: absolute;
    .left,.right{height:100%;}
    .left{
        width:20%;
        .aside_link{
            &.active{color:red;}
        }
    }
    .right{width:80%;}
}
</style>


