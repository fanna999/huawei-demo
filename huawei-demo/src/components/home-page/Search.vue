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
        <div class="middle-content">
            <p class="title">热门搜索</p>
            <div class="phone-title">
                <a href="https://m.vmall.com/product/10086013232739.html" class="phone">P40</a>
                <a href="https://m.vmall.com/product/10086557426930.html" class="phone">荣耀30</a>
                <a href="https://m.vmall.com/product/10086783311507.html" class="phone">nova7</a>
                <a href="https://m.vmall.com/product/10086768439564.html" class="phone">MateBookD</a>
               
            </div>
            <div class="phone-title">
                <a href="https://m.vmall.com/product/10086811807933.html" class="phone">荣耀V30</a>
                <a href="https://m.vmall.com/product/10086403884951.html" class="phone">笔记本新品</a>
                <a href="https://m.vmall.com/product/10086238753372.html" class="phone">Mate 30</a>
                
               
            </div>
            <div class="phone-title active">
                <a href="https://m.vmall.com/product/10086418186714.html" class="phone">MatePad</a>
                <a href="https://m.vmall.com/product/10086397382774.html" class="phone">荣耀X10</a>
                <a href="https://m.vmall.com/product/10086412944469.html" class="phone">荣耀平板V6</a>
            </div>
        </div>
        <div class="bottom-bar"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 

         
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
  /* margin-top: 8px; */
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
  /* color: rgba(0, 0, 0, 0); */
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
}
.phone{
    background-color: #f5f5f5;
    height: 20px;
    text-align: center;
    padding: 0 12px;
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