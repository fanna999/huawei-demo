<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  
};
</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app,
.page {
  height: 100%;
  overflow: hidden;
}

#app {
  background: rgb(237, 237, 237);
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top-bar {
  flex-shrink: 0;
  background: rgb(247, 247, 247);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}

.top-title {
  font-size: 18px;
  font-weight: bold;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.top-btn-wrap {
  display: flex;
  flex-direction: row;
}

.top-btn {
  padding: 12px;
}

.top-btn img {
  width: 20px;
}

.bottom-bar {
  flex-shrink: 0;
  background: rgb(247, 247, 247);
  display: flex;
  flex-direction: row;
  border-top: 1px solid rgb(221, 221, 221);
}

.bottom-button {
  width: 20%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}

.bottom-img {
  width: 25px;
}

.bottom-title {
  font-size: 13px;
  color: #333;
  margin-top: 5px;
}

.list-wrap {
  flex-grow: 1;
  overflow: auto;
}

.active {
  color: #ca141d;
}

/* 轮播图 */
.box1 {
  width: 100%;
  background-color: #fff;
  display: flex;
  margin-top: 10px;
  position: relative;
}
.box2,
.box3,
.box4,
.box5,
.box6,
.box7 {
  width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
}
.box1 img {
  width: 100%;
}
.swiper-pagination {
  position: absolute;
  bottom: 15px;
  left: 70%;
  --swiper-theme-color: #fff;
}
.swiper-pagination-bullet-active {
  background-color: #fff !important;
}
.swiper-pagination span {
  width: 6px !important;
  height: 6px !important;
  margin-left: 5px;
  border-radius: 50% !important;
  border: 1px solid #fff;
  background-color: transparent;
}
.swiper-two span {
  width: 10px;
  height: 3px;
  background-color: #555 !important;
}
</style>
