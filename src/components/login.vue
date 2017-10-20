<template>
  <div id="login">
  	<span>昵称</span><br>
      <input type="text" name="" value="昵称" v-model="username">
      <br>
      <span>密码</span><br>
      <input type="text" name="" value="密码" v-model="password">
      <button @click="reg()">登录</button>
  </div>	
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'login',
    data: 
      function(){
        return {
         username:'',
         password:''
         
        }  
      },
    
      methods:{
        reg:function(){
      var that = this;
        axios.post("/ap2/login/","username="+this.username+"&password="+this.password)
        .then(function(res){
          if(res.data){
            that.$router.replace({ path: '/tuijian'})  
          }else{
            alert('lose')
          }
        })
        .catch(function(err){
          console.log('xxx')
        })
      }
      }
  }
</script>

<style lang="scss" scoped>
  @function px2rem($px){
  @return $px/100px *1rem;
  }
 #login{
      margin-top:px2rem(80px);
      font-size:px2rem(20px);

      input{
        width:100%;
        height:px2rem(30px);
        margin-top:px2rem(40px);
        margin-bottom:px2rem(40px);
        background:#ededf1;

      }
      button{
        width:px2rem(100px);
        height:px2rem(50px);
        position:fixed;
        top:px2rem(350px);
        left:px2rem(140px);
        font-size:px2rem(20px);
        border:none;
      }
    }
</style>