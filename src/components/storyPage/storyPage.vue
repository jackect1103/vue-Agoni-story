<template>
  <div class="bookContanier">
    <div class="bookIntro">
      <!-- 图片 -->
      <div class="storyPart">
        <div class="img">
          <img :src="curStory.storyImg" alt />
        </div>
        <p class="bookName">{{ curStory.name }}</p>
        <p class="author">
          作者:
          <b>{{ curStory.author }}</b>
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
        <ul>
          <li v-for="item in currentPageContainer" :key="item.id">{{ item }}</li>
        </ul>
      </div>
      <!-- 分页组件 -->
      <pagination :allPage="allPage" @setPage="setPage" :currentPage="currentPage"></pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getStore } from "@/utils/storage";
import pagination from "@/components/pagination";
export default {
  name: "bookIntro",
  components: {
    pagination
  },
  data() {
    return {
      currentPageCount: 4, //每页数据显示数量
      currentPage: 1, //当前页数
      allPage: 10, //总页数
      dataCount: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], //后台获取到的所有数据
      currentPageContainer: [], //每页显示数据
      curStory: []
    };
  },
  computed: {
    ...mapState(["storys"])
  },
  mounted() {
    this.allPage = Math.floor(this.dataCount.length / this.currentPageCount);
    this.showDate();
    var story = getStore("storys");
    var curId = this.$route.params._id;
    console.log('curId:',curId);
    story.forEach(item => {
      if(curId == item._id){
        this.curStory = item;
      }
    });
  },
  methods: {
    setPage(page) {
      this.currentPage = page; //当前页数
      this.showDate();
    },
    // 显示每页的数据
    showDate() {
      this.currentPageContainer = []; //当前页面清空数据
      var max = this.currentPageCount * this.currentPage;
      var min = this.currentPageCount * (this.currentPage - 1);
      this.dataCount.forEach((item, index) => {
        if (index >= min && index < max) {
          this.currentPageContainer.push(item);
        }
      });
    }
  },
  watch: {
    // currentPageContainer: {}
  }
};
</script>
<style lang='css' scoped>
.bookContanier {
  height: 100%;
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
  margin: 0 auto;
}
.chapterList ul li {
  line-height: 45px;
}
</style>