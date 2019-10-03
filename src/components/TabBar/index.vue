<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/bookshelf">
        <i class="iconfont icon-icon_shujia"></i>
        <p>书架</p>
      </router-link>
      <router-link tag="li" to="/bookcity">
        <i class="iconfont icon-shucheng"></i>
        <p>书城</p>
      </router-link>
      <router-link tag="li" to="/bookcircle">
        <i class="iconfont icon-quanzix"></i>
        <p>圈子</p>
      </router-link>
      <router-link tag="li" to="/selected">
        <i class="iconfont icon-jingxuan1"></i>
        <p>精选</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px #B3B3B3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
}
#footer ul li.router-link-active {
  color: #B3B3B3;
}
#footer ul i {
  font-size: 20px;
}
#footer ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>