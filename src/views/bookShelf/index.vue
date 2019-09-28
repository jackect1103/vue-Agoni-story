<template>
  <div id="main">
    <Header title="书架" />
    <shelfList/>
    <TabBar />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import shelfList from './shelfList'
export default {
  name: "bookShelf",
  data() {
    return {};
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