<template>
  <div id="main">
    <!-- header start -->
    <Header :title="title">
      <router-link
        tag="i"
        to="/personal"
        replace
        class="iconfont icon-caidaniconwodehui"
        slot="back"
      ></router-link>
      <i class="iconfont icon-search" slot="search"></i>
    </Header>
    <!-- header end -->
    <!-- story list start -->
    <shelfList />
    <!-- story list end -->
    <!-- foot start -->
    <TabBar />
    <!-- foot end -->
    <!-- 二级界面 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import shelfList from "./shelfList";
export default {
  name: "bookShelf",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "书架"
    }
  },
  components: {
    Header,
    TabBar,
    shelfList
  }
};
</script>

<style scoped>
</style>