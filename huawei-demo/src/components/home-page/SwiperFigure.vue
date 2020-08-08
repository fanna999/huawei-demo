<template>
  <div class="figure">
    <swiper ref="figureSwiper" :options="figureOptions">
      <swiper-slide class="figure-box">
        <div class="figure-box">
          <a href="https://m.vmall.com/member/privilege">
            <div class="figure-cart1"></div>
            <span class="figure-title">会员领券</span>
          </a>

          <a href="https://msale.vmall.com/hwsmh.html">
            <div class="figure-cart2"></div>
            <span class="figure-title">华为数码</span>
          </a>

          <a href="https://msale.vmall.com/education.html">
            <div class="figure-cart3"></div>
            <span class="figure-title">教育优惠</span>
          </a>
          <a href="https://msale.vmall.com/honorhome.html">
            <div class="figure-cart4"></div>
            <span class="figure-title">荣耀数码</span>
          </a>
          <a href="https://vmall-m.aihuishou.com/">
            <div class="figure-cart5"></div>
            <span class="figure-title">以旧换新</span>
          </a>
        </div>
      </swiper-slide>
      <swiper-slide class="figure-box">
        <div class="figure-box">
          <a href="https://m.vmall.com/member/inviteGift">
            <div class="figure-cart6"></div>
            <span class="figure-title">邀请有礼</span>
          </a>

          <a href="https://m.vmall.com/openTest">
            <div class="figure-cart7"></div>
            <span class="figure-title" style="text-align:center">众 测</span>
          </a>

          <a href="https://m.vmall.com/live/home">
            <div class="figure-cart8"></div>
            <span class="figure-title">直播频道</span>
          </a>
          <a href="https://msale.vmall.com/points.html">
            <div class="figure-cart9"></div>
            <span class="figure-title">积分商城</span>
          </a>
          <a href="https://msale.vmall.com/smarthome.html">
            <div class="figure-cart10"></div>
            <span class="figure-title">生态产品</span>
          </a>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-two" slot="pagination"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      figureOptions: {
        pagination: {
          el: ".swiper-two",
          clickable: true, // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 5000000000,
          disableOnInteraction: false, // 手动切换之后继续自动轮播
        },

        loop: true,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.figureSwiper.$swiper;
    },
  },
};
</script>
<style  scoped>
.figure {
  width: 100%;
  position: absolute;

  top: 22%;
}
a {
  text-decoration: none;
}
.figure-box {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.figure-cart1 {
  background: url(../../assets/big-icon.png);
  width: 40px;
  height: 40px;
  background-position: 0 0;
  background-size: 410px;
}
.figure-title {
  font-size: 0.6rem;
  color: #333;
}
.figure-cart2 {
  background: url(../../assets/big-icon.png);
  width: 40px;
  height: 40px;
  background-position: -42px 0;
  background-size: 410px;
}
.figure-cart3 {
  background: url(../../assets/big-icon.png);
  width: 40px;
  height: 40px;
  background-position: -82px 0;
  background-size: 410px;
}
.figure-cart4 {
  background: url(../../assets/big-icon.png);
  width: 40px;
  height: 40px;
  background-position: -124px 0;
  background-size: 410px;
}
.figure-cart5 {
  background: url(../../assets/big-icon.png);
  width: 40px;
  height: 40px;
  background-position: -164px 0;
  background-size: 410px;
}

.figure-cart6 {
  background: url(../../assets/big-icon.png);
  width: 40px;
  height: 40px;
  background-position: 205px 0;
  background-size: 410px;
}

.figure-cart7 {
  background: url(../../assets/big-icon.png);
  width: 40px;
  height: 40px;
  background-position: 42px 0;
  background-size: 410px;
}
.figure-cart8 {
  background: url(../../assets/big-icon.png);
  width: 40px;
  height: 40px;
  background-position: 82px 0;
  background-size: 410px;
}
.figure-cart9 {
  background: url(../../assets/big-icon.png);
  width: 40px;
  height: 40px;
  background-position: 124px 0;
  background-size: 410px;
}
.figure-cart10 {
  background: url(../../assets/big-icon.png);
  width: 40px;
  height: 40px;
  background-position: 164px 0;
  background-size: 410px;
}
/* 小圆点 */
.swiper-two {
  position: absolute;
  bottom: 15px;
  left: 50%;
  top: 90%;
}
</style>
