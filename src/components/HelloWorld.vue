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
        <li>
          <router-link to="/Thuazuo">
            <i class="iconfont">&#xe680;</i>
            <span>画作</span>
          </router-link>
        </li>
        <li>
          <router-link to="/Tsheji">
            <i class="iconfont">&#xe667;</i>
            <span>设计</span>
          </router-link>
        </li>
        <li>
          <router-link to="/Tzhenggao">
            <i class="iconfont">&#xe64e;</i>
            <span>征稿</span>
          </router-link>
        </li>
        <li>
          <router-link to="/Thuodong">
            <i class="iconfont">&#xe658;</i>
            <span>活动</span>
          </router-link>
        </li>
        <li>
          <router-link to="/Tyonghu">
            <i class="iconfont">&#xe62d;</i>
            <span>用户</span>
          </router-link>
        </li>
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
          <span v-for="is in item.tag.split(',').slice(0,4)" class="y1">{{is}}</span>
          
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

    <div v-for="(item,index) in it" class="picture">
      <div class="picture-1">
        <img :src="item.cover" alt="">
        <span class="p1">{{index+1}}</span>
        <span class="p2">{{item.nickname}}</span>
      </div>
    </div>

    <div class="x1 a1">
      <div class="x1_">     
        <div class="x1_1">
          <div>
            <div class="x1_1_1"></div>
            <span>最新设计 </span>
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

    <div class="content-padded"> 
     <div class="uk-grid uk-grid-small"> 
      <div v-for="item in lists" class="uk-width-1-2"> 
       <div class="product-item" index="1"> 
        <a class="cover"> 
         <img :src="item.cover"> 
        </a>  
        <div class="product-desc"> 
         <div class="meta"> 
          <span class="price" style="font-size:14px">￥{{item.price}}～{{item.priceMax}}</span> 
          <span class="product-hot">人气：{{item.zanCount}}</span> 
         </div> 
         <div class="title">{{item.title}}</div> 
         <div class="account" href="/accounts/28132/designs">{{item.nickname}}</div> 
        </div> 
       </div> 
      </div>
     </div> 
    </div>

     <div class="x1 q1">
      <div class="x1_">     
        <div class="x1_1">
          <div>
            <div class="x1_1_1"></div>
            <span>推荐画师 </span>
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

    <div v-for="item in listes" class="huashi" index="0"> 
     <div class="huashi-1"> 
      <a  class="huashi-1-1" href="/accounts/11212"> 
       <img class="cl" :src="item.avatarUrl"> 
       <img class="icon" src="http://odun6jycz.bkt.clouddn.com/recommend_red.png">
      </a>
      <div class="huashi-1-2"> 
       <a class="nickname" href="/accounts/11212">{{item.nickname}}</a> 
       <button class="uk-button" type="button"> 
        <b>+</b>&nbsp;关注   
       </button>  
      </div> 
      <div class="tags"> 
       <span v-for="a in item.tags.slice(0,3)" class="uk-badge">{{a}}</span>
      </div> 
      <hr style="margin: 115px 0;
     width:100%;position:absolute;top:px2rem(100px);left:0;">
     </div> 
     
     <div class="uk-grid"> 
      <div class="uk-width-1-4"> 
       <a v-for="items in item.works"  class="as" href="/work/18355">
        <img :src="items.cover">
       </a> 
      </div>
      <div class="m1">
       
      </div> 
     </div> 
    </div>

    <div class="w1" style="width:100%;background:#ededf1;height:50px;
    padding:10px 0 10px 0">
     <div class="w1-1" style="text-align:center;width:100%;background:#e66988;height:40px;font-size:20px;color:white;padding-bottom:50px;">
      <span style="line-height:40px;">更多推荐画师</span>
     </div>
    </div>
    <footers></footers>
  </div>
</template>
  


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
         lists:[],
         it:[],
         listes:[],
         lis:[],
         itemsss:[],
         is:[]
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
         that.lists = res.data.designs;
         that.listes = res.data.artists;
         that.listsss = res.data.artists.tags.slice(0,4);
        })
        .catch(function(){
          console.log("出错了");
        })
    }
  }    
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
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
    color: black;
    text-decoration:none;
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
    background:#ededf1;
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
          padding:0 px2rem(5px);
          margin-right:px2rem(10px);
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
    background:#ededf1;
    .picture-1{
      width:27%;
      float:left;
      height:px2rem(200px);
      font-size:px2rem(16px);
      margin-right:px2rem(20px);
      
      img{
        width:px2rem(109px);
        margin-right:px2rem(10px);
        float:left;
        // display:block;
      }
      span{
        font-size:px2rem(12px);
        margin-right:px2rem(4px);
        display:inline-block;
        border-radius:50%;
        
      }
      .p1{
       color:white;
       background:#ff6666;
       display:inline-block;
       width:px2rem(20px);
       height:px2rem(20px);
       text-align:center;
       line-height:px2rem(20px);
      }

    }    
  }

  .a1{
   margin-top:px2rem(400px);
  }

  .content-padded{
   background:#ededf1;
   .product-item{
    border:px2rem(1px) solid #ccc;
    width:px2rem(177px);
    img{
     width:px2rem(176px);
    }
   }
   .product-desc{
    
     .meta{
     margin-top:px2rem(-100px);
     text-indent:px2rem(10px);
     
     .price{
      color:red;
      font-weight:900;
      font-size:px2rem(18px);
      
     }
     .product-hot{
      color:#999;
      font-size:px2rem(14px);
      margin-left:px2rem(-25px);

     }
    }
    .title{
     font-size:px2rem(14px);
     text-indent:px2rem(10px);
     color:black;
    }
    .account{
     font-size:px2rem(14px);
     text-indent:px2rem(10px);
     color:#81bcee;
    }
   }
   
   
  }

  .uk-width-1-2{
   float:left;
  }

  .q1{
   margin-top:px2rem(275px);
  }

  .huashi{
   width:100%;
   overflow:hidden;
   .huashi-1{
    width:100%;
    margin-top:px2rem(-20px);
    float:left;
    .huashi-1-1{

     float:left;
     width:px2rem(50px);
     height:px2rem(50px);
     top:px2rem(10px);
     left:px2rem(10px);
     position:relative;
     .cl{
      width:px2rem(50px);
      height:px2rem(50px);
      border-radius:50%;
     }
     .icon{
      width:px2rem(20px);
      height:px2rem(20px);
      position:absolute;
      top:px2rem(50px);
      left:px2rem(30px);
     }
    }
    .huashi-1-2{

     float:left;
     margin-top:px2rem(-30px);
     margin-left:px2rem(30px);
     .nickname{
      font-size:px2rem(14px);
     }
     .uk-button{
      border:none;
      background:white;
      color:#0077dd;
     }
    }
    .tags{
     position:relative;
     top:px2rem(100px);
     left:px2rem(-130px);
     font-size:px2rem(14px);
     span{
      border:px2rem(1px) solid #87ceeb;
      color:#87ceeb;
      padding:0 4px;
     }
    }
   }
   .uk-grid{
     position:relative;
     .uk-width-1-4{
      
      .as{
      
       width:100%;
       
       margin-top:px2rem(100px);

       img{
        margin-top:px2rem(40px);
        width:21%;
        float:left;
        padding:px2rem(5px);
        border:px2rem(1px) solid #ccc;
       }
      }     
    }    
   }
  }

  .m1{
   width:100%;
   background:#ccc;
   height:px2rem(10px);
   position:absolute;
   top:0;
   left:0
  }

  

</style>

