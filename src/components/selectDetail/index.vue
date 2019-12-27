<template>
  <div id="selectDetailContrainer" class="slide-enter-active">
    <Header :title="singleArticle[0].title">
      <i class="iconfont icon-back" @touchstart.prevent="handleToBack" slot="back"></i>
    </Header>
    <h3 class="commentText">{{ singleArticle[0].title }}</h3>
    <img :src="singleArticle[0].articleyImg" alt="">
    <p class="comment">{{ singleArticle[0].content }}</p>
    <p class="comment">{{ singleArticle[0].desc }}</p>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { getStore } from '@/utils/storage.js'
export default {
  name: "selectDetail",
  components: {
    Header
  },
  data() {
    return {
      singleArticle:[]
    };
  },  
  // 获取路由上id  使用 props 将组件和路由解耦
  props: ["id"],
  mounted() {
    const allArticles = getStore('articles');
    this.singleArticle = allArticles.filter(val=>{
      return val['_id'] == this.id;
    })
  },
  methods: {
    handleToBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="css" scoped>
#selectDetailContrainer {
  position: absolute;
  left: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: white;
}
#selectDetailContrainer.slide-enter-active {
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
.commentText{
  padding: 10px;
  box-sizing: border-box;
}
.comment{
  padding: 10px;
  box-sizing: border-box;
  font-size: 18px;
}
</style>