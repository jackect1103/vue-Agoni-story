<template>
  <div id="storyPage" class="slide-enter-active">
    <!-- 头部start -->
    <Header :title="name">
      <i class="iconfont icon-back" @touchstart.prevent="handleToBack" slot="back"></i>
    </Header>
    <bookIntro />
  </div>
</template>

<script>
import Header from "@/components/Header";
import bookIntro from "./storyPage";
export default {
  name: "storyPage",
  components: {
    Header,
    bookIntro
  },
  props: {
    id: {
      type: String,
      default: "dds"
    }
  },
  data() {
    return {
      name:this.id
    };
  },
  methods: {
    handleToBack() {
      this.$router.back();
    }
  }
};
</script>
<style lang='css' scoped>
#storyPage {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  min-height: 100%;
  background: white;
  /* overflow: auto; */
}
</style>