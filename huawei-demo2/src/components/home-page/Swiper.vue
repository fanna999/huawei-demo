<template>
  <div class="box1">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="box2">
          <a href="https://msale.vmall.com/honor.html">
            <img src="../../assets/banner-1.png" alt />
          </a>
        </div>
      </swiper-slide>
      <swiper-slide class="box3">
        <div class="box3">
          <a href="https://m.vmall.com/huawei">
            <img src="../../assets/banner-2.jpg" alt />
          </a>
        </div>
      </swiper-slide>
      <swiper-slide class="box4">
        <div class="box4">
          <a href="https://msale.vmall.com/hwsmh.html">
            <img src="../../assets/banner-3.jpg" alt />
          </a>
        </div>
      </swiper-slide>
      <swiper-slide class="box5">
        <div class="box5">
          <a href="https://msale.vmall.com/honorhome.html">
            <img src="../../assets/banner-4.jpg" alt />
          </a>
        </div>
      </swiper-slide>
      <swiper-slide class="box6">
        <div class="box6">
          <a href="https://msale.vmall.com/pseries.html">
            <img src="../../assets/banner-5.jpg" alt />
          </a>
        </div>
      </swiper-slide>
      <swiper-slide class="box7">
        <div class="box7">
          <a href="https://msale.vmall.com/smarthome.html">
            <img src="../../assets/banner-6.jpg" alt />
          </a>
        </div>
      </swiper-slide>
    </swiper>

    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true, // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false, // 手动切换之后继续自动轮播
        },

        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>
<style>
</style>