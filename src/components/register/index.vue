<template>
  <div class="content">
    <div class="register_body">
      <div>
        <img src="../../assets/logo.jpg" alt />
      </div>
      <div>
        <input
          class="register_text"
          type="text"
          placeholder="账户名/手机号/Email"
          v-model="userName"
          required="required"
        />
      </div>
      <div>
        <input
          class="register_text"
          type="password"
          placeholder="请输入您的密码"
          v-model="password"
          required="required"
        />
      </div>
      <div>
        <input
          class="register_text"
          type="password"
          placeholder="请输入确定密码"
          v-model="repeatPassword"
          required="required"
        />
      </div>
      <div class="register_btn">
        <input type="submit" value="注册" @click="register" />
      </div>
      <div class="register_link">
        <router-link tag="a" to="/login">立即登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "register",
  data() {
    return {
      userName: "",
      password: "",
      repeatPassword: ""
    };
  },
  methods: {
    register() {
      if (
        this.userName &&
        this.password &&
        this.repeatPassword &&
        this.repeatPassword == this.password
      ) {
        this.$axios
          .post("api2/users/userRegister", {
            userName: this.userName,
            password: this.password
          })
          .then(res => {
            var status = res.data.status;
            if (status == 0) {
              Toast(res.data.msg);
              this.$router.push("/login");
            } else {
              let instance = Toast(res.data.msg);
              setTimeout(() => {
                instance.close();
              }, 1000);
            }
          });
      } else if (this.repeatPassword !== this.password) {
        let instance = Toast("密码不一致！！！");
        setTimeout(() => {
          instance.close();
        }, 1000);
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
.content .register_body {
  width: 80%;
  height: 100%;
  margin: 50px auto 0;
}
.register_body div {
  margin-top: 25px;
}
.register_body > div:first-child {
  margin-top: 15px;
  width: 50%;
  height: 150px;
  margin: 0 auto;
}
.register_body img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.register_body .register_text {
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
.register_body .register_btn {
  width: 100%;
  height: 40px;
  outline: none;
}
.register_body .register_btn input {
  width: 100%;
  height: 100%;
  background: #fff;
  border: none;
  display: block;
  color: #000;
  font-size: 20px;
  border-radius: 15px;
  letter-spacing: 8px;
}
.register_body .register_link {
  margin-top: 25px;
}
.register_body .register_link a {
  text-decoration: none;
  font-size: 16px;
  color: #000;
  position: absolute;
  left: 47%;
  margin-left: -25px;
}
</style>