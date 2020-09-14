<template>
    <div class="detail-nav">
        <!-- 头部 -->
        <div class="detail-top" >
            <div class="detail-top-head"  @click="jumpClick">
                <div class="top-head-left"  >
                    <img src="../../assets/fei-1.png" alt="" >
                </div>
                <div class="top-head-body"  >
                   
                </div>
                <div class="top-head-right">
                    <img src="../../assets/fei-2.png" alt="">
                </div>
            </div>
        </div>
     <div class="detail-top-content"  v-if="seem">
            <div class="detail-top-head">
                <div class="top-head-left">
                    <img src="../../assets/icon_black_1.png" alt="" @click="jumpClick">
                </div>
                <div class="top-head-body" >
                    <div class="top-head-one" ref="shangping" @click="btnshangping" :class="{'bottom-red':this.scrollTop>0 && this.scrollTop<1145}">
                        <span>商品</span> 
                    </div>
                    <div class="top-head-one" ref="pingjia" @click="btnpingjia" :class="{'bottom-red':this.scrollTop>1145 && this.scrollTop<1341}">
                        <span>评价</span> 
                    </div>
                    <div class="top-head-one" ref="canshu" @click="btncanshu" :class="{'bottom-red':this.scrollTop>1341 && this.scrollTop<1518}">
                        <span>参数</span> 
                    </div>
                    <div class="top-head-one" ref="xiangqing" @click="btnxiangqing" :class="{'bottom-red':this.scrollTop>1518}">
                        <span>详情</span> 
                    </div>
                   
                </div>
                <div class="top-head-right">
                    <img src="../../assets/icon_header_nav.png" alt="">
                </div>
            </div>
        </div>
        <!-- 身体内容部分 -->
        <div class="detail-body" @scroll="activeScroll" ref="acriveOffset">
            
            <!-- 图片轮播 -->
            <div class="detail-body-bigimg">
                <swiper ref="feiSwiper" :options="feiSwiperOptions" class="kuan">
                    <swiper-slide class="lunbo" v-for="item in projectarr.swiper" :key="item.id">
                        <img :src="item.url" alt="">
                    </swiper-slide>
                    <div class="fei-swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            
            <div class="detail-body-margin">
                <!-- 商品页 -->
                <div class="shangping" v-if="projectarr.shopping">
                    <!-- 价格介绍部分 -->
                    <div class="detail-body-title">
                        <i>￥</i>
                        <span>{{projectarr.price}}</span>
                        <p>{{projectarr.pname}}</p>
                    </div>
                    <!-- 活动介绍 -->
                    <div class="detail-body-content" >
                        <span>"【8.6-8.8专享】享12期分期免息，7.20-8.20晒图前3000赠mini音箱。"</span>
                        <span class="black">"麒麟990 5G SoC芯片，纳米微晶陶瓷工艺，5000万超感知徕卡五摄，100倍双目变焦，华为5G全网通旗舰手机"</span>
                    </div>
                    <!-- 促销 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left">促销</div>
                        <div class="detail-body-sales-zhong">
                            <!-- 圆形模板 -->
                            <div class="sales-zhong abnf">
                                <div class="yuanxingitem">
                                    <span class="yuanxing">{{projectarr.shopping.cuxiao.itemOnetitle}}</span>
                                </div>
                                <span class="sales-zhong-item">{{projectarr.shopping.cuxiao.itemOne}}</span>
                            </div>
                            <div class="sales-zhong">
                                <div class="yuanxingitem">
                                    <span class="yuanxing">{{projectarr.shopping.cuxiao.itemTwotitle}}</span>
                                </div>
                                <span class="sales-zhong-item">{{projectarr.shopping.cuxiao.itemTwo}}</span>
                            </div>
                            <div class="sales-zhong">
                                <div class="yuanxingitem" v-for="item in projectarr.shopping.cuxiao.itemThree" :key="item.id">
                                    <span class="yuanxing">{{item}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                            <img src="../../assets/icon-more-right.png" alt="">
                        </div>
                    </div>
                    <!-- 颜色 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left">颜色</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-two">
                                <div class="yuanxingitem" v-for="item in projectarr.shopping.colors" :key="item.id">
                                    <span class="yuanxing active">{{item}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                        </div>
                    </div>
                    <!-- 版本 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left">版本</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-two">
                                <div class="yuanxingitem">
                                    <span class="yuanxing">8G全网通 8GB+256GB</span>
                                </div>
                                <div class="yuanxingitem" v-for="item in projectarr.shopping.banben" :key="item.id">
                                    <span class="yuanxing active">{{item}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                        </div>
                    </div>
                    <!-- 类型 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left">类型</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-two">
                                <div class="yuanxingitem" v-for="item in projectarr.shopping.leixing" :key="item">
                                    <span class="yuanxing active">{{item}}</span>
                                </div>
                                
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                        </div>
                    </div>
                    <!-- 数量 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left">数量</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-two">
                                <div class="yuanxingitem" >
                                    <img src="../../assets/减号.png" alt="">
                                    <div class="num">{{projectarr.num}}</div>
                                    <img src="../../assets/加号.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                        </div>
                    </div>
                    <!-- 保障 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left">保障</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-three">
                                <div class="yuanxingitem ">
                                    <span class="">选购</span>
                                </div>
                                
                                <div class="yuanxingitem" v-for="item in projectarr.shopping.xuangou" :key="item.id">
                                    <span class="fangxing">{{item}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                            <img src="../../assets/icon-more-right.png" alt="">
                        </div>
                    </div>
                    <!-- 免息 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left">免息</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-three">
                                <div class="yuanxingitem">
                                    <span class="">{{projectarr.shopping.mianxi}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                            <img src="../../assets/icon-more-right.png" alt="">
                        </div>
                    </div>
                    <!-- 搭配 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left dapei">搭配</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-five" v-for="item in projectarr.shopping.dapei" :key="item.id">
                                <div class="yuanxingitem">
                                    <img :src="item.img" alt="">
                                    <p>{{item.item}}</p>
                                </div>
                                <div class="yuanxingitem">{{item.jia}}</div>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                        </div>
                    </div>
                    <!-- 送至 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left">送至</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-three">
                                <div class="bottom-juli">
                                    <span class="">{{projectarr.shopping.songzhi.dizhi}}</span>
                                </div>
                                <div class="bottom-juli">
                                    <span class="redfont">{{projectarr.shopping.songzhi.xianhuo}}</span>
                                    <span>{{projectarr.shopping.songzhi.item}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                            <img src="../../assets/icon-more-right.png" alt="">
                        </div>
                    </div>
                    <!-- 服务 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left">服务</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-three">
                                <div class="bottom-juli">
                                    <img src="../../assets/对号.png" class="redfont" />
                                    <span class="">{{projectarr.shopping.fuwu.fuwu1}}</span>
                                </div>
                                <div class="bottom-juli">
                                    <img src="../../assets/对号.png" class="redfont" />
                                    <span>{{projectarr.shopping.fuwu.fuwu2}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                            <img src="../../assets/icon-more-right.png" alt="">
                        </div>
                    </div>
                    <!-- 推荐 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left">推荐</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-four">
                                <div class="yuanxingitem" :key="item.id" v-for="item in projectarr.shopping.tuijian">
                                    <span class="tuijian">{{item}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                            <img src="../../assets/icon-more-right.png" alt="">
                        </div>
                    </div>
                    <!-- 以旧换新 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left">
                            <img src="../../assets/icon_replace_grey.png" alt="">
                        </div>
                        <div class="detail-body-sales-zhong">
                        <div class="sales-zhong abnf">
                                <div class="yuanxingitem">
                                    <span class="yuanxing">{{projectarr.shopping.jiu.jiu1}}</span>
                                </div>
                                <span class="sales-zhong-item">{{projectarr.shopping.jiu.jiu2}}</span>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                            <img src="../../assets/icon-more-right.png" alt="">
                        </div>
                    </div>
                </div>

                <!-- 评价页 -->
                <div class="pingjia">
                    <!-- 用户评价 -->
                    <div class="detail-body-sales" v-if="projectarr.pingjia">
                        <div class="detail-body-sales-left">
                            {{projectarr.pingjia.num}}
                        </div>
                        <div class="detail-body-sales-zhong">
                        </div>
                        <div class="detail-body-sales-right">
                            <span>{{projectarr.pingjia.haoping}}</span>
                            <span>好评</span>
                            <div class="yuanxingitem dayu">
                                    <img src="../../assets/arrow_right.png" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- 用户评价详情 -->
                    <div class="detail-user-detail">
                        <ping-jia></ping-jia>
                    </div>
                     <!-- 查看评价按钮 -->
                    <div class="detail-body-sales">
                        <div class="detail-body-sales-left"></div>
                        <div class="">
                            <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-two">
                                <div class="yuanxingitem">
                                    <span class="yuanxing active">查看全部评价</span>
                                </div>
                                <div class="yuanxingitem">
                                    <span class="yuanxing active">购买咨询（70）</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="detail-body-sales-right"></div>
                    </div>

                </div>

                <!-- 参数页 -->
                <div class="canshu"  v-if="projectarr.canshu">
                    <div class="kong"></div>
                    <!-- 规格参数 -->
                    <div class="mask-white">

                    </div>
                    
                    <!-- 传播名 -->
                    <div class="detail-body-canshu">
                        <div class="detail-body-sales-left">版本</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-two">
                                <div class="yuanxingitem">
                                    <span class="yuanxing active">{{projectarr.canshu.chuanboming}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail-body-sales-right">
                        </div>
                    </div>

                    <!-- 后置摄像头 -->
                    <div class="detail-body-canshu" v-if="projectarr.canshu">
                        <div class="detail-body-sales-left">后置摄像头</div>
                        <div class="detail-body-sales-zhong">
                            <div class="sales-zhong-two">
                                <div class="yuanxingitem">
                                    <p>{{projectarr.canshu.houzhi}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 查看全部参数 -->
                    <div class="look-all-sale">
                        <span>查看全部商品参数</span>
                   </div>
                </div>

                <!-- 详情页 -->
                <div class="xiangqing">
                    <!-- 购机享多重福利 -->
                    <div>
                        <p class="particulars" :key="item.id" v-for="item in projectarr.gouji">
                            <img :src="item" alt="">
                        </p>
                    </div>
                    <!-- 推荐理由 -->
                    <div>
                        <p class="particulars" :key="item.id" v-for="item in projectarr.tuijian">
                            <img :src="item" alt="">
                        </p>
                       
                    </div>
                </div>

            </div>
        </div>
        <!-- 底部部分 -->
        <div class="detail-bottom">
            <div class="detail-bottom-item">
                <img src="../../assets/首页.png" alt="">
                <div>首页</div>
            </div>
            <div class="detail-bottom-item">
                <img src="../../assets/icon-service-black.png" alt="">
                <div>客服</div>
            </div>
            <!-- 添加到购物车 -->
            <div class="detail-bottom-item" @click="btnmaicar()">
                <div>
                    <img src="../../assets/购物车.png" alt="">
                    <div class="addnum" :class="{gwc:isgwc}">
                        {{addnumAll}}
                    </div>
                    <div >购物车</div>
                </div>
            </div>
            <div class="detail-bottom-item gou">
                <div class="detail-left" @click="addshopping(projectarr,shoppingid)">加入购物车</div>
                <div class="detail-right" @click="buyshopping(shoppingid)">立即购买</div>
                <!-- {{addnumAll}} -->
            </div>
        </div>
    </div>
</template>

<script>
import pingjia from "./pingjia.vue";
import axios from "axios";
import store from "../../store/index.js"
export default {
    store,
     created(){
        // let id = this.$route.query.id;
        // console.log(this.$route.query.id)
            let url;
            // url = "http://localhost:5500/src/data/xiangqing/"+this.$route.query.id+".json";
            url = "http://localhost:2020/api/getProductDetail?id="+this.$route.query.id;
            let that = this;
            axios.get(url)
            .then(function (response) {
                console.log("response")
                console.log(response)
            if(response.data.status == 200){
                that.projectarr = response.data;
                console.log("projectarr")
                console.log(that.projectarr)
                that.shoppingid = response.data.id;
            }
            })
            .catch(function (error) {
                console.log(error);
            });
            
            
     },
    
     
     watch:{
         '$route.query.id'(){
             
            let id = this.$route.query.id;
            let url = "http://localhost:5500/src/data/xiangqing/"+id+".json";

            let that = this;
            axios.get(url)
            .then(function (response) {
            if(response.status == 200){
                that.projectarr = response.data;
                that.shoppingid = response.data.shoppingid;
            }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        
     },
     methods:{
         
         btnmaicar(){ 
                this.$parent.$children[0].componentName="discover-list"                     
                this.$router.replace("/")
                this.$emit("detailPage");
                console.log(this.$parent.$children[0].componentName);
                
         },
         addshopping(projectarr,shoppingid){
             //获取购物车
             let cart = this.$store.state.shoppingList;

            //当前选购的产品
            
             if(cart.length<1){//空购物车
                cart.push(
                     {
                        id:this.shoppingid,
                       price: "￥"+String(projectarr.price), 
                       avatar: projectarr.swiper[0].url,
                       wholeName:projectarr.pname,
                       subTitle:projectarr.pname,
                        okSeen:true,
                        shuliang:1,
                        addnum:1
                   }
                )
             }else{//有购物车
                let has=false;

                for(let i =0;i<cart.length;i++){
                 
                 if(cart[i].wholeName == projectarr.pname){
                     cart[i].shuliang++;
                     cart[i].addnum++;
                     has=true
                 }
             };
                if(!has){//购物车中没有当前产品
                    cart.push(
                     {
                          id:this.shoppingid,
                       price: "￥"+String(projectarr.price), 
                       avatar: projectarr.swiper[0].url,
                       wholeName:projectarr.pname,
                       subTitle:projectarr.pname,
                        okSeen:true,
                        shuliang:1,
                        addnum:1
                   }
                )

                }
             }
             //更新store中的购物车
             this.$store.state.shoppingList = cart;

             
            //  this.shoppingnum++;
            //  projectarr.addnum++;
             
            //  this.$store.state.addnum = this.shoppingnum;

            //  let index = -1;
             
            //  for(let i =0;i<this.$store.state.shoppingList.length;i++){
            //      if(this.$store.state.shoppingList[i].wholeName == projectarr.shopping.introduce){
            //          index = i;
            //      }
            //  };
            //  if(index>-1){
            //      console.log("index>-1")
            //      this.$store.state.shoppingList[index].shuliang = projectarr.addnum;
            //      this.$store.state.shoppingList[index].addnum = projectarr.addnum;
            //      this.$store.state.shoppingList[index].peiNumber = projectarr.addnum;
            //      this.shoppingnum = 0;
            //  }else if(index==-1){
            //      console.log("index==-1")
            //      this.$store.state.shoppingList.push(
            //          {
            //            price: "￥"+String(projectarr.price), 
            //            avatar: projectarr.lunbotu[1],
            //            wholeName:projectarr.shopping.introduce,
            //            subTitle:projectarr.shopping.subTitle,
            //             okSeen:true,
            //             shuliang:this.shoppingnum,
            //             redInfo:projectarr.shopping.itemThree,
            //             service:projectarr.shopping.xuangou,
            //             peiImage:projectarr.shopping.dapei[0].img,
            //             peiNumber:this.shoppingnum,
            //             peiName:projectarr.shopping.dapei[0].name,
            //             addnum:this.shoppingnum
            //        }
                   
                   
            //     );
            //   this.shoppingnum = 0;
            //  }
            
             console.log("store shoopingList");
                console.log(this.$store.state.shoppingList);


         },
         buyshopping(shoppingid){
             console.log(shoppingid)
         },
         activeScroll(e){
            //  console.log(event.target.scrollTop)
            if(e.target.scrollTop>0){
                this.seem=true
            }else{
                this.seem=false
            };
            this.scrollTop = event.target.scrollTop
        },
        btnshangping(){
            this.$refs.acriveOffset.scrollTop = 0
        },
        btnpingjia(){
            this.$refs.acriveOffset.scrollTop = 1147
        },
        btncanshu(){
            this.$refs.acriveOffset.scrollTop = 1346
        },
        btnxiangqing(){
            this.$refs.acriveOffset.scrollTop = 1519
        },
        jumpClick(){
            this.$router.go(-1)
        }
     },
     data() {
      return {
          classList:null,
          offsetTop:0,
          scrollTop:0,
        //   isgwc:false,
        //   addnum:-1,
          id:"HUAWEI-P40-5G",
          price:"",
          seem:false,
          shoppingid:null,
          shoppingnum:0,
          projectarr:{},
          feiSwiperOptions: {
            loop:true,
            pagination: {
                el: '.fei-swiper-pagination',
                type: 'fraction',
            }
            }
      }
    },
    components:{
        "ping-jia":pingjia
     },
    computed: {
      swiper() {
        return this.$refs.feiSwiper.$swiper
      },
      isgwc(){
          let that = this;
             if (that.addnumAll == 0)
             {
                
                 return false
             }
             else 
             {
                 return true
             }
         },
         addnumAll()
         {
             let numAll = 0
             console.log("addnumAll")
             console.log(this.$store.state.shoppingList)
             
             if(this.$store.state.shoppingList.length!=0)
             {
                 for(let i=0;i<this.$store.state.shoppingList.length;i++)
                 {
                     numAll+=this.$store.state.shoppingList[i].addnum;
                 }
                 return numAll
             }
             else
             {
                 return 0
             }
            
         }
    }
}
</script>

<style scoped>
*{
  font-size: 12px;
}
.top-head-one span{
    color: initial;
}
.bottom-red span{
    padding-bottom: 5px;
    font-weight: 700;
    color: #fb7343;
    border-bottom: 3px solid #fb7343;
}
/* 购物车头部数字 */
.addnum{
    display: inline-block;
    border-radius: 20px;
    height: 15px;
    line-height: 15px;
    width: 15px;
    position: relative;
    top: -13px;
    left: -20px;
    color: white;
}
.gwc{
    display: inline-block;
    border-radius: 20px;
    height: 15px;
    line-height: 15px;
    width: 15px;
    position: relative;
    top: -13px;
    left: -20px;
    background-color: #e33b2c;
    color: white;
}
/* 图片轮播图 */
.kuan,.lunbo,.lunbo img{
  height: 100%;
}
.fei-swiper-pagination{
    text-align: center;
    position: absolute;
  margin-left: 83%;
  z-index: 100;
    width: 9%;
    border-radius: 20px;
    background-color: rgba(0, 0, 0,.15);
    color: #fff;
}

/* 头部 */
.detail-nav{
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.detail-top{
    width: 100%;
    background-color:transparent;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
}
.detail-top-content{
      width: 100%;
    background-color:#f5f5f5;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    z-index: 500;
}
.detail-top-head{
    width: 100%;
    display: flex;
    z-index: 2;
    flex-direction: row;
    justify-content: space-between;
}
.top-head-left{
    height: 39px;
    padding: 5px 5px 5px 10px;
}
.top-head-left img{
    height: 100%;
}
.top-head-body{
    flex-flow: 1;
    display: flex;
    width: 57%;
    line-height: 39px;
    justify-content: space-between;
}
.top-head-one{
    margin: 0 10px;
}
.top-head-right{
    height: 39px;
    padding: 5px 10px 5px 5px;
}
.top-head-right img{
    height: 100%;
}



/* 身体内容部分 */

.detail-body{
    /* border: 1px solid red; */
    flex-grow: 1;
    height: 100px;
    /* background-color: #87668f52; */
    overflow-y: auto;
}
.detail-body-sales-left{
 flex-shrink: 0;
 margin-right: 30px;
 padding-left: 10px;
 margin-top: 2px;
}
.detail-body-sales-left>img{
    height: 24px;
}
.detail-body-sales-right{
 flex-shrink: 0;
 margin-left: 30px;
}
.detail-body-sales-right>img{
    height: 23px;
}
.detail-body-bigimg{
    height: 55%;
}
.detail-body-sales-zhong{
    flex-grow: 1;
}
.detail-body-title{
    padding-left: 10px;
    margin-top: 5px;
    background-color: white;
}
.detail-body-title i,span{
    font-style: normal;
    color: #ca141d;
}
.detail-body-title>i{
    font-weight: 700;
    font-size: 17px;
}
.detail-body-title>span{
    font-weight: 600;
    font-size: 22px;
}
.detail-body-title>p{
    font-weight: 600;
    font-size: 15px; 
}
.detail-body-content{
    padding-left: 10px;
    margin-top: 5px;
    background-color: white;
}
.detail-body-content{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.detail-body-content .black{
    color: #888888;
}
.detail-body-sales{
    margin-top: 8px;
    padding-top:5px;
    background-color: white;
    display: flex;
    justify-content: space-between;
}
.sales-zhong,.abnf{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.yuanxingitem{
    margin-bottom: 10px;
}
.yuanxing{
    border-radius: 16px;
    border: 1px solid rgba(244, 139, 146, 1);
    padding-left: 10px;
    padding-right: 8px;
}
.sales-zhong-item{
    color: rgb(51, 51, 51);
}
.yuanxingitem{
    display: inline-block;
    margin-right: 10px;
    margin-top: 3px;
}
.yuanxingitem,.active{
    color: rgb(51, 51, 51);
    vertical-align: middle;
    border-color: rgb(51, 51, 51);
}
.yuanxingitem>img{
    height: 20px;
    width: 20px;
}
.yuanxingitem>.num{
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 13px;
}
.fangxing{
    border: 1px solid #333;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 8px;
}
.sales-zhong-three span{
    color: #333;
}
.dapei{
    margin-top: 18px;
}
.dayu>img{
    margin-left: 10px;
    height: 11px;
    width: 10px;
}
.sales-zhong-three .redfont{
    color: #ca141d;
}
.bottom-juli{
    margin-bottom: 3px;
}
.bottom-juli>img{
    height: 10px;
    vertical-align: middle;
    margin-right: 5px;
}
.sales-zhong-four{
    display: flex;
    justify-content: space-between;
}
.tuijian{
    border-radius: 16px;
    padding: 0 7px;
    background-color: #5f52524f;
}
.tuijian{
    color: #333;
}
.sales-zhong-five{
    display: inline-block;
}


/* 评价部分 */
/* 添加间隙 */
.kong{
    height: 10px;
}
.detail-user-detail{
    height: 100px;
    margin-top: 2%;
    background-color: white;
}
.detail-body-canshu{
    /* margin-top: 8px; */
    padding-top:5px;
    background-color: white;
    display: flex;
    justify-content: space-between;
}

/* 详情页面 */
.particulars{
    height: 5%;
}
.particulars>img{
    width: 100%;
}

/* 底部部分 */
.detail-bottom{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: white;
}
/* .detail-bottom-item{
    border: 1px solid red;
} */
.detail-bottom-item img{
    height: 22px;
    padding: 0px 4px;
    margin: 4px 10px 0px;
}
.detail-bottom-item>div{
    text-align: center;
    margin-bottom: 4px;
}
.detail-bottom-item.gou{
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
}
.detail-bottom-item.gou>div{
    flex-grow: 1;
    margin-top: 8px;
    font-size: 15px;
    height: 33px;
    line-height: 33px;
}
.detail-bottom-item.gou>.detail-left{
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background-color: #fb7343;
    color: white;
}
.detail-bottom-item.gou>.detail-right{
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background-color: #e33b2c;
    color: white;
}


/* 头部滑动小数 */
.canshu{
    width: 100%;
    position: relative;
  
}
.mask-white{
    width: 100%;
          background: url(../../assets/mask-1.png) no-repeat center;
    /* background-size: contain; */
    position: absolute;
    top: 46%;
    height: 26%;
}
.look-all-sale{
    width: 100%;
    text-align: center;
   padding: 26px 0;
    font-size: 16px;
    background-color: #fff;  margin-bottom: 2%;
}
.look-all-sale span{
    font-size: 14px;
    color: #333;
    border-radius: 20px;
    border: 1px solid #999;
    padding: 5px  25px;
}
</style>