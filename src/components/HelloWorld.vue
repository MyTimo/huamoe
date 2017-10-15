<template>
  <div>
    <div class="header">
      <input type="text" placeholder="搜索画作、设计、约稿、活动、用户">
      <i class="iconfont">&#xe610;</i>
    </div>

    <swipe class="my-swipe">
      <swipe-item>
        <img src="http://artwork.huamoe.com/swy560260.jpg" />
      </swipe-item>
      <swipe-item>
        <img src="http://artwork.huamoe.com/mutamobile.jpg" />
      </swipe-item>
      <swipe-item>
        <img src="http://artwork.huamoe.com/yg560260.jpg" />
      </swipe-item>
    </swipe>

    <div class="tubiao">
      <ul>
        <li><i class="iconfont">&#xe680;</i><span>画作</span></li>
        <li><i class="iconfont">&#xe667;</i><span>设计</span></li>
        <li><i class="iconfont">&#xe64e;</i><span>征稿</span></li>
        <li><i class="iconfont">&#xe658;</i><span>活动</span></li>
        <li><i class="iconfont">&#xe62d;</i><span>用户</span></li>
      </ul>
    </div>

    <div class="x1">
      <div class="x1_">     
        <div class="x1_1">
          <div>
            <div class="x1_1_1"></div>
            <span>最新约稿</span>
          </div>
        </div>
        <div class="x1_2">
          <div>
            <span class="x1_2_1">更多</span>
            <span> >> </span>
          </div>
        </div>
      </div>
    </div>

    <div v-for="item in list" class="title-0"> 
      <div class="title-1">
        <h3>{{item.id}}、{{item.title}}</h3> 
        <div class="tags"> 
          <span class="y1">私人稿</span>
          <span class="y1">明星</span>
          <span class="y1">薛之谦</span>
          <span class="y1">素描</span>
        </div>  
        <div class="project"> 
          <div class="grid"> 
            <div class="uk-width-1-2"> {{item.costMin}}～{{item.costMax}}元 </div> 
            <div class="uk-width-1-2">2017-10-30</div> 
          </div> 
        </div>  
        <div class="meta"> 
          <div class="meta-1"> 
            <i class="iconfont">&#xe62d;</i>&nbsp;{{item.account.nickname}}
          </div> 
          <div class="meta-2"> 应征：{{item.signupCount}}人 </div> 
          <div class="meta-2"> 需求：{{item.number}}张 </div> 
        </div> 
      </div> 
    </div>
    
    <div class="x1 z1">
      <div class="x1_">     
        <div class="x1_1">
          <div>
            <div class="x1_1_1"></div>
            <span>周点赞榜 TOP6 </span>
          </div>
        </div>
        <div class="x1_2">
          <div>
            <span class="x1_2_1">更多</span>
            <span> >> </span>
          </div>
        </div>
      </div>
    </div>

    <div v-for="item in it" class="picture">
      <div class="picture-1">
        <img :src="item.cover" alt="">
        <span>1</span>
      </div>
    </div>

  </div>
</template>
  
</style>

<script>
import {Swipe, SwipeItem} from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';

  import axios from 'axios';
  export default {
    name: 'Helloworld',
    data: 
      function(){
        return {
         datalist: [],
         list: [],

         it:[]
        }  
      },
      components:{
        'swipe': Swipe,
        'swipe-item': SwipeItem
      },
    mounted:function(){
      var that = this;
      axios.get(`/api/index`)
        .then(function(res){
          console.log(res.data);
         that.datalist = res.data.artists;
         that.list = res.data.projects;
         that.it = res.data.rankTop6;
         // that.it = that.list.tags.splice(',');
        })
        .catch(function(){
          console.log("出错了");
        })
    }
  }    
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@function px2rem($px){
  @return $px/100px *1rem;
}

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
    left:0;
    top:px2rem(-80px);
  
    color: #fff;
    text-shadow: none;
    outline: none;
    border: px2rem(1px) solid transparent;
    cursor: pointer;
    height:px2rem(40px);
    font-size:px2rem(14px);
    text-indent: px2rem(30px);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color:#999;
  }
  .header i{
    position:absolute;
    font-size:px2rem(20px);
    top:px2rem(15px);
    left:90%;
  }

  .my-swipe{
    height: px2rem(170px);
    margin-top: px2rem(-85px);
    img{
      width: 100%;
    }
  }

  .tubiao{
    width:100%;
    box-sizing:border-box;
    white-space: nowrap;
    margin-top: px2rem(-165px);
    li{
      width:px2rem(50px);
      
      i{
        display:inline-block;
        width:px2rem(50px);
        font-size:px2rem(30px);
        text-align:center;
        border-radius:50%;
        color:white;
        height:px2rem(50px);
        line-height:px2rem(50px);
      }  
      span{
        font-size:px2rem(16px);
        display:block;
        text-align:center;
        margin-top:px2rem(-10px);
      }
    }
    li:nth-of-type(1) i{
        background:red
    }
    li:nth-of-type(2) i{
        background:yellow
    }
    li:nth-of-type(3) i{
        background:blue
    }
    li:nth-of-type(4) i{
        background:pink
    }
    li:nth-of-type(5) i{
        background:green
    }
  }

  .x1{
    font-size:px2rem(16px);
    margin-top:px2rem(-110px);
    height:px2rem(40px);
    background:#ccc;
    padding-top:px2rem(10px);
    .x1_{
      width:100%;
      // margin-top:px2rem(20px);
      height:px2rem(30px);
      background:white;
      

      .x1_1{
      float:left;
      line-height:px2rem(30px);

      
      .x1_1_1{
        float:left;
        width:px2rem(5px);
        height:px2rem(20px);
        background:red;
        margin-top:px2rem(4px);
        margin-right:px2rem(10px);
      }
        span{
          display:inline-block;
          float:left;

        }
      }
      .x1_2{
        float:right;
        line-height:px2rem(30px);
      }
    }
    
  }
  
  .title-0{
    border:1px solid #ccc;
    background:#ccc;
    .title-1{
      // margin-bottom:px2rem(-10px);
      margin-top:px2rem(-10px);
      background:#ffffff;
      // color:black;
      h3{
        font-size:px2rem(18px);
        color:black;
      }
      .tags{
        margin-top:px2rem(-90px);

        span{
          color:#87ceeb;
          font-size:px2rem(16px);
          display:inline-block;
          border:1px solid #87ceeb;
        }
        
      }

      .project{
        .grid{
          .uk-width-1-2{
            font-size:px2rem(18px);
            width:px2rem(158px);
            float:left;
            text-align:center;
            background:#444444;
            color:white;
            padding:px2rem(10px);
          }
        }
      }
      .meta{
        height:px2rem(80px);
        width:100%;
        margin-top:px2rem(30px);
        .meta-1{
          font-size:px2rem(16px);
          color:black;
          float:left;
          margin-right:px2rem(30px);
          margin-top:px2rem(10px);
        }
        .meta-2{
          font-size:px2rem(16px);
          color:black;
          float:left;
          margin-right:px2rem(15px);
          margin-top:px2rem(10px);
        }
      }
    }
  
  }

  .z1{
    margin-top:px2rem(10px);
  }

  .picture{
    background:#ccc;
    height:px2rem(200px);
    font-size:px2rem(16px);
    img{
      width:px2rem(109px);
      margin-right:px2rem(10px);
      float:left;
      // display:block;
    }
    span{
      display:block;
    }
  }

</style>

