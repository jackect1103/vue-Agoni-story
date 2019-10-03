<template>
  <div id="circleTab">
    <!-- 轮播图 -->
    <slot name="swiper1"></slot>
    <!-- 书讯 童书 -->
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
    <!-- tab选项框 start -->
    <div class="tabVar">
      <!--显示书讯-童书tab 二级路由 组件在circleTab-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- tab选项框 end -->
  </div>
</template>

<script>
export default {
  name: "circleTab",
  data() {
    return {};
  }
};
</script>

<style scoped>
.mint-swipe {
  width: 100%;
  height: 180px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.item {
  display: inline-block;
}

.link {
  color: inherit;
  padding: 20px;
  display: block;
}
.tabVar {
  background-color: #fff;
  margin-top: 10px;
}
.tabCard {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tabCard li {
  line-height: 40px;
  flex: 1;
  text-align: center;
  background-color: #B3B3B3;
  color: #fff;
}
.tabCard li:first-child{
  background-color: #449DEF;
}
.tabCard li:nth-child(2){
  background-color: #FD8473;
}
.tabCard li:last-child{
  background-color: #FCC863;
}
.tabCard li .router-link-active {
  background-color: #f7f7f7;
}
</style>