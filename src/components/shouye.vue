<template>
  <div class="search-container">
    <a class="search-input" href="/search">
      <i class="uk-icon-search"></i>搜索画作、设计、约稿、活动、用户
    </a>
  </div>
</template>

<script>
  export default {
    name: 'app'
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
