<template>
  <div>
    <div class="search">
      <div class="content">
        <div class="top-bar">
          <div class="top-bar-left">
            <img src="../../assets/allow_left.png" alt @click="$router.go(-1)" />
          </div>
          <div class="top-bar-middle">
            <div class="search-content">
              <img src="../../assets/search-1.png" alt />             
              <input  type="text" placeholder="P40" >
            </div>
          </div>
          <div class="top-bar-right">
            <a href="#">搜索</a>
          </div>
        </div>
        <!-- 热门搜索 -->
        <div class="middle-content"  >
            <p class="title">热门搜索</p>
            <div class="phone-title" v-for="item in searchList"  :key="item.id" >
                <a href="https://m.vmall.com/search/index?searchWord=P40" class="phone"  >{{item.namef}}</a>
                <a href="https://m.vmall.com/product/10086397382774.html" class="phone">{{item.names}}</a>
                <a href="https://m.vmall.com/product/10086369090195.html" class="phone">{{item.namet}}</a>
               <a href="https://m.vmall.com/product/10086412944469.html" class="phone">{{item.name}}</a>
            </div>
        </div>
        <div class="bottom-bar"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 data(){
   return {
     searchList:[
       {
         namef:"P40",
         names:"荣耀30",
         namet:"MateBookD",
          name:"P30"
       },
       {
          namef:"荣耀v30",
         names:"笔记本新品",
         namet:"Mate 30",
        name:"荣耀2"
       },
       {
           namef:"MatePad",
         names:"荣耀X",
         namet:"荣耀V6",
        name:"荣耀X1"
       }
     ],
     list:[],
     index:0
   }
 }       
};
 
</script>
<style  scoped>
.search {
  width: 100%;
  background-color: #fff;
}
.content {
  width: 100%;
  background-color: #fff;
}
.top-bar {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
}
.top-bar > div {
  margin-top: 5px;
}
.top-bar-left {
  width: 25px;
  margin-left: 20px;
}
.top-bar-left img {
  width: 100%;
}
.top-bar-middle {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
}
.search-content {
  width: 95%;
  height: 32px;
  background-color: rgb(245, 245, 245);
  border-radius: 15px;
  display: flex;
  margin-left: 5px;
}
.search-content input {
  width: 80%;
  height: 100%;
  border: none;
  display: flex;
    z-index: 20;
  background-color: rgb(245, 245, 245);
}
.search-content img {
  width: 30px;
}
a {
  text-decoration: none;
}
.top-bar-right {
  width: 60px;
}
.top-bar-right a {
  text-align: center;
  color: #333;
}
.middle-content{
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
}
.title{
    color: rgb(51, 51, 108);
    font-size: 14px;
    font-weight: bold;
    margin-left: 15px;
}
.phone-title{
     margin-left: 15px;
       display: flex;
    flex-wrap: nowrap;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-around;
}
.phone{
    background-color: #f5f5f5;
    white-space: nowrap;
    text-align: center;
    padding: 5px 12px;
    color: #333;
    font-size: 13px;
    display: inline-block;
    margin-right: 5px;
}
.bottom-bar{
    width: 100%;
    height: 30px;
    background-color: #fff;
    border: none;
}
</style>