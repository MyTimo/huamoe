<template>
  <div id="Tyonghu">
  	<div v-for="item in datalist" class="panel" style="margin-top: 10px;padding:15px;background:#f5f5f5;color: #444;"> 
      <h3>{{item.name}}</h3> 
      <p v-for="itemss in item.items"> {{itemss.name}}：
        <a :href="itemss.link" style="color:#4fbff3"> {{itemss.qq}}</a> 
      </p>
      
    </div>
  	<footers></footers>		
  </div>	
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Tyonghu',
    data: 
      function(){
        return {
         datalist: []      
        }  
      },
    mounted:function(){
      var that = this;
      axios.get(`/api/index/qun`)
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
  
  a{
    text-decoration: none;
  }
  
  h3{
    font-size:px2rem(20px);
  } 
   
  p{
    font-size:px2rem(16px);
  }
</style>