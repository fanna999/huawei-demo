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
              <input type="text" placeholder="P40" />
            </div>
          </div>
          <div class="top-bar-right">
            <a href="https://m.vmall.com/product/10086013232739.html">搜索</a>
          </div>
        </div>
        <!-- 热门搜索 -->
        <div class="middle-content">
          <p class="title">热门搜索</p>
          <div class="phone-title">
         
            <a
              href="https://m.vmall.com/product/10086013232739.html"
              class="phone"
              v-for="(item,index) in searchList"
              :key="item.index"
              @click="searchClick(index)"
            >{{item.name}}</a>
           
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-content">
      <div class="bottom-bar">
        <div class="items">
          <div class="title-search" v-if="searchSeen">
            <div class="title-left">搜索历史</div>
            <div class="title-right" @click="clearClick">清空</div>
          </div>
          <div class="searchHistory" v-for="item in historList" :key="item.id">
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchList: [
        {
          name: "P40",
          link: "https://m.vmall.com/product/10086013232739.html",
        },
        {
          name: "荣耀30",
          link: "https://m.vmall.com/product/10086557426930.html",
        },
        {
          name: "MateBookD",
          link: "https://m.vmall.com/product/10086987238313.html",
        },
        {
          name: "P30",
          link: "https://m.vmall.com/product/10086385608674.html",
        },
        {
          name: "荣耀v30",
          link: "https://m.vmall.com/product/10086811807933.html",
        },
        {
          name: "笔记本新品",
          link: "https://m.vmall.com/product/10086369090195.html",
        },
        { name: "Mate 30",
        link:"https://m.vmall.com/product/10086727877036.html"
        },
        { name: "荣耀2",
        link:"https://m.vmall.com/product/10086779543890.html" },
        {
          name: "MatePad",
          link:"https://m.vmall.com/product/10086418186714.html"
        },
        { name: "荣耀X" ,
        link:"https://m.vmall.com/product/10086397382774.html"},
        {
          name: "荣耀V6",
          link:"https://m.vmall.com/product/10086412944469.html"
        },
      ],
      searchSeen: false,
      historList: [],
      newList: [],
    };
  },
  methods: {
    searchClick(index) {
      console.log(index);

      this.historList.push(this.searchList[index]);
      this.historList.reverse();

      for (let i = 0; i < this.historList.length; i++) {
        if (this.historList.length !== 0) {
          this.searchSeen = true;
        } else {
          this.searchSeen = false;
        }
      }

      localStorage.setItem("historList", JSON.stringify(this.historList));
    },
    clearClick() {
      if (this.historList) {
        this.historList = [];
        this.searchSeen = false;
      }
    },
  },
  created() {
    let historList = JSON.parse(localStorage.getItem("historList"));
    if (historList) {
      this.historList = historList;
    }
  },
  watch: {
    "historList.length": {
      handler(historList) {
        if (this.historList.length !== 0) {
          this.searchSeen = true;
        } else {
          this.searchSeen = false;
        }
      },
    },
  },
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
.items {
  width: 100%;
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
.middle-content {
  width: 100%;
  background-color: #fff;
  /* margin-top: 20px; */
  padding: 20px 0;
}
.title {
  color: rgb(51, 51, 108);
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
}
.phone-title {
  margin-left: 15px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
}
.phone {
  background-color: #f5f5f5;
  white-space: nowrap;
  text-align: center;
  padding: 5px 12px;
  color: #333;
  font-size: 13px;
  display: inline-block;

  margin: 5px 2px;
}

.bottom-bar {
  width: 94%;
  background-color: #fff;
  border-top: none;
  margin: 10px 3% 0;
}
.title-search {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}
.title-left {
  font-size: 14px;
  padding: 10px 0;
  color: #333;
}
.title-right {
  color: #999;
  font-size: 10px;
  padding: 10px 0;
}
.bottom-content {
  width: 100%;
  background-color: #fff;
}
.searchHistory {
  width: 100%;
  border-top: 1px solid #eaeaea;
  font-size: 13px;
}
.searchHistory > div {
  padding: 10px 0;
}
</style>