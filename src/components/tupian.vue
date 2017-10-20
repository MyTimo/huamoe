<template>
  <div id="tupian">

  	<div class="title">
      <router-link to="/">
        <span class="jo"><</span>
        <span class="ko">{{datalist.title}}</span>
        <span class="lp"><i style="font-size:24px" class="iconfont">&#xe61e;</i>{{datalist.zanCount}}</span>
      </router-link>
    </div>
    <div class="foo">
      <span class="kl">【{{datalist.type}}】</span>
      <span></span>共{{datalist.images.length}}P
      <span>发布于{{datalist.createTime}}</span>
    </div>
    <div class="too">
      <span>发布者:<span class="po">{{datalist.nickname}}</span></span>
    </div>
    <div class="number">
      <span>浏览数：{{datalist.pageView}}</span>
    </div>
    <div class="rop">
      <span v-for="item in datalist.tag">{{item}}</span>
    </div>
    <div class="zuo" v-if="datalist.role">
      <i class="iconfont">&#xe632;</i>
      <span v-for="items in datalist.role">{{items}}</span>
    </div>
    <div class="gup" v-if="datalist.eventTitle">
      <i class="iconfont">&#xe64e;</i>
      <span>{{datalist.eventTitle}}</span>
    </div>
    <div v-for="ite in datalist.images" class="pic">
      <img :src="ite" alt="">
    </div>
    <div class="inp">
      <input type="text" name="" value="这里可以写评论">
    </div>
    <div class="bon">
      <button>发表评论</button>
    </div>
    <div class="kp">
      <span>无更多评论</span>      
    </div>
    <div class="pw">
      
    </div>

  	<footers></footers>		
  </div>	
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'tupian',
    data: 
      function(){
        return {
         datalist: []      
        }  
      },
    mounted:function(){
      var that = this;
      axios.get(`/api/works/${this.$route.params.p_id}`)
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

<style lang="scss">
  @function px2rem($px){
  @return $px/100px *1rem;
  }
  
  #tupian{
    font-size:px2rem(16px);
    width:100%;
    .title{
      width:100%;
      
      .jo{
        display:inline-block;
        font-size:px2rem(30px);
        width:px2rem(40px);
        height:px2rem(40px);
        border:px2rem(1px) solid #ccc;
        border-radius:50%;
        text-align: center;
        font-weight: 900;
        line-height: px2rem(33px);
      }
      .ko{
        font-size:px2rem(24px);
      }
      .lp{
        float:right;
        font-size:px2rem(24px);
        line-height: px2rem(30px);
      }

    }
    .foo{
        width:100%;
        font-size:px2rem(15px);
        overflow:hidden;
        margin-top:px2rem(10px);
        .kl{
          color:#0077dd;
        }
    }
    .too{
       font-size:px2rem(14px);
      margin-left:px2rem(8px);
      margin-top:px2rem(5px);
      .po{
        color:#0077dd;
      }
    }
    .number{
      font-size:px2rem(14px);
       margin-left:px2rem(8px);
      margin-top:px2rem(5px);
    }
    .rop{
      margin-left:px2rem(3px);
        margin-top:px2rem(10px);
        border-bottom:px2rem(1px) solid #ccc;
        padding-bottom:px2rem(10px);
      span{
        padding:0 px2rem(5px);
        border:px2rem(1px) solid #87ceeb;
        font-size:px2rem(14px);
        color: #87ceeb;
        margin-left: px2rem(5px);
        
      }
    }
    .zuo,.gup{
       margin-left:px2rem(8px);
      margin-top:px2rem(5px);
    }
    .pic{
      background:#ededf1;
      padding:px2rem(10px);
      img{
        width:100%;
        border:px2rem(1px) solid #999;
      }
    }
    .inp{
      width:100%;
      margin-top:px2rem(20px);
      input{
        width:100%;
        height:px2rem(40px);
      }
    }
    .pw{
      width:100%;
      height:px2rem(50px);
      background:white;
    }
    .bon{
      width:100%;
      overflow:hidden;

      button{
        width:px2rem(80px);
        height:px2rem(40px);
        border:none;
        float:right;
        background:#00a8e6;
        color:white;
      }
    }
    .kp{
      text-align:center;
      width:100%;
      span{

      }
    }
  }
</style>