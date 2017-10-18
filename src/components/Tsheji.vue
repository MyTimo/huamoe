<template>
  <div id="Tsheji">
  	<div class="content-padded"> 
     <div class="uk-grid uk-grid-small"> 
      <div v-for="item in datalist" class="uk-width-1-2"> 
       <div class="product-item" index="1"> 
        <a class="cover"> 
         <img :src="item.cover"> 
        </a>  
        <div class="product-desc"> 
         <div class="meta"> 
          <span class="price" style="font-size:14px">￥{{item.price}}～{{item.priceMax}}</span> 
          <span class="product-hot">人气：{{item.zanCount}}</span> 
         </div> 
         <div class="title">{{item.title}}</div> 
         <div class="account" href="/accounts/28132/designs">{{item.nickname}}</div> 
        </div> 
       </div> 
      </div>
     </div> 
    </div>
    <next></next>  
  	<footers></footers>		
  </div>	
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Tsheji',
    data: 
      function(){
        return {
         datalist: []      
        }  
      },
    mounted:function(){
      var that = this;
      axios.get(`/api/designs?page=1&perPage=10`)
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
  
  .content-padded{
   background:#ededf1;
   .product-item{
    border:px2rem(1px) solid #ccc;
    width:px2rem(177px);
    img{
     width:px2rem(176px);
    }
   }
   .product-desc{
    
     .meta{
     margin-top:px2rem(-100px);
     text-indent:px2rem(10px);
     
     .price{
      color:red;
      font-weight:900;
      font-size:px2rem(18px);
      
     }
     .product-hot{
      color:#999;
      font-size:px2rem(14px);
      margin-left:px2rem(-25px);

     }
    }
    .title{
     font-size:px2rem(14px);
     text-indent:px2rem(10px);
     color:black;
    }
    .account{
     font-size:px2rem(14px);
     text-indent:px2rem(10px);
     color:#81bcee;
    }
   }
   
   
  }
</style>