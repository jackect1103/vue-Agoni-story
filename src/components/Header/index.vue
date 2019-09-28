<template>
  <header id="header">
    <router-link tag="li" to="/login" replace v-show="isComment">
      <i class="iconfont icon-caidaniconwodehui"></i>
    </router-link>
    <li replace v-show="!isComment">
      <i class="iconfont icon-back" @touchstart="handleToBack"></i>
    </li>
    <h1>{{ title }}</h1>
    <router-link tag="li" to="/search" replace v-show="isComment">
      <i class="iconfont icon-search"></i>
    </router-link>
  </header>
</template>  

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Agoni小说网"
    }
  },
  data() {
    return {
      isComment: true
    };
  },
  mounted() {
    var isMeta = this.$route.meta;
    if (
      isMeta == "comment" ||
      isMeta == "selectDetail" ||
      isMeta == "search" ||
      isMeta == "category"
    ) {
      this.isComment = false;
    } else {
      this.isComment = true;
    }
  },
  methods: {
    handleToBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #7dbabb;
  border-bottom: 1px solid #7dbabb;
  position: relative;
}
#header h1 {
  width: 50%;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#header i {
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
#header li:nth-child(4) {
  position: absolute;
  right: 12%;
  top: 25px;
}
</style>