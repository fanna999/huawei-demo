<template>
  <div class="haoping-nav">
    
    <div class="haoping-box" >
        <div class="haoping-left">
          <div class="haoping-username-box">
            <div class="username-img">
              <img src="../../assets/haoping.jpg" alt="">
            </div>
            <div class="username-box-name">
              <p>凌风</p>
              <p>
                <img src="../../assets/xing.png" alt="">
              </p>

            </div>
          </div>
          <p class="haoping-item">
              非常好 快递超快 质量也很好
          </p>
        </div>
        <div class="haoping-left">
          <img src="../../assets/user-1.jpg" alt="">
        </div>
    </div>
    <div class="haoping-box" >
        <div class="haoping-left">
          <div class="haoping-username-box">
            <div class="username-img">
              <img src="../../assets/aijun.jpg" alt="">
            </div>
            <div class="username-box-name">
              <p>爱军</p>
              <p>
                <img src="../../assets/xing.png" alt="">
              </p>

            </div>
          </div>
          <p class="haoping-item">
              支持华为，力挺华为！ 快递更是神速，昨晚下单，今早拿货！爽！
          </p>
        </div>
        <div class="haoping-left">
          <img src="../../assets/aijunphone.jpg" alt="">
        </div>
    </div>
    <div class="haoping-box" >
        <div class="haoping-left">
          <div class="haoping-username-box">
            <div class="username-img">
              <img src="../../assets/haoping.jpg" alt="">
            </div>
            <div class="username-box-name">
              <p>凌风</p>
              <p>
                <img src="../../assets/xing.png" alt="">
              </p>

            </div>
          </div>
          <p class="haoping-item">
              非常好 快递超快 质量也很好
          </p>
        </div>
        <div class="haoping-left">
          <img src="../../assets/user-1.jpg" alt="">
        </div>
    </div>
    <div class="haoping-box" >
        <div class="haoping-left">
          <div class="haoping-username-box">
            <div class="username-img">
              <img src="../../assets/aijun.jpg" alt="">
            </div>
            <div class="username-box-name">
              <p>爱军</p>
              <p>
                <img src="../../assets/xing.png" alt="">
              </p>

            </div>
          </div>
          <p class="haoping-item">
              支持华为，力挺华为！ 快递更是神速，昨晚下单，今早拿货！爽！
          </p>
        </div>
        <div class="haoping-left">
          <img src="../../assets/aijunphone.jpg" alt="">
        </div>
    </div>
   
  </div>
</template>
<script>
export default {
    
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