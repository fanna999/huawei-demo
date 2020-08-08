<template>
  <div class="new-pro">
    <div class="new-pro-increment"  v-for="item in proList" :key="item.id">
      <div class="new-pro-list" >
        <div class="new-pro-img">
          <img :src="item.images" alt />
        </div>
        <p class="new-pro-title">{{item.title}}</p>
      </div>
     <div class="price">{{item.price}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      proList: [
        {
          images: require("../../assets/new-product-1.png"),
          title: "MateBook D 14",
          price:"预定立省100"
        },
        {
          images: require("../../assets/new-product-2.png"),
          title: "荣耀Play4+Pro",
           price:"￥2489"
        },
        {
          images: require("../../assets/new-product-3.png"),
          title: "华为手环+B6",
           price:"限量开售"
        },
        {
          images: require("../../assets/new-product-4.png"),
          title: "荣耀手表2",
           price:"最高直降400"
        },
        {
          images: require("../../assets/new-product-5.png"),
          title: "限时799起",
           price:"优惠20+免息"
        },
        {
          images: require("../../assets/new-product-6.png"),
          title: "MateBook D 15",
           price:"限时799起"
        },
        {
          images: require("../../assets/new-product-7.png"),
          title: "WATCH GT 2",
           price:"最高优惠200元"
        },
        {
          images: require("../../assets/new-product-8.png"),
          title: "FreeBuds 3",
           price:"最高优惠150元"
        },
        {
          images: require("../../assets/new-product-9.png"),
          title: "华为智慧屏",
           price:"最高优惠100元"
        },
      ],
    };
  },
};
</script>
<style  scoped>
.new-pro {
  width: 100%;
  background-color: #f5f5f5;
  overflow: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.new-pro-increment {
  width: 24%;
  /* display: flex;
  justify-content: space-around;
  flex-wrap: nowrap; */
  flex-shrink: 0;
  margin-left: 3%;
}
.new-pro-list {
  width: 100%;
  background-color: #fff;

  margin-left: 2%;
  flex-shrink: 0;
  border-radius: 16%;
}
.new-pro::-webkit-scrollbar {
  display: none;
}
.new-pro-img img {
  width: 100%;
}
.new-pro-img {
  width: 85%;
  margin: 0 auto;
  padding: 4% 0;
}
.new-pro-title {
  color: #999;
  font-size: 10px;
  overflow: hidden;
  /*  */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: center;
  margin-bottom: 4%;
}
.price{
    color: #ca141d;
    font-size: 13px;
    text-align: center;
       overflow: hidden;
            /*  */
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
}
</style>