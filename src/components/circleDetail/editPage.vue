<template>
  <div id="editPage">
      <!-- 头部start -->
    <!-- <Header :title="name" /> -->
    <Header :title="name" >
      <i class="iconfont icon-back" @touchstart="handleToBack" slot="back"></i>
    </Header>
    <div class="editBox">
      <textarea name="" id="" rows='20' placeholder="回复:发表评论" maxlength="100"></textarea><br><br>
      <mt-button type="primary" size="large">确认提交</mt-button>
    </div>
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
  methods:{
    handleToBack() {
      this.$router.back();
    }
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
.editBox{
  width:100%;
  height: 100%;
}
textarea{
  width:100%;
  height:80%;
  border:none;
  border-bottom: 1px solid #ccc;
  padding:5px 10px;
  box-sizing: border-box;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  line-height:25px;
}
textarea:target{
  border:none;
}
</style>