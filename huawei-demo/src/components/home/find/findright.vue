<template>
    <div class="substance-nav">
        <!-- 广告栏 -->
        <!-- <div class="substance-advert" v-for="item in arr.bannerOne" :key="item.id">
            <div class="substance-advert-img">
                <img :src="item" alt="加载失败">
            </div>
        </div> -->
        <!-- 横向三栏广告 -->
        <!-- <div class="substance-virtue-banner">
                <swiper ref="SwiperThreepng" :options="feiSwiperOptions">
                    <swiper-slide class="substance-virtue-paizhao" v-for="item in arr.bannerTwo" :key="item.id">
                        <img :src="item" alt="">
                    </swiper-slide>
                </swiper>
        </div> -->
        <div class="substance-abvert">
               <div class="substance-abvert-img">
                   <img :src="datas.ad" alt="加载失败" style="width:97%">
               </div>                
        </div>
        <!-- 商品内容 -->
        <!-- <div class="substance-phone">
            <p>{{arr.shoppname}}</p>
            <div class="substance-phone-item">
                <div class="substance-phone-item-img"  @click="seeshoping(item.uid)" v-for="item in arr.shoppingOne" :key="item.id">
                    <img :src="item.img" alt="图片加载失败">
                    <p>{{item.content}}</p>
                </div>
            </div>
        </div> -->
        <!-- 内容配件 -->
        <!-- <div class="substance-phone">
            <p>{{arr.shoppnametwo}}</p>
            <div class="substance-phone-item">
                <div class="substance-phone-item-img" v-for="item in arr.shoppingPartsOne" :key="item.id">
                    <img :src="item.img" alt="图片加载失败">
                    <p>{{item.content}}</p>
                </div>
            </div>
        </div>  -->
        <div class="substance-phone" v-for="(item,index) in datas.list" :key="index">
            <p>{{item.title}}</p>
            <div class="substance-phone-item">
                <div class="substance-phone-item-img"  @click="seeshoping(item.id)" v-for="item in item.data" :key="item.id">
                    <img :src="item.poster" alt="图片加载失败">
                    <p>{{item.pname}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {

    data(){
        return{
            feiSwiperOptions:{
                slidesPerView : 3,
            },
            datas:{}
        }
    },
    props:["arr","c1id"],
    watch:{
        "c1id"(newval,oldval){
            // console.log(newval,oldval)
            if(newval){
                var that = this;
                axios.get("http://localhost:2020/api/getlist?c1id="+newval).then((response)=>{
                    console.log(response.data)
                    that.datas=response.data
                })
            }
        }
    },
    created(){
        console.log(this.c1id)
        axios.get("http://localhost:2020/api/getlist?c1id="+this.c1id).then((response)=>{
                    console.log(response.data)

                    this.datas=response.data
                })
    },
    methods:{
        seeshoping(id){
            console.log(id)
            this.$router.push({
                    path:"/detailspage",
                    query:{
                        id:id
                    }
                }) 
        }
    }
} 
</script>

<style scoped>

*{
  font-size: 12px;
}
.substance-nav{
    overflow-y: auto;
    height: 100%;
    margin-left: 10px;
}
.substance-advert-img{
    height: 13%;
}
.substance-advert-img img{
    width: 100%;
}
.substance-virtue{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.substance-virtue-img{
    height: 7%;
    flex: 0 0 32%;
}
.substance-virtue-img img{
    width: 100%;
}
.substance-phone>p{
    text-align: center;
    padding: 15px 0;
}
.substance-phone-item{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.substance-phone-item-img{
    height: 10%;
    width: 33%;
}
.substance-phone-item-img{
    font-size: 14px;
    color: #666;
    text-align: center;
}
.substance-phone-item-img img{
    width: 63%;
}

/* 轮播图 */

.substance-virtue-paizhao img{
    height: 100%;
    width: 100%;
}

.substance-phone-item-img p{
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp:2;
    display:-webkit-box;
    -webkit-box-orient: vertical;
}
</style>