<template>
  <div id="storyPage"  class="slide-enter-active">
    <!-- 头部start -->
    <Header :title="name">
      <i class="iconfont icon-back" @touchstart="handleToBack" slot="back"></i>
    </Header>
    <div class="bookIntro">
      <!-- 图片 -->
      <div class="storyPart">
        <div class="img">
          <img src="https://www.wodeshucheng.com/files/article/image/109/109747/109747s.jpg" alt />
        </div>
        <p class="bookName">最强无敌召唤系统</p>
        <p class="author">
          作者:
          <b>唯我独秀</b>
        </p>
        <p class="commnet">
          <span>
            <i class="iconfont icon-1"></i>
            6632
          </span>
          <span>
            <i class="iconfont icon-liuyan"></i>
            546
          </span>
        </p>
      </div>
      <!-- 章节列表 -->
      <div class="chapterList">
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
        >
          <li v-for="item in chapterList" :key="item.id">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "storyPage",
  components: {
    Header
  },
  props: {
    name: {
      type: String,
      default: "dds",
    }
  },
  data() {
    return {
      // loading: false,
      chapterList: [],
      backgroundDate: [0, 1, 2]
    };
  },
  methods: {
    handleToBack() {
      this.$router.back();
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.backgroundDate[this.backgroundDate.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.chapterList.push(last + i);
        }
        this.loading = false;
      }, 1500);
    }
  }
};
</script>
<style lang='css' scoped>
#storyPage.slide-enter-active {
  animation: 0.3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
#storyPage {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: white;
}
/* 图片 */
.storyPart {
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 10px;
}
.storyPart img {
  width: 35%;
  margin: 25px auto;
  border-radius: 5px;
  box-shadow: 0 3px 6px #000;
}
.storyPart p {
  text-align: center;
  margin-bottom: 5px;
}
.bookName {
  font-size: 22px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
}
.author {
  color: #ccc;
  font-size: 18px;
}
.author b {
  margin-left: 5px;
  color: #b2daf3;
}
.commnet span {
  display: inline-block;
  margin-right: 25px;
  color: #000;
}
.commnet span .iconfont {
  font-size: 25px;
}
/* 小说章节 */
.chapterList {
  width: 100%;
  background-color: #fff;
}
.chapterList ul {
  width: 97%;
  background-color: yellow;
  margin: 0 auto;
}
.chapterList ul li{
  line-height:30px;
}
</style>