<template>
  <div id="main">
    <!-- header start -->
    <Header title="精选"/>
    <!-- header end -->
    <SelectList/>
    <!-- footer start -->
    <TabBar />
    <!-- footer end -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import SelectList from './selectList'
export default {
  name: "Selected",
  data() {
    return {};
  },
  components: {
    Header,
    TabBar,
    SelectList
  }
};
</script>

<style scoped>
</style>