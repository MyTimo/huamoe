<template>
  <div id="fabu">
  	<div class="fh">
      <div class="su">
        请先登录
      </div>
      <div class="vn">
        <router-link to="/register" class="la"><span>注册</span></router-link>        
        <router-link to="/login" class="la"><span>登录</span></router-link>     
      </div>
    </div>
    <footers></footers>   
  </div>	
</template>

<script>
  export default {
    name: 'fabu'
  }
</script>

<style lang="scss" scoped>
  @function px2rem($px){
  @return $px/100px *1rem;
  }
  .fh{
      width:px2rem(300px);
      height:px2rem(120px);
      position:fixed;
      top:px2rem(200px);
      left:px2rem(30px);
      background:#ededf1;
      padding:px2rem(10px);
      .su{
        width:100%;
        text-align:center;
        font-size:px2rem(20px);
        border-bottom:px2rem(1px) solid #ccc;
        padding-bottom:px2rem(10px);
      }
      .vn{
        .la{
          font-size:px2rem(20px);
          width:50%;
          display:inline-block;
          float:left;
          text-align: center;
          line-height:px2rem(80px);
          color:#66bbf6;
        }
      }
    }
</style>