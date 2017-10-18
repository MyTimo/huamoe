<template>
  <div id="tupian">

  	<div class="title">
      <span class="jo"><</span>
      <span class="ko">{{datalist.title}}</span>
      <span class="lp"><i style="font-size:24px" class="iconfont">&#xe61e;</i>{{datalist.zanCount}}</span>
    </div>
    <div class="foo">
      <span></span>共{{datalist.images.length}}P
      <span>发布于</span>
    </div>
    <div class="too">
      <span>发布者:</span>
    </div>
    <div class="number">
      <span>浏览数：</span>
    </div>
    <div class="rop">
      <span></span>
    </div>
    <div class="zuo">
      <i></i>
      <span></span>
    </div>
    <div class="gup">
      <i></i>
      <span></span>
    </div>
    <div class="pic">
      <img src="" alt="">
    </div>
    <div class="inp">
      <input type="button" name="" value="">
    </div>
    <div class="bon">
      <button type=""></button>
    </div>
    <div class="kp">
      <span></span>      
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
  }
</style>