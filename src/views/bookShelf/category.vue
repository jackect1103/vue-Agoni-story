<template>
  <div id="category" class="slide-enter-active">
    <!-- header start -->
    <Header :title="title">
      <i class="iconfont icon-back" @touchstart="handleToBack" slot="back"></i>
    </Header>
    <StoryList />
  </div>
</template>

<script>
import Header from "@/components/Header";
import StoryList from "@/components/storyList";
export default {
  name: "category",
  components: {
    Header,
    StoryList
  },
  props: ["categoryname"],
  methods: {
    handleToBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang='css' scoped>
#header{
  position: fixed;
  z-index: 999;
}
#category {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: white;
}
#commentContrainer.slide-enter-active {
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
</style>