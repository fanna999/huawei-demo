<template>
  <div class="new-pro">
    <div class="new-pro-increment" v-for="item in proList" :key="item.images">
      <div class="new-pro-list">
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
import axios from "axios";
export default {
  data() {
    return {
      proList: [],
    };
  },
  created() {
    let url = "http://localhost:5500/src/assets/data/new.json";
    let that = this;
    axios
      .get(url)
      .then(function (response) {
       

        if (response.data.code == 200) {
          that.proList = response.data.proList;  
        }
      })
      .catch(function (reject) {
        console.log(reject);
      });
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
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: center;
  margin-bottom: 4%;
}
.price {
  color: #ca141d;
  font-size: 13px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>