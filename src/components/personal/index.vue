<template>
  <div id="container">
    <Header :title="title">
      <i class="iconfont icon-back" @touchstart="handleToBack" slot="back"></i>
    </Header>
    <main>
      <ul>
        <li>
          <span>
            <i class="iconfont icon-xiangji"></i>
            头像
          </span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-xingmingyonghumingnicheng"></i>
            昵称
          </span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-shouji"></i>
            手机
          </span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-shouji"></i>
            出生年月
          </span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-shouji"></i>
            修改密码
          </span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "personal",
  components: {
    Header
  },
  data() {
    return {
      title: "个人信息"
    };
  }
};
</script>

<style lang="css" scoped>
#container {
  width: 100%;
  height: 100%;
  display: inline-block;
}
main {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.iconfont {
  font-size: 35px;
}
ul {
  width: 100%;
  height: 90%;
  background-color: red;
  list-style: none;
  padding-top: 20px;
  box-sizing: border-box;
}
ul li {
  width: 100%;
  text-decoration: none;
  padding: 0 10px;
  box-sizing: border-box;
  height: 10%;
}
ul li span {
  display: inline-block;
}
</style>