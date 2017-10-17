<template>
  <div id="Tpaihang">
  	<div class="uk-flex"> 
      <router-link to="/Thuazuo" active-class="blue" exact class="tab" >最新发布</router-link> 
      <router-link to="/Tpaihang" active-class="blue" exact class="tab" >排行榜</router-link> 
    </div>

    <div class="uk-button-group"> 
      <div class="x1">
        <router-link to="/Tpaihang" active-class="bck" exact class="uk-active" href="/works/ranking">昨日点赞榜</router-link> 
      </div>
      <div class="x2">
         <router-link to="/Tqitian" active-class="bck" exact class="uk-active" href="/works/ranking/12">七日点赞榜</router-link> 
      </div>
     
    </div>

    <div v-for="(item,index) in datalist" class="picture">
      <div class="picture-1">
        <img :src="item.cover" alt="">
        <span class="p1">{{index+1}}</span>
        <span class="p2">{{item.nickname}}</span>
      </div>
    </div>

  	<footers></footers>		
  </div>	
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Tpaihang',
    data: 
      function(){
        return {
         datalist: []      
        }  
      },
    mounted:function(){
      var that = this;
      axios.get(`/api/works/ranking/11`)
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

  .uk-button-group{
    width:100%;
    .x1,.x2{
      width:50%;
      float:left;
      margin-top:px2rem(-35px);
    }
    .uk-active{
      width:50%;
      font-size:px2rem(16px);
      text-align: center;
      text-decoration: none;
      color:black;
      margin-left:px2rem(50px);
      padding:px2rem(5px);

    }

  }

  .bck{
    background:#dddddd;
  }

  .Tpaihang{
    width:100%;
    background:#ededf1;
    overflow: hidden
  }   

  .picture{
    font-size:px2rem(16px);
    .picture-1{
      width:50%;
      float:left;
      img{
        width:100%;
      }
      .p1{
        display:inline-block;
        width:px2rem(30px);
        height:px2rem(30px);
        background:#ff6666;
        line-height:px2rem(30px);
        text-align: center;
        border-radius:50%;
      }
      .p2{

      }
    }
  }
</style>