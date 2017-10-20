<template>
  <div class="chushou">
  	<huashiHeader></huashiHeader>
  	<div v-for="item in datalist" class="uk-width-1-2"> 
	  	<router-link :to="{name:'tupian',params:{p_id:item.id}}"  style="display:block; margin-bottom: 10px !important" href="/accounts/383"> 
	  		<img class="uk-thumbnail-expand" :src="item.avatarUrl"> 
	  		<div class="nowrap" style="font-size: 14px;padding: 5px;background-color: white">{{item.recommendSort}}、{{item.nickname}}</div>	  		 
	  	</router-link> 
  	</div>
  	
  	<next></next>	
  	<footers></footers>  		 	
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    name: 'chushou',
    data: 
      function(){
        return {
         datalist: []      
        }  
      },
    mounted:function(){
      var that = this;
      axios.get(`/api/artists/chu?page=1&perPage=10`)
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
<!-- <link rel="stylesheet" href="../assets/font_dt4awi7oqfpkqpvi/iconfont.css"> -->
<style lang="scss" scoped>
  @function px2rem($px){
  @return $px/100px *1rem;
  }

  a{
  	text-decoration:  none;
  	color:#0077dd;
  }
  .chushou{
  	width:100%;
  	overflow: hidden;

  	background:#ededf1;
  	
  	.uk-width-1-2{
  		float:left;
  		width:50%;
  		box-sizing: border-box;
		padding-left: px2rem(10px);
		padding-right: px2rem(10px);

  		margin-top:px2rem(40px);

		img{
		  	width:100%;
		  	float:left;
		}
		.nowrap{
			margin-top:px2rem(-25px);
		}  	
  	}


  	
  }
</style>
