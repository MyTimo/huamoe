<template>
  <div id="Thuazuo">
  	<div class="uk-flex"> 
      <router-link to="/Thuazuo" active-class="blue" exact class="tab">最新发布</router-link> 
      <router-link to="/Tpaihang" active-class="blue" exact class="tab">排行榜</router-link> 
    </div>

    <div v-for="item in datalist" class="uk-width-1-2"> 
      <a style="display:block; margin-bottom: 10px !important" href="/accounts/383"> 
        <img class="uk-thumbnail-expand" :src="item.cover"> 
        <div class="nowrap" style="font-size: 14px;padding: 5px;background-color: white">
          <div class="im">
             <img :src="item.avatarUrl" alt="">
          </div> 
          <span class="nam"> {{item.nickname}}</span>
          <i class="iconfont">&#xe61e;</i>
          <span>{{item.zanCount}}</span>
        </div>        
      </a>
    </div>
    <footers>
      
    </footers>
  </div>	
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Thuazuo',
    data: 
      function(){
        return {
         datalist: []      
        }  
      },
    mounted:function(){
      var that = this;
      axios.get(`/api/works?page=1&perPage=12`)
        .then(function(res){
         console.log(res.data);
         that.datalist = res.data.data;
         
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

  a{
    color:black;
    text-decoration: none;
  }
  
  .uk-flex{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:px2rem(37px);
    font-size:px2rem(16px);
    background:white;
    .tab{
      display:inline-block;
      width:50%;
      float:left;
      text-align:center;
      padding:px2rem(5px) 0;
    }
  }
  .blue{
    color:#0f7fdf;
    border-bottom:px2rem(2px) solid #0f7fdf;
  }

  .uk-width-1-2{
      float:left;
      width:50%;
      box-sizing: border-box;
      padding-left: px2rem(10px);
      padding-right: px2rem(10px);

      margin-top:px2rem(20px);

    .uk-thumbnail-expand{
        width:100%;
        float:left;
    }
    .nowrap{
      margin-top:px2rem(10px);
      .im{
        width:px2rem(30px);
        height:px2rem(30px);
        border-radius:50%;

        img{
          width:100%;
          border-radius:50%;
           margin-top:px2rem(10px);
        }
      }
      .nam{
        margin-left:px2rem(40px);
        line-height: px2rem(50px);
      }
      i{
        margin-left:px2rem(25px);
      }
    }   
    }
</style>