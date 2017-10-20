<template>
  <div id="gaojian">
  	<div class="gaojian">
      <router-link to="/">
      <div style="width:100%" class="title">
        <span class="x1" ><</span>
        <span class="x2">{{datalist.id}}、{{datalist.title}}</span>
      </div>
      </router-link>
      <div class="time">
      由<span style="color:blue">{{datalist.account.nickname}}</span> 发布于{{new Date(datalist.account.createTime).getFullYear()}}-{{new Date(datalist.account.createTime).getMonth()+1}}-{{new Date(datalist.account.createTime).getDate()}} {{new Date(datalist.account.createTime).getHours()}}:{{new Date(datalist.account.createTime).getMinutes()}}:{{new Date(datalist.account.createTime).getSeconds()}}
      </div>
      <div class="number">
        <span>浏览数：{{datalist.pageView}}</span>
      </div>
      <div class="til" style="margin-top:-70px">
        <span style="padding:5px;border:1px solid #87ceeb;color:#87ceeb;font-size:16px;">商业稿</span>
      </div>
      <div class="hel">
        <span class="hel-1">{{datalist.costMax}}元</span>
        <span class="hel-1">{{new Date(datalist.updateTime).getFullYear()}}-{{new Date(datalist.updateTime).getMonth()+1}}-{{new Date(datalist.updateTime).getDate()}}</span>
      </div>
      <div class="loo">
        <span class="loo-1">应征：{{datalist.signupCount}}人</span>
        <span class="loo-1" v-if="datalist.status!==0">需求：{{datalist.status}}</span>
        <span class="loo-1" v-else="datalist.status==0">需求：不限</span>
      </div>
      <div class="tolp">
        <div class="tolp-1">
          <router-link to="/gaojian" class="blue">约稿详情</router-link>
        </div>
        <div class="tolp-1">
          <router-link to="/Huashi">应征画师</router-link>
        </div>
        <div class="tolp-1">
          <router-link to="/wode">我的应征</router-link>
        </div>       
      </div>
      <div class="description">
        
      </div>
    </div>
  	<footers></footers>		
  </div>	
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'gaojian',
    data: 
      function(){
        return {
         datalist: []      
        }  
      },
    mounted:function(){
    
      var that = this;
     
      axios.get(`/api/projects/${this.$route.params.t_id}`)
        .then(function(res){
         console.log(res.data);
         that.datalist = res.data;
        })
        .catch(function(){
          console.log("出错了");
        })
    }
  }


</script>

<style lang="scss" scoped>
  @function px2rem($px){
  @return $px/100px *1rem;
  }
     
  .gaojian{
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
      .x2{
        font-size:px2rem(20px);
        display:inline-block;

      }
    }
    .time{
      font-size:px2rem(16px);
      margin-top:px2rem(20px);
    }
    .number{
      font-size:px2rem(16px);
      margin-top:px2rem(10px);
    }
    .hel{
      width:100%;
      font-size:px2rem(16px);
      .hel-1{
        display:inline-block;
        width:50%;
        float:left;
        text-align:center;
        background:#444444;
        padding:px2rem(10px) 0;
        color:white;
      }
    }
    .loo{
       font-size:px2rem(16px);
       .loo-1{
          display:inline-block;
          float:left;
          width:50%;
          text-align:center;
          padding:px2rem(10px) 0;
       }
    }
    a{
      text-decoration:none;
      
    }
    .tolp{
      overflow: hidden;
      background:#ededf1;
      // padding:px2rem(10px) 0;
      width:100%;
      .tolp-1{
        width:33%;
        display:inline-block;
        padding:px2rem(10px) 0;
        font-size:px2rem(16px);
        float:left;
          color:#ccc;
        text-align:center;
        
      }
    }
  }

  .blue{
    color:#4f77e3;
    border-bottom:px2rem(2px) solid #4f77e3;
  }
</style>