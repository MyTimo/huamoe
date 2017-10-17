<template>
  <div class="huashiHeader">
    <div class="top">
      <div class="topbar"> 
        <router-link to="/Huashi" class="tab" active-class="blue" exact>全部画师</router-link> 
        <router-link to="/tuijian" class="tab" active-class="blue" exact>推荐画师</router-link> 
        <router-link to="/chushou" class="tab" active-class="blue" exact>触手画师</router-link> 
      </div>
    </div>
  		
  </div>	
</template>

<script>
  export default {
    name: 'huashiHeader'
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

  .top{
    width:100%;
    .topbar{
      text-align:center;
      line-height: px2rem(30px);
    width:100%;
    overflow: hidden;
    position:fixed;
    z-index:1000;
    background:white;
    border-bottom:px2rem(2px) solid #ccc;
    margin-bottom:px2rem(60px);
    top:0;
    left:0;
    font-size:px2rem(16px);
    .tab{
      text-align:center;
      display:inline-block;
      width:30%;
      height:px2rem(30px);
    }
  }
  }
  
  .blue{
    color:#0077dd;
    border-bottom:px2rem(2px) solid #0077dd;
  }
</style>