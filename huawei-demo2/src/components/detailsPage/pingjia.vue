<template>
  <div class="haoping-nav">
    <div class="haoping-box" v-for="item in list" :key="item.id">
        <div class="haoping-left">
          <div class="haoping-username-box">
            <div class="username-img">
              <img :src="item.userimg" alt="">
            </div>
            <div class="username-box-name">
              <p>{{item.username}}</p>
              <p>
                <img src="../../assets/xing.png" alt="">
              </p>

            </div>
          </div>
          <p class="haoping-item">
              {{item.content}}
          </p>
        </div>
        <div class="haoping-left">
          <img :src="item.img" alt="">
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return{
        list:[
          {
            userimg:require("../../assets/haoping.jpg"),
            username:"稚苓",
            content:"非常好 快递超快 质量也很好",
            img:require("../../assets/user-1.jpg")
          },
          {
            userimg:require("../../assets/aijun.jpg"),
            username:"爱军",
            content:"支持华为，力挺华为！ 快递更是神速，昨晚下单，今早拿货！爽！",
            img:require("../../assets/aijunphone.jpg")
          },
          {
            userimg:require("../../assets/yanfei.jpg"),
            username:"燕飞",
            content:"屏幕很大，手感细腻，第二部华为手机，很喜欢",
            img:require("../../assets/pingtu.jpg")
          },
          {
            userimg:require("../../assets/haoping.jpg"),
            username:"稚苓",
            content:"非常好 快递超快 质量也很好",
            img:require("../../assets/user-1.jpg")
          }
        ]
      }
    }
};
</script>
<style  scoped>
.haoping-nav {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
}
.haoping-nav::-webkit-scrollbar {
  display: none;
}
.haoping-box {
  /* background-color: lightpink; */
  height: 100px;
  width: 80%;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  border: 1px solid #e7e7e7;
}
.haoping-left{
  height: 100%;
  margin-right: 10px;
}
.haoping-left img{
  height: 100%;
}
.username-img{
  margin-right: 10px;
  height: 30px;
}
.username-img img{
  height: 100%;
}
.haoping-username-box{
  display: flex;
  /* justify-content: space-between; */
}
.xing{
  height: 21px;
}
.xing img{
  height: 100%;
}
</style>