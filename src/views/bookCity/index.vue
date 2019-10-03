<template>
  <div id="main">
    <!-- 头部 start-->
    <Header title="书城">
      <router-link tag="i" to="/login" replace  class="iconfont icon-caidaniconwodehui" slot="back">
      </router-link>
      <i class="iconfont icon-search" slot="search"></i>
    </Header>
    <!-- 头部 end-->
    <!-- 内容区 start-->
    <div id="content">
      <booksList>
        <!-- banner start-->
        <div class="swiper-container" slot="swiper1" id="banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="http://n.sinaimg.cn/book/459/w890h369/20190527/7375-hxntqyz3157608.jpg" />
            </div>
            <div class="swiper-slide">
              <img
                src="http://hbimg.b0.upaiyun.com/b543445ce21355d290783b9f176cb348068f0845df1e-L8fz4l_fw658"
              />
            </div>
            <div class="swiper-slide">
              <img src="http://n.sinaimg.cn/book/459/w890h369/20190527/7375-hxntqyz3157608.jpg" />
            </div>
            <div class="swiper-slide">
              <img
                src="http://hbimg.b0.upaiyun.com/bdd20751d60605275d00cefa1f6dfdb5cd5e7d0f1cf26-pty2Ye_fw658"
              />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <!-- banner end-->
      </booksList>
    </div>
    <!-- 内容区 end-->
    <!-- 底部导航 -->
    <TabBar />
    <!-- 小说具体内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import booksList from "./bookList";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "bookCity",
  data() {
    return {};
  },
  components: {
    Header,
    TabBar,
    booksList
  },
  activated() {
    var mySwiper = new Swiper("#banner", {
      loop: true,
      autoplay: {
        delay: 1000
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  /* height: 150px; */
}

.swiper-wrapper {
  height: 100%;
}

.swiper-slide img {
  max-width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>