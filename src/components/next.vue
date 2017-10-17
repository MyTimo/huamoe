<template>
  <div id="next">
  	<div class="ne"> 
      <div class="uk-w"> 
        <button class="pre" disabled=""> 
          < &nbsp;&nbsp;上一页 
        </button> 
      </div> 
      <div class="uk-w"> 
        <button class="nex">下一页&nbsp;&nbsp;>        
      </button> 
      </div> 
    </div>	
  	
  </div>	
</template>

<script>
  export default {
    name: 'next'
  }
</script>

<style lang="scss" scoped>
  @function px2rem($px){
  @return $px/100px *1rem;
  }
  
  .ne{
      
      width:100%;
      
      .uk-w{
        margin-top:px2rem(-60px);
        margin-bottom:px2rem(60px);
        
        float:left;
        width:50%;

        button{
          width:100%;
          border:none;
          font-size:px2rem(18px);
          line-height:px2rem(40px);
          height:px2rem(40px);
          
        }
        .pre{
          background:#f5f5f5;
          color:#a9a9a9;
        }
        .nex{
          background:#e66988;
          color:white;
        }
      }
    }
</style>