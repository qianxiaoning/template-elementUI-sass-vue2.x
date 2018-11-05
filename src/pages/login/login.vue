<template>
    <div class='login_wrap'>
        login
        <button @click='login'>登录</button>
    </div>
</template>
<script>
import jsmd5 from 'js-md5'
export default {
    data(){
        return{
            loginName:'test01'
        }
    },
    methods:{
        async login(){                        
            // const res = await this.$http.post(this.$urls.login,{});
            console.log(res);
            this.$router.push({
                path: '/main'
            });
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
