<template>
  <div id="main">
    <Header :title="title">
      <router-link tag="i" to="/login" replace  class="iconfont icon-caidaniconwodehui" slot="back">
      </router-link>
      <i class="iconfont icon-search" slot='search'></i>
    </Header>
    <shelfList />
    <TabBar />
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