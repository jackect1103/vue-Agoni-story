<template>
  <div id="storyPage">
      storyPage
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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
#storyPage{
    position: absolute;
    left: 0;
    top: 0;
    background-color: white;
    width:100%;
    min-height:100%;
}
</style>