<template>
  <div class="pro-exhibition">
    <!-- 商品展示图片部分 -->
    <div class="pro-ex-frist" v-for="item in imgList" :key="item.id">
      <div class="pro-ex-content" @click="p40btn(item.id1)">
        <img :src="item.imagef" alt />
      </div>
      <div class="pro-ex-content-f">
        <img :src="item.images" @click="p40btn(item.id2)" alt />
        <img :src="item.imaget" @click="p40btn(item.id3)" alt />
      </div>
    </div>
    <!-- 商品展示实物部分 -->
    <!-- <div class="metarial">
            <div class="metarial-sale">
                    <div class="img-area">
                        <p class="p-tag">
                            <span>3K  触控屏</span>
                        </p>
                        <p class="p-img">
                            <img src="../../assets/Nova-8.png" alt="">
                        </p>
                        <p class="p-name">
                            MateBook X Pro
                        </p>
                        <p class="p-promotion">3K触控全屏</p>
                        <p class="p-price">
                            <span>￥9988</span>
                            <del>￥9999</del>
                        </p>
                    </div>
            </div>
            <div class="metarial-sale">

            </div>
            <div class="metarial-sale">

            </div>
    </div> -->

         <div class="metarial" >
            <div class="metarial-sale"  v-for="item in pList" :key="item.id">
                    <div class="img-area">
                        <p class="p-tag">
                            <span>{{item.title}}</span>
                        </p>
                        <p class="p-img">
                            <img :src="item.img" alt="">
                        </p>
                        <p class="p-name">
                            {{item.name}}
                        </p>
                        <p class="p-promotion">{{item.promotion}}</p>
                        <p class="p-price">
                            <span>{{item.price}}</span>
                            <del>{{item.delprice}}</del>
                        </p>
                    </div>
            </div>
          
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        {
          id1:"HUAWEI-P40-5G",
          id2:"ryPlay4-Pro-5G",
          id3:"ry30qcb-5G",
          imagef: require("../../assets/Nova-1.png"),
          images: require("../../assets/Nova-2.jpg"),
          imaget: require("../../assets/Nova-3.jpg"),
        },
        {
          imagef: require("../../assets/Nova-4.jpg"),
          images: require("../../assets/Nova-5.jpg"),
        },
        {
          imagef: require("../../assets/Nova-6.png"),
          images: require("../../assets/Nova-7.jpg"),
        },
      ],
      pList:[
          {
              title:"3K 触控全屏",
              img:require("../../assets/Nova-8.png"),
              name:"MateBook X Pro",
              promotion:"3K触控全面屏",
              price:"￥9988",
              delprice:"￥9999"
          },
           {
              title:"超值划算",
              img:require("../../assets/Nova-9.png"),
              name:"荣耀30S",
              promotion:"限量送移动电源",
              price:"￥2399",
            

          },
           {
              title:"新品大屏5G",
              img:require("../../assets/Nova-10.png"),
              name:"华为麦芒 9 5G",
              promotion:"1元预订优惠50",
              price:"￥2399",
             

          },

      ]
    };

  },
  methods:{
    p40btn(id){
      this.$router.push({
        path:"/detailspage",
                    query:{
                        id:id
                    }
      })
    }
  }
};
</script>
<style  scoped>
.pro-exhibition {
  width: 100%;
  margin-top: 5%;
}
.pro-ex-frist {
  width: 98%;
  margin: 0 auto;
  display: flex;
}

.pro-ex-content {
  width: 49%;
}
.pro-ex-content-f {
  width: 49%;
}
.pro-ex-frist img {
  width: 100%;
}
.metarial{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.metarial-sale{
    width: 32%;
   background-color: #f5f5f5;
 
}
.img-area{
    width: 85%;  
    margin: 0 auto;
}
.p-img{
    width: 100%;
}
.p-img img{
    width: 100%;
}
.p-tag{
    width: 85%;
    text-align: center;
    background-color: #FF6A6E;
    margin: 0 auto;
    border-radius: 10%;
}
.p-tag span{
    font-size: 5px;
    white-space: nowrap;
   
    color: #fff;
}
.p-name{
    width: 100%;
    white-space: normal;
    text-align: center;
    font-size: 8px;
     overflow: hidden;
            /*  */
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            color: #444;
}
.p-promotion{
     text-align: center;
      font-size: 8px;
      color: #999;
      padding-top:3px ;
}
.p-price{
     text-align: center;
     font-size: 8px;
      padding-top:3px ;
}
.p-price del{
    color: #999;
}
</style>