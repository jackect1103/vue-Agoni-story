<template>
  <div id="main">
    <Header :title="title" />
    <shelfList />
    <TabBar />
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