<template>
  <div id="editPage">
      <!-- 头部start -->
    <Header :title="name" />
    editPage
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "editPage",
  components: {
      Header
  },
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
};
</script>
<style lang='css' scoped>
#editPage {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: #fff;
}
</style>