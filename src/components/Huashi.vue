<template>
  <div id="Huashi">
    <huashiHeader></huashiHeader>  

  	<div v-for="item in datalist" class="huashi" index="0"> 
     <div class="huashi-1"> 
      <a  class="huashi-1-1" href="/accounts/11212"> 
       <img class="cl" :src="item.avatarUrl"> 
      </a>
      <div class="huashi-1-2"> 
       <a class="nickname" href="/accounts/11212">{{item.nickname}}</a> 
       <button class="uk-button" type="button"> 
        <b>+</b>&nbsp;关注   
       </button>  
      </div> 
      <div class="tags"> 
       <span v-for="items in item.tags.slice(0,3)" class="uk-badge">{{items}}</span>
      </div> 
      <hr style="margin: 115px 0;
     width:100%;position:absolute;top:px2rem(100px);left:0;">
     </div> 
     
     <div class="uk-grid"> 
      <div class="uk-width-1-4"> 
       <router-link :to="{name:'tupian',params:{p_id:items.workId}}" v-for="items in item.works"  class="as">
        <img :src="items.cover">
       </router-link> 
      </div>
      <div class="m1">
       
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
    name: 'Huashi',
    data: 
      function(){
        return {
         datalist: []      
        }  
      },
    mounted:function(){
      var that = this;
      axios.get(`/api/artists`)
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
    text-decoration: none;
    color:black;
  }
  
  

  .huashi{
   width:100%;
   overflow:hidden;
   .huashi-1{
    width:100%;
    margin-top:px2rem(-20px);
    float:left;
    .huashi-1-1{

     float:left;
     width:px2rem(50px);
     height:px2rem(50px);
     top:px2rem(10px);
     left:px2rem(10px);
     position:relative;
     .cl{
      width:px2rem(50px);
      height:px2rem(50px);
      border-radius:50%;
     }
     .icon{
      width:px2rem(20px);
      height:px2rem(20px);
      position:absolute;
      top:px2rem(50px);
      left:px2rem(30px);
     }
    }
    .huashi-1-2{

     float:left;
     margin-top:px2rem(-30px);
     margin-left:px2rem(30px);
     .nickname{
      font-size:px2rem(14px);
     }
     .uk-button{
      border:none;
      background:white;
      color:#0077dd;
     }
    }
    .tags{
     position:relative;
     top:px2rem(100px);
     left:0;
     font-size:px2rem(14px);
     

     span{
      display:inline-block;
      width:px2rem(60px);
      text-align: center;
      height:px2rem(20px);
      border:px2rem(1px) solid #87ceeb;
      color:#87ceeb;
      
      margin-right:px2rem(-130px);
      
      
     }
    }
   }
   .uk-grid{
     position:relative;
     .uk-width-1-4{
      
      .as{
      
       width:100%;
       
       margin-top:px2rem(100px);

       img{
        margin-top:px2rem(40px);
        width:21%;
        float:left;
        padding:px2rem(5px);
        border:px2rem(1px) solid #ccc;
       }
      }     
    }    
   }
  }

  .m1{
   width:100%;
   background:#ccc;
   height:px2rem(10px);
   position:absolute;
   top:0;
   left:0
  }
  
</style>