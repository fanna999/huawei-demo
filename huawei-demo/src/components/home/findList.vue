<template>
  <div class="list-wrap">
    <div class="findhead">
      <input type="text" placeholder="        荣耀P40"  @click="discoverclick"  />
      <img src="../../assets/消息.png" alt />
    </div>
    <div class="find-nav">
      <!-- 左边 -->
      <div class="find-left" ref="wrapper">
        <div class="find-item">
          <div class="find-content" v-for="item in list" :class="{isfrc:cls==item.id}" @click="shoppingbtn(item.id)" :key="item.index">
            {{item.leftname}}
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
      <div class="find-right">
        <keep-alive>
          <component :is="findcompname" :arr="arr" :c1id="c1id"></component>
        </keep-alive>
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios"
import findright from "./find/findright.vue";

export default {
  created(){
    // let url = "http://localhost:5500/src/data/findleft.json";
    let url="http://localhost:2020/api/navlist";
    let that = this;
    this.axios.get(url)
    .then(function (response) {
     
      console.log(response)
      if(response.status == 200){
        that.list = response.data.list;    
      }
  })
  .catch(function (error) {
    console.log(error);
  });

  let url2 = "http://localhost:5500/src/data/findright/product01.json";
    axios.get(url2)
      .then(function (response) {
        if(response.status == 200){
        that.arr.shoppname = response.data.shoppname;
        that.arr.shoppnametwo = response.data.shoppnametwo;
        that.arr.bannerOne = response.data.bannerOne;
        that.arr.bannerTwo = response.data.bannerTwo;
        that.arr.shoppingOne = response.data.shoppingOne;
        that.arr.shoppingTwo = response.data.shoppingTwo;
        that.arr.shoppingThree = response.data.shoppingThree;
        that.arr.shoppingPartsOne = response.data.shoppingPartsOne;
        that.arr.shoppingPartsTwo = response.data.shoppingPartsTwo;
        console.log("成功")
        }
    })
    .catch(function (error) {
      console.log(error);
    });


  },
  components: {
    "find-right": findright,
  },

  data(){
    return{
      cls:1,
      findcompname:"find-right",
      list:[],
      arr:{
        shoppname:"",
        shoppnametwo:"",
        bannerOne:[],
        bannerTwo:[],
        shoppingOne:[],
        shoppingTwo:[],
        shoppingThree:[],
        shoppingPartsOne:[],
        shoppingPartsTwo:[]
      },
      c1id:500,
      id:null
    }
  },
   methods:{
    shoppingbtn(id){
      this.c1id=id;
      this.cls=id;
      let that = this;
      let url = "http://localhost:5500/src/data/findright/product"+id+".json";
      axios.get(url)
        .then(function (response) {
          if(response.status == 200){
          that.arr.shoppname = response.data.shoppname;
          that.arr.shoppnametwo = response.data.shoppnametwo;
          that.arr.bannerOne = response.data.bannerOne;
          that.arr.bannerTwo = response.data.bannerTwo;
          that.arr.shoppingOne = response.data.shoppingOne;
          that.arr.shoppingTwo = response.data.shoppingTwo;
          that.arr.shoppingThree = response.data.shoppingThree;
          that.arr.shoppingPartsOne = response.data.shoppingPartsOne;
          that.arr.shoppingPartsTwo = response.data.shoppingPartsTwo;
          console.log("成功")
          }
      })
      .catch(function (error) {
        console.log(error);
      });
      },
      discoverclick() {
      this.$router.push({
        path: "/search",
      }); 
    },
    
  }

}
</script>

<style scoped>
.list-wrap {
  background-color: white;
}
.find-nav {
  height: 90%;
  width: 100%;
  margin-top: 10px;
}
.find-left {
  display: inline-block;
  height: 100%;
  width: 30%;
  overflow-y: auto;
}
.find-left::-webkit-scrollbar {
  display: none; /*隐藏滚动条*/
}
.find-right {
  display: inline-block;
  height: 100%;
  vertical-align: top;
  width: 70%;
}
.find-content {
  color: rgb(51, 51, 51);
  padding: 17px 7px;
  margin-left: 10px;
  font-size: 13px;
}
.isfrc{
  color: #e01d20;
}
.isfrc span {
  float: right;
  border-right: 2px solid #e01d20;
  width: 1px;
  height: 21px;
  font-size: 12px;
}
.findhead {
  display: flex;
  justify-content: space-between;
  height: 7.3%;
}
.findhead input {
  flex-grow: 1;
  outline: none;
  border: none;
  border-radius: 20px;
  margin: 7px 10px;
  background: url(../../assets/搜索.png) no-repeat 10px;
  background-color: #ededed;
  background-size: 5%;
}
.findhead img {
  height: 75%;
  margin: 5px 10px;
  /* background-size: 5%; */
  outline: none;
  border: none;
}
</style>
