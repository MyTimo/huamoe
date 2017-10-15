<template>
  <div>
  <div class="header">
    <input type="text" placeholder="搜索画作、设计、约稿、活动、用户">
    <i class="iconfont">&#xe610;</i>
  </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

  </div></div>
</template>

<script>

  import axios from 'axios';
  export default {
    name: 'Helloworld',
    data: function(){
      return {
//        avatarUrl: null
      }
    },
    mounted: function() {
//      console.log(this.$route.params.film_id);
      var that = this;
      axios.get(`/api/index`)
        .then(function(res){
          console.log(res);
//          that.avatarUrl = res.artists.avatarUrl;
        })
        .catch(function(){
          console.log("出错了");
        })
    }
  }
</script>
<script>
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,

    // 如果需要分页器
    pagination: '.swiper-pagination',

  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    /*margin: 0 10px;*/
  }

  a {
    color: #42b983;
  }

  .header input{
    width:100%;
    background:#ededf1;
    position: relative;
    /*padding: 10px;*/
    /*margin:5px;*/
    color: #fff;
    text-shadow: none;
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
    height:120px;
    font-size:35px;
    text-indent: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color:#999;
  }

  .header i{
    position:absolute;
    font-size:40px;
    top:45px;
    left:90%;

  }
</style>

