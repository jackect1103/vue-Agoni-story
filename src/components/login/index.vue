<template>
  <div class="content">
    <div class="login_body">
      <div>
        <img src="../../assets/logo.jpg" alt />
      </div>
      <div>
        <input class="login_text" type="text" placeholder="用户名" v-model="userName" />
      </div>
      <div>
        <input class="login_text" type="password" placeholder="请输入您的密码" v-model="password" />
      </div>
      <div class="login_btn">
        <input type="submit" value="登录" @click="login" />
      </div>
      <div class="login_link">
        <router-link tag="a" to="/register">立即注册</router-link>
        <router-link tag="a" to="/fingPassword">找回密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { setStore, getStore } from "@/utils/storage";
import { Toast } from "mint-ui";
export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    var result = getStore("isLogin");
    if (result) {
      //如果sessionstorage里存了用户名，则表示已登录
      next('/personal');
    } else {
      next(vm => {
        next('/login');
      });
    }
  },
  mounted() {
    console.log(getStore("isLogin"));
    if (getStore("isLogin")) {
      this.$router.push("/bookcity");
    }
  },
  methods: {
    login() {
      if (this.userName && this.password) {
        this.$axios
          .post("api2/users/userLogin", {
            userName: this.userName,
            password: this.password
          })
          .then(res => {
            var status = res.data.status;
            if (status == 0) {
              Toast(res.data.msg);
              setStore("isLogin", true);
              this.$router.push("/bookcity");
            } else {
              let instance = Toast(res.data.msg);
              setTimeout(() => {
                instance.close();
              }, 1000);
            }
          });
      } else {
        let instance = Toast("请填写信息！！！");
        setTimeout(() => {
          instance.close();
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  background: url("../../../public/bg.png") no-repeat;
  background-size: cover;
  height: 100%;
  margin-bottom: 0;
  overflow: hidden;
}
.content .login_body {
  width: 80%;
  height: 100%;
  margin: 50px auto 0;
}
.login_body div {
  margin-top: 25px;
}
.login_body > div:first-child {
  margin-top: 15px;
  width: 50%;
  height: 150px;
  margin: 0 auto;
}
.login_body img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
  text-align: center;
  border-radius: 15px;
  background-color: #fff;
}
/*  placeholder 设置字体颜色 同时主要是要兼容 火狐，IE 和 谷歌浏览器。*/
input:-moz-placeholder {
  color: #b3b3b3;
}
input:-ms-input-placeholder {
  color: #b3b3b3;
}
input::-webkit-input-placeholder {
  color: #b3b3b3;
}
.login_body .login_btn {
  width: 100%;
  height: 40px;
  outline: none;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 15px;
  border: none;
  display: block;
  color: #000;
  font-size: 20px;
  outline: none;
  letter-spacing: 8px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 14px;
  color: #000;
}
</style>