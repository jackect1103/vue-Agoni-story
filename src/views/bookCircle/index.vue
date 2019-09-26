<template>
  <div id="main">
    <!-- header start-->
    <Header title="圈子" />
    <!-- header end-->
    <!-- tab选项框 start -->
    <circleTab>
      <div slot="tabCard" class="tabVar">
        <!-- router-link -->
        <ul class="tabCard">
          <router-link to="/bookcircle/BookNews" tag="li" replace>
            <i class="iconfont icon-book1"></i>&nbsp;书讯
          </router-link>
          <router-link to="/bookcircle/ChildrensBooks" tag="li" replace>
            <i class="iconfont icon-book"></i>&nbsp;童书
          </router-link>
          <router-link to="/bookcircle/activity" tag="li" replace>
            <i class="iconfont icon-huodong"></i>&nbsp;活动
          </router-link>
        </ul>
        <!-- 二级路由 组件在circleTab-->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </circleTab>
    <!-- tab选项框 end -->
    <!-- footer satrt-->
    <TabBar />
    <!-- footer end-->
    <!-- 评论视图 -->
    <router-view name="comment" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import circleTab from "./circleTab";
export default {
  name: "bookCircle",
  data() {
    return {};
  },
  components: {
    Header,
    TabBar,
    circleTab
  }
};
</script>

<style scoped>
.tabVar {
  background-color: #fff;
}
.tabCard {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.tabCard li {
  line-height: 40px;
  flex: 1;
  text-align: center;
  background-color: #9ccac8;
  color: #fff;
}
.tabCard li .router-link-active {
  background-color: #f7f7f7;
}
</style>