<template>
<div class="outer">
    <div class="dele-hint" v-if="hint">
        <div class="hint">
            <p>确定要删除所选商品吗？</p>
            <ul class="hint-ul">
                <li class="hint-li" @click="hint=false" style="color:grey;">取消</li>
                <li class="hint-li" @click="deleShop" style="border-right:none;color:rgb(202,20,29)">确定</li>
            </ul>
        </div>
    </div>
    <div class="top-cart-fix">
        <!-- <div class="iconfont back" @click="goback">&#xe669;</div> -->
        <p>购物车</p>
        <div class="edit" @click="edit()">
            <p v-if="rightEdit" style="font-size:16px">编辑</p>
            <p v-if="!rightEdit" style="font-size:16px">完成</p>
        </div>
        <!-- <button @click="show()">显示</button> -->
    </div>    
    <div class="other"></div>
    <div class="cart-content-outer">
        <div class="cart-content" v-for="(item,index) in this.$store.state.shoppingList" :key="item">
            <div class="cart-content-left">
                <div class="ok" @click="checkOk(index)" >
                    <div class="iconfont red-ok " v-if="item.okSeen==true">&#xe612;
                        <!-- <div class="edit-cover" v-if="!rightEdit"></div> -->
                    </div>
                </div>
                
                
                <img :src="item.avatar">
            </div>
            
            <div class="cart-content-right">

                <p class="whole-name">{{item.wholeName}}</p>
                <p class="sub-title">{{item.subTitle}}</p>
                
                <div class="red-info">
                    <p class="red-info"  v-for="item2 in item.redInfo" :key="item2">{{item2}}</p>
                </div>
                
                
                <div class="price-div">
                    <p class="price">{{item.price}}</p>
                    <div class="add-minus">
                        <div class="iconfont minus" @click="minus(index)">&#xe66b;</div>
                        <p class="add-minus-num">{{item.shuliang}}</p>
                        <div class="iconfont add" @click="add(index)">&#xe666;</div>
                    </div>
                </div>

                <!-- <div class="insert">限购20件</div> -->
                <!-- <div class="service">
                    <div class="service-left">服务</div>
                    <div class="service-right">
                        <div class="service-right-detail" v-for="item3 in item.service" :key="item3">{{item3}}</div>
                    </div>
                    <p></p>
                </div> -->

                <!-- <div class="pei">
                    <div class="pei-left">配</div>
                    <div class="pei-right">
                    <img :src="item.peiImage">
                    <div class="pei-name">{{item.peiName}}</div>
                    <div class="pei-number">X{{item.peiNumber}}</div>
                    </div>
                    <p></p>
                </div> -->
            </div>
            
                
        </div>
    </div>

    <div class="fix-bottom">
        <div class="bottom-left">
            <div class="ok bottom" @click="checkOkAll" >
                <div class="iconfont red-ok " v-if="okSeenAll" >&#xe612;
                    <!-- <div class="edit-cover" v-if="!rightEdit"></div> -->
                </div>
                
            </div>
             <p>全选</p>
        </div>

        <div class="bottom-right" v-if="rightEdit">
            <p class="bottom-zongji">总计:</p>
            <p class="bottom-price">￥{{Inprice}}</p>

            <p class="makeSure" @click="save">结算({{jiesuan}})</p>
        </div>

        <div class="bottom-right-edit" v-if="!rightEdit" @click="deleHint">
        删除
        </div>
    </div>

    </div>


  
</template>

