<template>
  <div class="list-wrap" @scroll="scrollAction">
    <div class="header-splice" >
      <img src="../../assets/img/splice-1.png" alt=""  @click="del"  v-if="dell">
    </div>
    <div class="top">
      <div class="header">
        <div class="header-box"></div>
      <div class="home-header">
        <div class="header-img">
          <a href>
            <img src="../../assets/logo_vmall.png" alt />
          </a>
        </div>
        <div class="header-search" @click="discoverclick">
          <div class="search-content">
            <img src="../../assets/search-1.png" alt />
            <input type="text" disabled :placeholder="searchPlaceholder" />
          </div>
        </div>
        <div class="header-final">
          <img src="../../assets/消息.png" alt />
          <span @click="registerClick">登录</span>
        </div>
      </div>
      <!-- 推荐、华为专区、荣耀专区 -->
      <div class="link-run">
        <div class="recommend">推荐</div>
        <a href="https://m.vmall.com/huawei">华为专区</a>
        <a href="https://msale.vmall.com/honor.html">荣耀专区</a>
        <a href="https://msale.vmall.com/pseries.html">P40 系列</a>
        <div>
          <img src="../../assets/allow_down.png" alt @click="edit" />
        </div>
      </div>
</div>
      <!-- 轮播图 -->
      <loop></loop>

      <!-- 正品保障 -->
      <div class="quality">
        <img src="../../assets/bg-home-squard.png" alt />
        <!-- 华为领券，华为数码 -->
        <swiper-figure></swiper-figure>
        <!-- 商城头条 -->
        <div class="headline">
          <div class="headline-title">
            <a href="https://m.vmall.com/content/category">
              <img src="../../assets/headlin-title.png" alt />
            </a>
          </div>
          <div class="headline-swiper">
            <swiper-more></swiper-more>
          </div>
          <div class="headlin-more">
            <a href="https://m.vmall.com/content/index">更多</a>
          </div>
        </div>
      </div>

      <!--倒计时+商品展示 -->
      <div class="count-trade">
        <!-- 倒计时 -->
        <div class="count-down">
          <h3>限时购</h3>
          <div class="count-trade-img">
            <img src="../../assets/seckill_title.png" alt />
          </div>
          <!-- 倒计时时间展示 -->
          <div class="count-time">
            <span>{{hour}}</span>
            <i>:</i>
            <span>{{ min }}</span>
            <i>:</i>
            <span>{{ second }}</span>
          </div>
          <div class="count-trade-final">后结束</div>
        </div>
      </div>
      <!-- 倒计时下商品展示 -->
      <new-product></new-product>

      <!-- 华为手机图片展示 -->
      <product-exhibition></product-exhibition>
      <!-- 精品推荐 -->
      <div class="boutique">
        <div class="boutique-title">
          <h2>精品推荐</h2>
        </div>
        <!-- 精品推荐手机展示 -->
        <boutique-recom></boutique-recom>
      </div>

      <!-- BackTop回到顶部 -->
      <!-- <back-top></back-top> -->
   <div class="back-top">
     <img src="../../assets/back-top.png" alt="" v-if="chan"  @click="go">
   </div>

    <!-- 各类商品展示部分 -->
  <kind-goods></kind-goods>

  <!-- 最后部分 -->
  <end-page></end-page>
  
      <!-- 遮罩层 -->
      <div class="shade" v-if="seen">
        <div class="fix">
          <div class="all">
            <span>全部</span>
            <img src="../../assets/allow_top(2).png" alt @click="appear" />
          </div>
          <div class="shade-all">
            <div class="item active">
              <a href>推荐</a>
            </div>
            <div class="item">
              <a href="https://m.vmall.com/huawei">华为专区</a>
            </div>
            <div class="item">
              <a href="https://msale.vmall.com/honor.html">荣耀专区</a>
            </div>
          </div>
          <div class="shade-all">
            <div class="item">
              <a href="https://msale.vmall.com/pseries.html">P40系列</a>
            </div>
            <div class="item">
              <a href="https://msale.vmall.com/smarthome2020.html">安心居家</a>
            </div>
            <div class="item">
              <a href="https://msale.vmall.com/ptpd.html">拼团</a>
            </div>
          </div>
          <div class="shaow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loop from "../../components/home-page/Swiper.vue";
import SwiperFigure from "../../components/home-page/SwiperFigure.vue";
import SwiperMore from "../../components/home-page/SwiperMore.vue";
import NewProduct from "../../components/home-page/NewProduct.vue";
import ProductExhibition from "../../components/home-page/ProductExhibition.vue";
import BoutiqueRecom from "../../components/home-page/BoutiqueRecom.vue";
import KindGoods from "../../components/home-page/KindGoods.vue";
import EndPage from "../../components/home-page/EndPage.vue";

import io from "socket.io-client";

