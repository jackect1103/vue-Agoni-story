<template>
  <div id="selectDetailContrainer" class="slide-enter-active">
    <Header :title="msg">
      <i class="iconfont icon-back" @touchstart="handleToBack" slot="back"></i>
    </Header>
    <div class="commentText">{{ msg }}</div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "selectDetail",
  components: {
    Header
  },
  data() {
    return {
      msg: this.id + " 获取路由上id  使用 props 将组件和路由解耦"
    };
  },
  // 获取路由上id  使用 props 将组件和路由解耦
  props: ["id"],
  mounted() {
    console.log(this.$route.params);
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
</style>