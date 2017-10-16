<template>
  
  	<div class="footer">
  	
     
      <div class="b">
       <div class="font">
        <i class="iconfont">&#xe600;</i>
       </div>
       <div class="wen">
        <router-link to="/" class="lop" active-class="red" exact>首页</router-link>
       </div>
      </div>
      <div class="b">
       <div class="font">
        <i class="iconfont">&#xe6d7;</i>
       </div>
       <div class="wen">
        <router-link to="/Huashi" class="lop" active-class="red" exact>画师</router-link>
       </div>
      </div>
      <div class="b">
       <div class="font">
        <i class="iconfont">&#xe644;</i>
       </div>
       <div class="wen">
        <router-link to="/fabu" class="lop" active-class="red" exact>发布</router-link>
       </div>
      </div>
      <div class="b">
       <div class="font">
        <i class="iconfont">&#xe64e;</i>
       </div>
       <div class="wen">
        <router-link to="/yuegao" class="lop" active-class="red" exact>约稿</router-link>
       </div>
      </div>
      <div class="b">
       <div class="font">
        <i class="iconfont">&#xe632;</i>
       </div>
       <div class="wen">
        <router-link to="/wode" class="lop" active-class="red" exact>我的</router-link>
       </div>
      </div>
     
    </div> 			
</template>

<script>
  export default {
    name: 'footers'
  }
</script>

<style lang="scss" scoped>
  @function px2rem($px){
  @return $px/100px *1rem;
  }

  .red{
  	color:red;
  }

  .lop{
  	text-decoration: none;
  	color:black;
  }


  .footer{


  	
   	background:white;
   	position:fixed;
   	bottom:px2rem(0px);
   	left:0;

    
    width:100%;
    
   	
    
    .b{
     float:left;
     width:20%;
     text-align:center;
     .font{
     	font-size:px2rem(14px);
     }
     .wen{
      font-size:px2rem(14px);
    
     }
    }
     
  }
</style>