export default {

  data() {
    return {
      seen: false,
      curStartTime: "2020-12-31",
      hour: "00",
      min: "00",
      second: "00",

     chan:false,
    dell:true,
    searchPlaceholder:"P10"
      
    };
  },

  mounted(){
    //创建socket对象
    let socket = io.connect("http://localhost:2020",{"force new connection":true})

    //发送消息
    socket.emit("msg","来自客户端的消息")

    //接收消息
    socket.on("msg",(msg)=>{
      this.searchPlaceholder = msg
      console.log("这是接收自服务器端的消息:",msg)
    })
  },
  methods: {
    discoverclick() {
      this.$router.push({
        path: "/search",
      });
    },
    registerClick(){
      this.$router.push({
        path:"/login"
      })
    },
    edit() {
      this.seen = true;
    },
    appear() {
      this.seen = false;
    },
    scrollAction(e){
     
      if(e.target.scrollTop>260){
       this.chan=true
     }else{
      this.chan=false
     }
    },

    countTime() {
      let date = new Date();
      let now = date.getTime();
      let endDate = new Date(this.curStartTime);
      let end = endDate.getTime();
      let leftTime = end - now;
      if (leftTime >= 0) {
        let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.hour = h < 10 ? "0" + h : h;
        let m = Math.floor((leftTime / 1000 / 60) % 60);
        this.min = m < 10 ? "0" + m : m;
        let s = Math.floor((leftTime / 1000) % 60);
        this.second = s < 10 ? "0" + s : s;
      } else {
        this.day = 0;
        this.hour = "00";
        this.min = "00";
        this.second = "00";
      }
      if (
        Number(this.hour) === 0 &&
        Number(this.min) === 0 &&
        Number(this.second) === 0
      ) {
        return;
      } else {
        setTimeout(this.countTime, 1000);
      }
    },
   
 go(){
    var cancel=document.querySelector(".list-wrap");
   
    cancel.scrollTop=0

 },

 del(){
   if(this.dell){
     this.dell=false
   }else{
     this.dell=true
   }
 }
 

  },
  components: {
    loop,
    "swiper-figure": SwiperFigure,
    "swiper-more": SwiperMore,
    "new-product": NewProduct,
    "product-exhibition": ProductExhibition,
    "boutique-recom": BoutiqueRecom,
    "kind-goods":KindGoods,
    "end-page":EndPage
  },
  created() {
    this.curStartTime = new Date().setSeconds(
      Math.floor(Math.random() * (24 * 60 * 60) + 12 * 60 * 60)
    );
    this.countTime();

    
  },


};
</script>

<style scoped>
.list-wrap {
  background-color: #fff;
}
.list-wrap::-webkit-scrollbar{
  display: none;
}
.header{
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 50;

}
.header-box{
  width: 100%;
  height: 8px;
  background-color: #fff;
}
.home-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2px;
}

.header-img {
  width: 73px;
  margin-left: 10px;
  
}
.header-img img {
  width: 100%;
  vertical-align: middle;
}

.header-search {
  display: flex;

  flex-grow: 1;
}
.search-content {
  width: 94%;
  height: 32px;
  background-color: rgb(245, 245, 245);
  border-radius: 15px;
  display: flex;
  margin-left: 10px;
  flex-grow: 1;
}
.search-content input {
  width: 60%;
  height: 100%;
  border: none;
  display: flex;

  background-color: rgb(245, 245, 245);
  color: rgba(0, 0, 0, 0);
}
.search-content img {
  width: 30px;
}
.header-final {
  width: 80px;
  display: flex;
  flex-shrink: 0;
}
.header-final img {
  width: 25px;
}
.header-final span {
  padding: 0 5px;
}
.link-run {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
a {
  text-decoration: none;
  color: rgb(119, 119, 119);
}
.recommend {
  color: #cc0e11;
  border-bottom: 3px solid #cc0e11;
}
.shaow {
  width: 100%;
  background-color: #fff;
  height: 30px;
}
/* 遮罩层 */
.shade {
  width: 100%;
  margin-top: 10px;
  position: fixed;
  top: 43px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.27);
  height: 100%;
}
.fix {
  width: 100%;
  background-color: #fff;
}
.all {
  font-size: 18px;
  color: #777;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
}
.all img {
  width: 25px;
  margin-right: 20px;
}
.shade-all {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-content: center;
  text-align: center;
}
.shade-all .item {
  width: 200px;
  border: 1px solid #777;
  padding: 5px 10px;
  border-radius: 15px;
  margin-left: 10px;

  margin-top: 10px;
  white-space: nowrap;
}
.item a {
  color: #777;
}
.item.active {
  border: 1px solid #cc0e11;
  color: #cc0e11;
}
.item.active a {
  color: #cc0e11;
}
/* 正品保障 */
.quality {
  width: 100%;
  position: relative;
}
.quality img {
  width: 100%;
}
/* 商城头条 */
.headline {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 74%;
}
.headline-swiper {
  flex-grow: 1;
  margin-left: 20px;
}
.headline-title {
  margin-left: 20px;
  width: 64px;
  flex-shrink: 0;
}
.headline-title img {
  width: 100%;
}

.headlin-more {
  color: #999;
  font-size: 15px;
  margin-right: 5%;
  white-space: nowrap;
}
/* 倒计时 */
.count-trade {
  width: 100%;
  background-color: #f5f5f5;
}
.count-down {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px 10px;
}
.count-down h3 {
  font-weight: 100;
}
.count-down img {
  height: 20px;
}
.count-trade-img {
  height: 20px;
  width: 20px;
  margin: auto 0;
}
/* 倒计时 */
.count-time {
  display: flex;
}
.count-time i {
  font-style: normal;
}
.count-time span {
  font-size: 20px;
}
.count-trade-final {
  font-size: 14px;
  color: #777;
  line-height: 25px;
}
.boutique {
  width: 100%;

  margin-top: 3%;
}
.boutique-title {
  text-align: center;
}

/* 回到顶部 */
.back-top{
  position: fixed;
  bottom: 10%;
  right: 10%;
  width: 15%;
  z-index: 100;
}
.back-top img{
  width: 100%;
}
.header-splice{
  width: 100%;

}
.header-splice img{
  width: 100%;
}
</style>
