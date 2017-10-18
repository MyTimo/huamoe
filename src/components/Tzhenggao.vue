<template>
  <div id="Tzhenggao">
    <div class="yuegao">
    
  
  	<div class="nul" style="width:100%;height:10px;background:#ccc">
        
     </div>
    <div v-for="item in datalist" class="yuegao"> 
      <a class="loop" href=""> 
        <h3 class="title" style="font-size:18px;margin-bottom: 10px"> {{item.id}}、{{item.title}}</h3> 
        <div  class="tags"> 
          <span class="uk-badge"> 商业稿   </span> 
          <span v-for="items in item.tag.split(',').slice(0,3)" class="uk-badge">{{items}}</span>
          
        </div> 
        <div class="project"> 
          <div class="uk"> 
            <div class="uk-width"> {{item.costMin}}～{{item.costMax}}  元 </div> 
            <div class="uk-width">{{(new Date(item.createTime)).getFullYear()}}-{{(new Date(item.createTime)).getMonth()+1}}-{{(new Date(item.createTime)).getDate()}}</div>
          </div> 
        </div>  
        <div class="meta">
          <div  class="uk-width-1"> 
            <i class="iconfont">&#xe632;</i>&nbsp;{{item.account.nickname.slice(0,3)}}... 
          </div> 
          <div class="uk-width-1"> 已投：{{item.number}}件 </div> 
          <div class="uk-width-1"> 反馈：{{item.replyDay}}天内 </div> 
          
          
        </div> 
        <div style="margin:8px 0">
            <span style="color:green">福利：</span><span style="font-size:16px">{{item.welfare}}</span>
        </div>
      </a> 
      <div class="nul" style="padding-right:20px;padding-left:20px;
      width:100%;height:10px;background:#ccc;margin-left:-20px;margin-right:-20px">
        
      </div>
    </div>
   
    <footers></footers>
    </div>     
  </div>	
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Tzhenggao',
    data: 
      function(){
        return {
         datalist: []      
        }  
      },
    mounted:function(){
      var that = this;
      axios.get(`/api/collects?page=1&perPage=10&doing=0`)
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
  
  .yuegao{
    overflow: hidden;
    padding:px2rem(15px);
    font-size:px2rem(16px);
    .loop{
      overflow: hidden;
      .title{
        font-weight:normal;
      }
      .tags{
        overflow: hidden;
        .uk-badge{
          border:px2rem(1px) solid #87ceeb;
          padding:0 px2rem(3px);
          margin:0 px2rem(3px);
          color: #87ceeb;
          font-size:px2rem(14px);
        }
      }
      .project{
        overflow: hidden;
        margin-top:px2rem(10px);

        .uk-width{
          text-align: center;
          width:45%;
          float:left;
          background:#444444;
          color:white;
          padding:px2rem(5px);
        }
      }
      .meta{
        overflow: hidden;
        margin-top:px2rem(10px);
        .uk-width-1{
          width:30%;
          float:left;
          font-size:px2rem(14px);
          color:#b5b5b5;
        }
      }
    }
  }
</style>