<script>
import store from "../../../store/index.js";
import axios from "axios";
export default {
    store,
    data(){
    
        return{
            okSeenAll:true,
            // jiesuan:this.$store.state.shoppingList.length
            rightEdit:true,
            okbtn:{},
            hint:false,
            
        }
    },
    computed:{
        Inprice(){
            let price = 0;
            
            for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                if(this.$store.state.shoppingList[i].okSeen == true){
                    price+=parseInt(this.$store.state.shoppingList[i].price.slice(1))*this.$store.state.shoppingList[i].shuliang;

                }
            }
            return price
        },
        jiesuan(){
            let countQ = 0;
            
            for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                if(this.$store.state.shoppingList[i].okSeen == true){
                    
                    countQ+=this.$store.state.shoppingList[i].shuliang;
                }
            }
           return countQ;
        }
    },
    methods:{
        edit()
        {
            this.rightEdit = !this.rightEdit;
            this.okSeenAll = false;
            for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                this.$store.state.shoppingList[i].okSeen = false;
            }
            
            
        },
        deleHint()
        {
            for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                if (this.$store.state.shoppingList[i].okSeen == true)
                {
                    this.hint=!this.hint;
                    break
                }

            }
            
        },
        deleShop()
        {
            this.$store.commit("deleShop");
            
            console.log("in cartHave");
          
            this.hint = false;
              console.log(this.$store.state.shoppingList=="");
            //   this.$router.replace("/")
            console.log("in if")
            if (this.$store.state.shoppingList=="")
            {
                console.log("I go to /")
                this.$router.replace("/")
            }
        },
        
        checkOk(n)
        {
            
            
            let count = 0;
           
            this.$store.state.shoppingList[n].okSeen = !this.$store.state.shoppingList[n].okSeen;
            // if (this.$store.state.shoppingList[n].okSeen==false)
            // {
            //     console.log(this.$refs.littleok);
            // }
            for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                if(this.$store.state.shoppingList[i].okSeen == true){
                    count++;
                    
                }
            }
            // this.jiesuan = count;
            if (count == this.$store.state.shoppingList.length)
            {
                this.okSeenAll = true;
            } 
            if (count < this.$store.state.shoppingList.length)
            {
                this.okSeenAll = false;
            } 

           
        },
        checkOkAll()
        {
            
            this.okSeenAll = !this.okSeenAll;
            // console.log(this.$refs.okBtnAll);
            // if (this.okSeenAll==true)
            // {
            //     this.$refs.okBtnAll.style.border="none";
            // }
            // if (this.okSeenAll==false)
            // {
            //     this.$refs.okBtnAll.style.border="1px solid black";
            // }
            
            
            
            for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                this.$store.state.shoppingList[i].okSeen = true;
            }

            if (this.okSeenAll == false)
            {
                for(let i=0;i<this.$store.state.shoppingList.length;i++)
            {
                this.$store.state.shoppingList[i].okSeen = false;
            }
            }

        },
        add(i)
        {
            
            this.$store.state.shoppingList[i].shuliang++;
            this.$store.state.shoppingList[i].peiNumber++;
            
        },
        minus(i)
        {
            
            if (this.$store.state.shoppingList[i].shuliang>=2)
            {
                this.$store.state.shoppingList[i].shuliang--;
            }
            if (this.$store.state.shoppingList[i].peiNumber>=2)
            {
                this.$store.state.shoppingList[i].peiNumber--;
            }
        },
        goback()
        {
            this.$router.go(-1)
        },
        save(){
            //购物车
            let cart=this.$store.state.shoppingList;

            //判断用户是否登录
            if(!this.$store.state.token){
                this.$router.push("/login")
            }else{//已经登录

                //用户id
            let uid = this.$store.state.uid;
             
            //发送到后端保存
            this.axios.post("http://localhost:2020/api/save",{cart,uid}).then((res)=>{
                if(res.data.status==200){
                    //清空购物车
                    this.$store.state.shoppingList=[]

                    //更新购物车状态
                    
                }

            })
            }

            

        }
    }

}
</script>

