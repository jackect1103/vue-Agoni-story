<template>
  <div class="pagination">
    <ul>
      <li>
        <i class="iconfont icon-previous" @click="pervPage"></i>
      </li>
      <li>{{ currentPageActive }}</li>
      <li>/</li>
      <li>{{ allPage }}</li>
      <li>
        <i class="iconfont icon-next" @click="nextPage"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pagination",
  components: {},
  data() {
    return {
      /** 
       * 项目中遇到父组件传值 当前为子组件 接收父组件传来的值
       * eg:https://www.jianshu.com/p/392145843afe
       * https://www.cnblogs.com/Anne3/p/11354091.html
      */
      currentPageActive : this.currentPage
    };
  },
  props: {
    currentPage: {
      // 当前第几页
      type: Number,
      default: 5
    },
    allPage: {
      // 总页数
      type: Number,
      default: 15
    },
    showIndex: {
      // 中间显示几个页数，要为奇数
      type: Number,
      default: 3
    }
  },
  methods: {
    pervPage() {
      if (this.currentPageActive > 1) {
        this.currentPageActive--;
        // 子组件触发父组件的方法
        this.$emit('setPage', this.currentPage - 1)
      }
    },
    nextPage() {
      if (this.currentPageActive < this.allPage) {
        this.currentPageActive++;
        this.$emit('setPage', this.currentPage + 1)
      }
    }
  }
};
</script>
<style lang='css' scoped>
.pagination {
  width: 100%;
  height: 45px;
}
.pagination ul {
  width: 55%;
  height: 45px;
  margin: 25px auto 0;
  padding-bottom: 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pagination ul li {
  width: 45px;
  line-height: 45px;
  text-align: center;
  flex: 1;
  font-size: 20px;
}
.pagination ul li:first-child,
.pagination ul li:last-child {
  background-color: #ccc;
  box-shadow: 0 0 3px #ccc;
  border-radius: 50%;
  font-size: 20px;
}
</style>