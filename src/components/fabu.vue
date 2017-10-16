<template>
  <div id="fabu">
  	发布
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
  // #app {
  //   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  //   color: #2c3e50;
  //   // margin-top: px2rem(60px);
  // }
</style>