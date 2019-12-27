<template>
  <div id="content">
    <Loading v-if="isShowImgL">sckcm</Loading>
    <BScroll>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <router-link
          tag="li"
          v-for="item in showList"
          :key="item._id"
          :to="'/selected/selectDetail/'+item._id"
        >
          <p class="title">{{ item.title }}</p>
          <div class="selectImg">
            <img :src="item.articleyImg" alt />
          </div>
          <p class="select_word">{{ item.desc }}</p>
          <p class="select_more">
            阅读全文
            <span class="select_row">></span>
          </p>
        </router-link>
        <span v-if="showLast" class="showLast">暂无数据...</span>
      </ul>
    </BScroll>
  </div>
</template> 

<script>
import { setStore } from '@/utils/storage.js'
export default {
  name: "selectList",
  data() {
    return {
      isShowImgL: false,
      selectList: [],
      showList: [],
      loading: false,
      showLast: false
    };
  },
  mounted() {
    this.$axios.get("/api2/users/getAllArticle").then(res => {
      var status = res.data.status;
      if (status == 0) {
        this.selectList = res.data.data.articleDatas;
        console.log("status:", res.data);
        setStore('articles',this.selectList);
      } else {
        console.log(res.data.msg);
      }
    });
  },
  methods: {
    loadMore() {
      this.isShowImgL = true;
      this.loading = true;
      setTimeout(() => {
        this.isShowImgL = false;
        let last = 0;
        if (this.showList.length != 0) {
          last = this.showList.length - 1;
        }
        for (let i = 0; i < 10; i++) {
          if (this.showList.length < this.selectList.length) {
            this.showList.push(this.selectList[last + i]);
          } else {
            this.showLast = true;
            return;
          }
        }
        console.log(this.showList);
        this.loading = false;
      }, 1000);
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
#content ul {
  width: 100%;
  margin-top: 5px;
}
#content ul li {
  width: 100%;
  background-color: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
  box-shadow: 0 0 2px 0 #ccc;
}
#content ul li .title {
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 40px;
  font-weight: bolder;
}
#content ul li .selectImg {
  width: 100%;
  height: 150px;
}
#content ul li .select_word {
  margin: 5px 0;
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #b3b3b3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
#content ul li .select_more {
  margin-top: 10px;
  color: #494949;
}
#content ul li .select_row {
  float: right;
}
/* showLast */
.showLast {
  display: inline-block;
  width: 100%;
  line-height: 35px;
  text-align: center;
}
</style>