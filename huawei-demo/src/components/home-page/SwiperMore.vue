<template>

  <ul class="swiper-more"   >
    <swiper ref="moreSwiper" :options="moreOptions" >
      <swiper-slide  >
        <li class="more"><a href="https://m.vmall.com/content/detail?id=5554">酷暑来袭，你的夏日清凉标配是______？</a></li>
      </swiper-slide>

      <swiper-slide>
        <li class="more"><a href="https://mw.vmall.com/content/detail?id=5558">华为手环b6新品上市:腕上蓝牙耳机，让你解放双手</a></li>
      </swiper-slide>
      <swiper-slide>
        <li class="more"><a href="https://m.vmall.com/content/detail?id=5560">一张图带你了解华为MatePad 10.8的更多功能</a></li>
      </swiper-slide>
      <swiper-slide>
        <li class="more"><a href="https://m.vmall.com/content/detail?id=5562">一张图带你读懂huawei matebook d14/D15锐龙版的更新</a></li>
      </swiper-slide>
     
    </swiper>
  </ul>
 
</template>
<script>

export default {
  
  data() {
    return {
      moreOptions: {
       direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false, // 手动切换之后继续自动轮播
        },

        loop: true,
      
      },
    //   lineList:[
    //         {title:"酷暑来袭，你的夏日清凉标配是______？  ",},
    //         {title:"华为手环b6新品上市:腕上蓝牙耳机，让你解放双手  ",},
    //        { title:"一张图带你了解华为MatePad 10.8的更多功能",},
    //        { title:"一张图带你读懂huawei matebook d14/D15锐龙版的更新",}
    //  ]
    };
  },


  computed: {
    swiper() {
      return this.$refs.moreSwiper.$swiper;
    },
  }
 
};
</script>
<style  scoped>
.swiper-more {
  height: 30px;
  overflow: hidden;
}

a{
    text-decoration: none;
    color: #4d4d4d;
    font-size: 14px;
}
.more{
         overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
}
</style>