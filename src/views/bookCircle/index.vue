<template>
  <div id="main">
    <!-- header start-->
    <Header title="圈子">
      <router-link tag="i" to="/login" replace  class="iconfont icon-caidaniconwodehui" slot="back">
      </router-link>
      <i class="iconfont icon-search" slot='search'></i>
    </Header>
    <div id="content">
      <BScroll>
      <CircleTab>
        <!-- banner start-->
        <div class="swiper-container" slot="swiper1" id="banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://img.zcool.cn/community/01da355d902048a8012060bed7b396.jpg@1380w" />
            </div>
            <div class="swiper-slide">
              <img
                src="https://img.zcool.cn/community/011c775d92b86aa8012060be1d0111.jpg@1380w"
              />
            </div>
            <div class="swiper-slide">
              <img src="https://img.zcool.cn/community/0134be5d9020a1a8012060beab571b.jpg@1380w" />
            </div>
            <div class="swiper-slide">
              <img
                src="https://img.zcool.cn/community/0104785d90203aa8012060beb139bf.jpg@1380w"
              />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </CircleTab>
      </BScroll>
    </div>
    <!-- footer satrt-->
    <TabBar />
    <!-- 文章视图 三极路由-->
    <router-view name="article" />
    <!-- 评论区域 -->
    <router-view name="comment"></router-view>
    <!--编辑评论区域 -->
    <router-view name="editpage"></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import CircleTab from "./circleTab.vue";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "bookCircle",
  data() {
    return {};
  },
  components: {
    Header,
    TabBar,
    CircleTab
  },
  activated() {
    var mySwiper = new Swiper("#banner", {
      loop: true,
      autoplay: {
        delay: 2000
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
  width: 95%;
  height: 150px;
  border-radius:5px;
  margin:10px auto 15px;
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