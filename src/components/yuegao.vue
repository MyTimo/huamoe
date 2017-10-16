<template>
  <div id="yuegao">
  	约稿
  	<footers></footers>			
  </div>	
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'yuegao',
    data: 
      function(){
        return {
         datalist:[]
        }  
      },
    mounted:function(){
      var that = this;
      axios.get(`/api/projects?page=1&perPage=10&doing=0`)
        .then(function(res){
         console.log(res.data.data);
         that.datalist = res.data.artists;
         
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
  // #app {
  //   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  //   color: #2c3e50;
  //   // margin-top: px2rem(60px);
  // }
</style>