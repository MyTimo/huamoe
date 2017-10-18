<template>
  <div id="Thuodong">
  	<div class="huodong">

      <div v-for="item in datalist" class="o1">
        <img :src="item.banner" alt="">
        <div class="o3" style="overflow:hidden;margin-top:-120px;margin-left:-30px">
          <ul>
            <li style="
            float:left">
              <img style="width:50px;height:50px;float:left;" :src="item.account.avatarUrl" alt="">
              <span style="font-size:16px;float:left;margin-top:10px">{{item.account.nickname}}</span>
            </li>
            <li style="float:right;font-size:16px;margin-top:10px">{{new Date(item.createTime).getMonth()+1}}.{{new Date(item.createTime).getDate()}}~{{new Date(item.endTime).getMonth()+1}}.{{new Date(item.endTime).getDate()}}</li>
          </ul>
        </div>
      </div>

    </div>
  	<footers></footers>		
  </div>	
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Thuodong',
    data: 
      function(){
        return {
         datalist: []
              
        }  
      },
    mounted:function(){
      var that = this;
      axios.get(`/api/events?page=1&perPage=10&ts=1`)
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
li{
  list-style: none;
}

  .huodong{
    
    height:100%;
    width:100%;
    .o1{
      background:#ededf1;
      margin-bottom:px2rem(20px);
      padding-bottom:px2rem(20px);
      width:100%;
      img{
        width:100%;
      }
    }
  }


</style>