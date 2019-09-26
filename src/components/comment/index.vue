<template>
  <div id="commentContrainer" class="slide-enter-active">
    <Header />
    <div class="commentText">{{ id }}</div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "comment",
  components: {
    Header
  },
  props: ["id"],
  mounted() {
    console.log(this.$route.params);
  }
};
</script>

<style lang="css" scoped>
#commentContrainer {
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
.commentText {
}
</style>