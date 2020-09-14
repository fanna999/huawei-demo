<template>
  <div class="boutique-content">
   
     <div class="swiper-slide" v-for="item in boutiqueList"  :key="item.id">
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
</template>
<script>
export default {
    data(){
        return {
            boutiqueList:[
                {   link:"https://m.vmall.com/product/10086418503661.html#10086217496807",
                    title:"新品上市",
                    img:require("../../assets/boutique-1.png"),
                    promotion:"预订立省100 + 3期免息",
                    name:"【新品】华为畅享平板 2",
                    price:"￥1799"
                },
                 {
                     link:"https://m.vmall.com/product/10086842533081.html#10086832186721",

                    title:"新品上市",
                    img:require("../../assets/boutique-2.png"),
                    promotion:"限时最高优惠100元",
                    name:"荣耀智慧屏X1",
                    price:"￥1999"
                }
                ,
                 {
                     link:"https://m.vmall.com/product/10086517969606.html#10086683924207",
                    title:"新品上市",
                    img:require("../../assets/boutique-3.png"),
                    promotion:"直降11元+3期免息",
                    name:"HUAWEI MateBook14",
                    price:"￥6388",
                    delprice:"￥6399"
                },
                
                 {
                     link:"https://m.vmall.com/product/10086663107289.html#10086941739116",

                    title:"限时直降",
                    img:require("../../assets/boutique-4.png"),
                    promotion:"限时直降11元+3期免息",
                    name:"MatePad Pro",
                    price:"￥3699",
                    delprice:"￥3799"
                },
                 {
                     link:"https://m.vmall.com/product/10086781357286.html#10086991127817",
                    title:"限时直降",
                    img:require("../../assets/boutique-5.png"),
                    promotion:"直降11元+3期免息",
                    name:"HUAWEI MateBook13",
                    price:"￥5988",
                    delprice:"￥5999"
                },
                {
                    link:"https://m.vmall.com/product/10086412944469.html#10086696903483",
                    title:"新品",
                    img:require("../../assets/boutique-6.png"),
                    promotion:"享12期免息",
                    name:"荣耀平板V6",
                    price:"￥2499",
                   
                },
                {
                    link:"https://m.vmall.com/product/10086593188778.html#10086481886007",
                    title:"智慧屏",
                    img:require("../../assets/boutique-7.png"),
                    promotion:"最高省700元+12期免息",
                    name:"华为智慧屏 V65i",
                    price:"￥4999",
                    delprice:"￥5499"
                },
                {
                    link:"https://m.vmall.com/product/10086642283462.html#10086577585186",
                    title:"3K 触控屏",
                    img:require("../../assets/boutique-8.png"),
                    promotion:"直降11元+赠鼠标+3期免息",
                    name:"HUAWEI MateX Pro",
                    price:"￥9988",
                    delprice:"￥9999"
                },
                 {
                     link:"https://m.vmall.com/product/10086595752282.html#10086532539312",
                    title:"荣耀智能手表",
                    img:require("../../assets/boutique-9.png"),
                    promotion:"限时799起 12期免息",
                    name:"荣耀手表2",
                    price:"￥899",
                    delprice:"￥1199"
                }
                
            ]
        }
    }
};
</script>
<style  scoped>
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
.p-name{
    text-align: center;
    color: #333;
    font-size: 12px;
}
.p-price{
    text-align: center;
     font-size: 10px;
}
.p-price span{
     color: #ca141d;
}
.p-price del{
   color: #999;
}
</style>