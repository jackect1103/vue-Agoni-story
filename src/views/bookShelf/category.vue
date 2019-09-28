<template>
  <div id="category" class="slide-enter-active">
    <Header :title='categoryname'/>
    <StoryList/>
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
  mounted() {
    console.log(this.$route.params);
  }
};
</script>
<style lang='css' scoped>
#category {
  position: absolute;
  left: 0;
  /* top: 0; */
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