<style scoped>
.iconfont.back
{
    /* border:1px solid black; */
    position:absolute;
    left:5px;
    border-radius:50%;
    width:22px;
    height:22px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    background-color:rgb(172, 171, 171);
}
.cart-content-outer
{
    /* border:1px solid black; */
    height:100%;
    width:100%;
    overflow:auto;
    padding-bottom:20px;
}
.top-bar
{
    display:none;
    height:0;
}
.outer
{
    width:100%;
    height:100%;
    overflow-y:auto;
    overflow-x:hidden;
}
.other
{
    width:100%;
    height:7.2%;
    /* border:1px solid black; */
    /* display:none; */
    
}
.top-cart-fix
{
    /* border:1px solid black; */
    position:fixed;
    top:0;
    width:100%;
    height:6.5%;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    font-size:18px;
    z-index:100;
}
.top-cart-fix p
{
    font-size:18px;
}

.dele-hint
{
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.315);
    
    position:fixed;
    top:0;
    z-index:1000;
}
.hint
{
    width:91%;
    height:17%;
    background-color:white;
    opacity:1;
    margin:513px auto 0;
    border-radius:10px;
    text-align:center;
    
}
.hint p
{
    display:inline-block;
    height:20px;
    width:100%;
    margin-top:23px;
    font-size:15px;
}
.hint-ul
{
    display:inline-block;
    margin-top:28.5px;
    width:100%;
    height:25px
}
.hint-li
{
    border-right:1px solid rgb(202, 202, 202);
    float:left;
    width:50%;
    height:100%;
    text-align:center;
    font-size:14px;
}
div.edit
{
    position:absolute;
    right:0;
    width:60px;
    color: rgb(136,136,136);
    font-size:16px;
    margin-right:10px;
}

.cart-content
{
    margin:0 auto;
    margin-top:6.5px;
    
    /* border:1px solid black; */
    width:95%;
    /* height:45.5%; */
    height:auto;
    background-color:white;
    border-radius:10px;
    display:flex;
    padding-bottom:6px;

}
ul,li
{
    list-style:none;
}

.cart-content img
{
    width:85px;
}

.cart-content-left
{
    width:36%;
    height:30%;
    /* border:1px solid black; */
    display:flex;
    align-items:center;
    margin-top:24px;
    padding-left:19px;
    
}

.cart-content-right
{
    width:64%;
    height:80%;
    /* border:1px solid black; */
    margin-top:22px;

}

div.red-info
{
    width:100%;
    height:15px;
    /* border:1px solid red; */
    display:flex;
    align-items:center;
    margin-top:11px;
    overflow:hidden;
}
p.red-info
{
    
    font-size:7px;
    color:red;
    border:1px solid red;
    width:60px;
    height:15px;
    text-align:center;
    border-radius:10px;
    line-height:15px;
    margin-left:3px;
}
.ok
{
    width:20px;
    height:20px;
    border-radius:50%;
    border:1px solid black;
    margin-left:-4px;
    flex-shrink:0;

}

.cart-content-left img
{
    /* border:1px solid red; */
    margin-left:5px;
}

p.whole-name
{
    width:100%;
    /* border:1px solid black; */
    font-size:13px;
   
}

p.sub-title
{
    font-size:12px;
    margin-top:7px;
}

.price-div
{
    width:100%;
    height:30px;
    /* border:1px solid black; */
    margin-top:15px;
    display:flex;
    align-items:center;
}

p.price
{
    
    font-size:16px;
    color:rgb(202,20,29);
    font-weight:600;
    
}

.add-minus
{
    
    margin-left:68px;
    width:43%;
    height:100%;
    /* border:1px solid black; */
    display:flex;
    justify-content:space-evenly;
    align-items:center;
}


.iconfont.minus,.add-minus-num,.iconfont.add
{
    width:33%;
    border:1px solid grey;
}

.add-minus-num
{
    font-size:13px;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    border:none;
}

.iconfont.minus,.iconfont.add
{
    border-radius:50%;
    width:25px;
    height:25px;
    display:flex;
    justify-content:center;
    align-items:center
}

.add-minus-num
{
    text-align:center;
    height:20px;
    line-height:21px;
}

