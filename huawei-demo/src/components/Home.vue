<template>
  <div class="page" ref="page">
    <div class="top-bar" :class="{white: componentName=='me-list'}">
      <div class="top-title">{{title}}</div>
      <div class="top-btn-wrap">
        <template v-if="title">
          <div class="top-btn">
            <img src="../assets/消息.png" />
          </div>
          <div class="top-btn">
            <img src="../assets/搜索.png" />
          </div>
        </template>
        <template v-else>
          
        </template>
      </div>
    </div>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
    <div class="bottom-bar">
      <div class="bottom-button" @click="btnClick('chat-list')">
        <img v-if="componentName=='chat-list'" class="bottom-img active" src="../assets/首页red.png" />
        <img v-else class="bottom-img" src="../assets/首页.png" />
        
          <div class="bottom-title" v-if="componentName=='chat-list'"></div>
           <div class="bottom-title" v-else>首页</div>
      </div>
      <div class="bottom-button" @click="btnClick('find-list','')">
        <img v-if="componentName=='find-list'" class="bottom-img" src="../assets/分类red.png" />
        <img v-else class="bottom-img" src="../assets/分类.png" />
        <div class="bottom-title" :class="{active:componentName=='find-list'}">分类</div>
      </div>
      <a  href="https://m.vmall.com/content/index" class="bottom-button" @click="btnClick('contact-list','')">
       
        <img v-if="componentName=='contact-list'" class="bottom-img" src="../assets/发现red.png" />
        <img v-else class="bottom-img" src="../assets/发现.png" />
        
        <div class="bottom-title" :class="{active:componentName=='contact-list'}">发现</div>
      </a>
      <div class="bottom-button" @click="btnClick('discover-list','')">
        <img v-if="componentName=='discover-list'" class="bottom-img" src="../assets/购物车red.png" />
        <img v-else class="bottom-img" src="../assets/购物车.png" />
        <div class="bottom-title" :class="{active:componentName=='discover-list'}">购物车</div>
      </div>
      <div class="bottom-button" @click="btnClick('me-list','')">
        <img v-if="componentName=='me-list'" class="bottom-img" src="../assets/我的red.png" />
        <img v-else class="bottom-img" src="../assets/我的.png" />
        <div class="bottom-title" :class="{active:componentName=='me-list'}">我的</div>
      </div>
    </div>
  </div>
</template>>

<script>

import chatList from "./home/ChatList.vue";
import contactList from "./home/ContactList.vue";
import findList from "./home/findList.vue";
import discoverList from "./home/DiscoverList.vue";
import meList from "./home/MeList.vue";
import router from "../router/index.js"

export default {
  
  data() {
    return {
      componentName: "chat-list",
      title: "",
    };
  },
  components: {
    "chat-list": chatList,
    "contact-list": contactList,
    "find-list": findList,
    "discover-list": discoverList,
    "me-list": meList,
  },
  methods: {
    btnClick(componentName, title) {
      this.componentName = componentName;
      this.title = title;

      // if (componentName == "discover-list")
      // {
      //   this.$router.push({
      //     name:"cart",
      //     path:"/cart"
      //   })
      // }
    }
  },
  
};
</script>

<style scoped>
.bottom-img.active{
  width: 2.5rem;
  height: 2.5rem;
}
a{
  text-decoration: none;
}

</style>
