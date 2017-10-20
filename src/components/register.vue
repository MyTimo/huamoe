<template>
  <div id="register">
    <router-link to="/wode">
      <div style="width:100%" class="title">
        <span class="x1" ><</span>
        
      </div>

      <span>昵称</span><br>
      <input type="text" name="" value="昵称" v-model="username">
      <br>
      <span>密码</span><br>
      <input type="text" name="" value="密码" v-model="password">
      <button @click="reg()">注册</button>
    </router-link>  
  </div>	
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'register',
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
        axios.post("/ap2/register/","username="+this.username+"&password="+this.password)
        .then(function(res){
          if(res.data){
            that.$router.replace({ path: '/login'})  
          }else{
            alert('您的用户名已被注册')
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

    #register{
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
      .title{
      width:100%;
      margin-top:px2rem(-40px);
      border-bottom:px2rem(1px) solid #ccc;
      .x1{
        display:inline-block;
        width:px2rem(40px);
        height:px2rem(40px);
        font-size:px2rem(30px);
        font-weight:900;
        line-height: px2rem(30px);
        border:1px solid #ccc;
        text-align: center;
        border-radius:50%
      }
      
    }
    }
   
</style>