.insert
{
    width:100%;
    /* border:1px solid black; */
    display:flex;
    justify-content:flex-end;
    font-size:12px;
    color:rgb(202,20,29);
    padding-right:10px;
}

.iconfont.red-ok
{
    width:100%;
    height:100%;
    border-radius:50%;
    color:white;
    background-color:rgb(202,20,29);
    font-weight:600;
    /* border:1px solid black; */
    display:flex;
    justify-content:center;
    align-items:center;

}

.fix-bottom
{
    position:fixed;
    bottom:53px;
    width:100%;
    height:6.5%;
    /* border:1px solid black; */
    display:flex;
    align-items:center;
    background-color:white;
    justify-content:space-between;
}



.bottom-right
{
    flex-shrink:0;
    height:100%;
    display:flex;
    align-items:center;
}
.fix-bottom .bottom-right
{
    /* width:220px; */
    display:flex;
    float:right;
    /* border:1px solid black; */
    /* margin-left:40px; */
    justify-content:space-between;
}

p.bottom-zongji
{
    /* display:inline-block; */
    /* width:60px; */
    height:50%;
    /* border:1px solid black; */
    font-size:17px;
}
p.bottom-price
{
    /* display:inline-block; */
    /* width:80px; */
    height:50%;
    color:rgb(202,20,29);
    /* margin-left:-13px; */
    font-weight:600;
    /* border:1px solid black; */
    font-size:17px;
    margin-right:5px;
    margin-left:5px;
}

p.makeSure
{
    width:90px;
    height:85%;
    background-image:linear-gradient(to right , rgb(235, 69, 56), rgb(220,29,44)   );
    text-align:center;
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:6px;
    color:white;
    /* font-weight:600; */
    font-size:16px;
    
}

.bottom-right-edit
{
    width:93px;
    height:38px;
    border:1px solid black;
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:10px;
    margin-top:2px;
    font-size:15.5px;
}
.edit-cover
{
    flex-shrink:0;
    width:18px;
    height:18px;
    border-radius:50%;
    background-color:white;
    margin-left:-16px;
    margin-top:0px;
    z-index:600;
    flex-grow:1;
}

.bottom-left
{
    width:70px;
    display:flex;
    margin-left:17px;
    justify-content:center;
    /* border:1px solid black; */
}

.ok.bottom
{
    margin-right:10px;
}

.bottom-left p
{
    font-size:13px;
    color:grey;
}

.service-left
{
    /* border:1px solid blue; */
    width:40px;
    font-size:12px;
}

.service
{
    width:100%;
    height:35px;
    /* border:1px solid black; */
    display:flex;
    align-items:center;
}
.service-right
{
    justify-content:space-between;
    /* border:1px solid blue; */
    display:flex;
    width:135px;
    overflow:hidden;
    box-shadow:0 0 10px 2px white inset;
    margin-top:2px;
    
}
.service-right-detail
{
    border:1px solid grey;
    display:inline-block;
    font-size:12px;
    padding:0 4.8px;
    flex-shrink:0;
    margin-right:7px;
    height:20px;
    line-height:18px;
    text-align:center;
}

.pei
{
     width:100%;
    height:35px;
    /* border:1px solid black; */
    display:flex;
    align-items:center;
    
}
.pei-right img
{
    width:20px;
    height:auto;
    /* border:1px solid black; */
    display:inline-block;
    flex-shrink:0;
}
.pei-left
{
    /* border:1px solid blue; */
    width:40px;
    font-size:12px;
}

.pei-right
{
    justify-content:space-between;
    /* border:1px solid blue; */
    display:flex;
    width:80%;
    overflow:hidden;
    box-shadow:0 0 10px 2px white inset;
    margin-top:2px;
}

.pei-number
{
    /* border:1px solid black; */
    font-size:12px;
    
}

.pei-name
{
    /* border:1px solid black; */
     text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size:12px;
    width:67%;
    margin-right:10px;
}


</style>