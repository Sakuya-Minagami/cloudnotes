<template class="back">
    <form action="" class="login-container">
        <p>Login</p>
        <input type="text" placeholder="用户名" 
        v-model="username"><br/>
        <input type="password" placeholder="密码" 
        v-model="password"><br/>
        <span @click="handleLogin" class="btn">登录</span>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods:{
            handleLogin(){

                if(this.username === '' || this.password === ''){
                    alert('请输入完整哟！(゜▽＾*))')
                }else{
                    this.$router.push({path:'./notes'})
                }
            }
        }
    }
</script>

<style scoped>
    
    .login-container{
    
    position : absolute;
    top: 50px;
    margin-top: 200px;
    left: 50%;
    margin-left: -400px;
    background-color: whitesmoke;
    width: 300px;
    height: 400px;
    border-radius: 25px;
    
    }
    p{
    font-size: 42px;
    font-weight: 600;
}

input{
    background-color: whitesmoke;
    width: 100px;
    height: 48px;
    transform: translate(100%,-50%);
    text-align:center;
    margin-bottom: 10px;
    border: none;
    border-bottom: 2px solid silver;
    outline: none;
    font-size: 22px;
}

.btn{
    background-color: #59c2c5;
    width: 38%;
    height: 48px;
    transform: translate(90%,-50%);
    border-radius: 8px;
    margin-top: 40px;
    font-size: 28px;
    font-weight: 600;
    color: white;
    margin-left: 120px;
}
.btn:hover{
    background-color: #59c2a0;

}
</style>
