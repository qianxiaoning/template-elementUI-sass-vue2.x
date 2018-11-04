<template>
    <div class='login_wrap'>
        login
        <button @click='login'>登录</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        login(){
            this.$router.push({
                path: '/main'
            });
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
