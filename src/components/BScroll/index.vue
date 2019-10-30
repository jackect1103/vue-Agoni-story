<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
/**
 * better-scroll针对的是一个子节点如果有多个子节点用一个父节点将其包起来
 * eg:参照city下的index.vue
 */
import BScroll from "better-scroll";
export default {
  name: "Scroller",
  components: {},
  data() {
    return {};
  },
  mounted() {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1,
      // 解决better-scroll导致点击事件失效
      click: true
    });
  }
};
</script>
<style lang='css' scoped>
.wrapper {
  height: 100%;
}
</style>