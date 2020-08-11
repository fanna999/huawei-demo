<template>
  <div class="kind-goods">
     <div class="newchannel-floor" v-for="item in list" :key="item.id">
      <div class="no-difference"></div>
      <div class="header-h">
        <div>{{item.selection}}</div>
      </div>
      <div class="swiper-container">
        <img :src="item.swiperImg" alt />
      </div>

      <div class="b"  >
        <div class="b-content"  v-for="item in item.littleList" :key="item.id">
          <a :href="item.link">
            <div class="img-area-big">
              <p class="p-img-big">
                <img :src="item.imgBig" alt />
              </p>
              <p class="p-promotion-big">
                <span>{{item.promotionBig}}</span>
              </p>
            </div>
            <p class="p-name-big">
              <span>{{item.nameBig}}</span>
            </p>
            <p class="p-price-big">
              <span>{{item.priceBig}}</span>
              <del>{{item.delPriceBig}}</del>
            </p>
          </a>
        </div>
      </div>
      <!-- 滑动部分 -->
      <div class="boutique-content" >
        <div class="swiper-slide"   v-for="item in item.moreList"  :key="item.id">
          <a :href="item.link">
            <div class="img-area">
              <p class="p-tag">
                <span>{{item.title}}</span>
              </p>
              <p class="p-img">
                <img :src="item.img" alt />
              </p>
              <p class="p-promotion">{{item.promotion}}</p>
            </div>
            <p class="p-name">
              <span>{{item.name}}</span>
            </p>
            <p class="p-price">
              <span>{{item.price}}</span>
              <del>{{item.delprice}}</del>
            </p>
          </a>
        </div>
      </div>

      <!-- 滑动部分 -->
   

    
      <div class="more-sale">
         <a :href="item.rightLink">
        <div class="more-sale-title">
          <span>{{item.discover}}</span>
        </div>
    </a>
        <div class="more-sale-img">
          <img :src="item.discoverImg" alt />
        </div>
        
      </div>

    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      boutiqueList: [
        {
          link:
            "https://m.vmall.com/product/10086418503661.html#10086217496807",
          title: "新品上市",
          img: require("../../assets/boutique-1.png"),
          promotion: "预订立省100 + 3期免息",
          name: "【新品】华为畅享平板 2",
          price: "￥1799",
        },
        {
          link:
            "https://m.vmall.com/product/10086842533081.html#10086832186721",

          title: "新品上市",
          img: require("../../assets/boutique-2.png"),
          promotion: "限时最高优惠100元",
          name: "荣耀智慧屏X1",
          price: "￥1999",
        },
        {
          link:
            "https://m.vmall.com/product/10086517969606.html#10086683924207",
          title: "新品上市",
          img: require("../../assets/boutique-3.png"),
          promotion: "直降11元+3期免息",
          name: "HUAWEI MateBook14",
          price: "￥6388",
          delprice: "￥6399",
        },

        {
          link:
            "https://m.vmall.com/product/10086663107289.html#10086941739116",

          title: "限时直降",
          img: require("../../assets/boutique-4.png"),
          promotion: "限时直降11元+3期免息",
          name: "MatePad Pro",
          price: "￥3699",
          delprice: "￥3799",
        },
        {
          link:
            "https://m.vmall.com/product/10086781357286.html#10086991127817",
          title: "限时直降",
          img: require("../../assets/boutique-5.png"),
          promotion: "直降11元+3期免息",
          name: "HUAWEI MateBook13",
          price: "￥5988",
          delprice: "￥5999",
        },
        {
          link:
            "https://m.vmall.com/product/10086412944469.html#10086696903483",
          title: "新品",
          img: require("../../assets/boutique-6.png"),
          promotion: "享12期免息",
          name: "荣耀平板V6",
          price: "￥2499",
        },
        {
          link:
            "https://m.vmall.com/product/10086593188778.html#10086481886007",
          title: "智慧屏",
          img: require("../../assets/boutique-7.png"),
          promotion: "最高省700元+12期免息",
          name: "华为智慧屏 V65i",
          price: "￥4999",
          delprice: "￥5499",
        },
        {
          link:
            "https://m.vmall.com/product/10086642283462.html#10086577585186",
          title: "3K 触控屏",
          img: require("../../assets/boutique-8.png"),
          promotion: "直降11元+赠鼠标+3期免息",
          name: "HUAWEI MateX Pro",
          price: "￥9988",
          delprice: "￥9999",
        },
        {
          link:
            "https://m.vmall.com/product/10086595752282.html#10086532539312",
          title: "荣耀智能手表",
          img: require("../../assets/boutique-9.png"),
          promotion: "限时799起 12期免息",
          name: "荣耀手表2",
          price: "￥899",
          delprice: "￥1199",
        },
      ],
      list:[],
      moreList:[],
      littleList:[],
     
    };
  },
 
  created() {
    
    let url = "http://localhost:5500/src/assets/data/more.json";
    let that = this;
    axios
      .get(url)
      .then(function (response) {
        console.log(response);
           that.list = response.data.list;
        if (response.data.code == 200) {
         for(let i=0;i<that.list.length;i++){
            
           console.log(that.list)
          that.littleList=response.data.list[i].littleList;
          that.moreList=response.data.list[i].moreList
         }
        
          
         
        }
      })
      .catch(function (reject) {
        console.log(reject);
      });
  },
};
</script>
<style  scoped>
.kind-goods {
  width: 100%;
}
.newchannel-floor {
  width: 100%;
}
.no-difference {
  width: 100%;
  background-color: #f5f5f5;
  height: 16px;
}
.header-h {
  text-align: center;
  padding: 5% 0;
}
.header-h>div{
  font-size: 20px;
}
.swiper-container {
  width: 94%;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
}
.swiper-container img {
  width: 100%;
}
.b {
  width: 94%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.b-content {
  width: 49%;

  margin-bottom: 3%;
  flex-shrink: 0;
}
a {
  text-decoration: none;
}
.img-area-big {
  width: 100%;
  border-radius: 10px;
  background-color: #f5f5f5;
}
.p-img-big {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
}
.p-img-big img {
  width: 100%;
}
.p-promotion-big {
  width: 100%;
  text-align: center;
  color: #9b9b9b;
  background-color: rgba(155, 155, 155, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 12px;
  padding: 2px 0;
}
.p-name-big {
  text-align: center;
  width: 95%;
  margin: 0 auto;
  font-size: 14px;
  color: #333;
  padding: 2px 0;
}
.p-price-big {
  width: 100%;
  text-align: center;
}
.p-price-big span {
  font-size: 10px;
  color: #ca141d;
}
.p-price-big del {
  color: #999;
  font-size: 10px;
}

/* 滑动部分 */
.boutique-content {
  width: 100%;
  margin-top: 2%;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
}
.boutique-content::-webkit-scrollbar {
  display: none;
}
.swiper-slide {
  width: 35%;
  margin-left: 2%;
}
a {
  text-decoration: none;
}
.img-area {
  width: 100%;
  background-color: #f5f5f5;
  margin: 0 auto;
  border-radius: 10%;
}
.p-tag {
  width: 65%;
  margin: 0 auto;
  text-align: center;
  font-size: 10px;
  background-color: #ff6a6e;
  color: #fff;
}
.p-img {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.p-img img {
  width: 100%;
}
.p-promotion {
  width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  background-color: rgba(155, 155, 155, 0.1);
  color: #9b9b9b;
  text-align: center;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  margin: 0 auto;
  font-size: 12px;
}
.p-name {
  text-align: center;
  color: #333;
  font-size: 12px;
}
.p-price {
  text-align: center;
  font-size: 10px;
}
.p-price span {
  color: #ca141d;
}
.p-price del {
  color: #999;
}
/* 发现更多 */
.more-sale {
  width: 100%;
  text-align: center;
  padding: 5% 0;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-wrap: nowrap;
}
.more-sale a{
  display: flex;
  align-items: center;
}
.more-sale span {
  font-size: 16px;
  color: #333;
}
.more-sale-img {
  width: 8%;
  display: flex;
  justify-content: center;
}
.more-sale-img img {
  width: 40%;
}
</style>