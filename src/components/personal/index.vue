<template>
  <div id="container">
    <Header :title="title">
      <i class="iconfont icon-back" @touchstart.prevent="handleToBack" slot="back"></i>
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
            <span class="rightInfos">{{ personalInfo.userName}}</span>
          </span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-shouji"></i>
            手机
            <span class="rightInfos">{{ personalInfo.phone }}</span>
          </span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-shouji"></i>
            出生年月
            <span class="rightInfos">{{ personalInfo.birthday}}</span>
          </span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-shouji"></i>
            注册时间
            <span class="rightInfos">{{ personalInfo.registerDate}}</span>
          </span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-shouji"></i>
            修改密码
          </span>
        </li>
      </ul>
      <div class="logout" @click="logout">
        <i class="iconfont icon-log-out"></i>
        <span>退出登录</span>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { removeStore } from "@/utils/storage";
export default {
  name: "personal",
  components: {
    Header
  },
  data() {
    return {
      title: "个人信息",
      personalInfo: {}
    };
  },
  mounted() {
    this.$axios.get("api2/users/getCurrentUser").then(res => {
      var status = res.data.status;
      if (status == 0) {
        this.personalInfo = res.data.data.result;
        for (const key in this.personalInfo) {
          if (key == "registerDate" || key == "birthday") {
            const date = new Date(this.personalInfo[key]).toLocaleDateString();
            this.personalInfo[key] = date;
          }
        }
      } else {
        console.log("暂未登录");
      }
    });
  },
  methods: {
    handleToBack() {
      this.$router.back();
    },
    logout(){
      removeStore('isLogin');
      this.$router.push('/bookCity');
      console.log('logout');
    }
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
  height: 91%;
  display: inline-block;
}
.iconfont {
  font-size: 35px;
}
ul {
  width: 100%;
  height: 90%;
  list-style: none;
  box-sizing: border-box;
}
ul li {
  width: 100%;
  text-decoration: none;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  line-height: 50px;
}
ul li > span {
  display: inline-block;
  width: 100%;
}
.logout {
  position: absolute;
  left: 0;
  bottom: 5%;
  text-align: center;
  width: 100%;
  line-height: 35px;
}
.iconfont {
  font-size: 18px;
  margin-right: 10px;
}
.rightInfos {
  float: right;
}
</style>