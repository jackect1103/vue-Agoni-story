<template>
  <div class="content">
    <div class="login_body">
      <div>
        <img src="../../assets/logo.jpg" alt />
      </div>
      <div>
        <input class="login_text" type="text" placeholder="账户名/手机号/Email" />
      </div>
      <div>
        <input class="login_text" type="password" placeholder="请输入您的密码" />
      </div>
      <div class="login_btn">
        <input type="submit" value="登录" />
      </div>
      <div class="login_link">
        <router-link tag="a" to="/register">立即注册</router-link>
        <router-link tag="a" to="/fingPassword">找回密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"login"
};
</script>

<style scoped>
.content {
  background: linear-gradient(#63979f, #8ec7b6);
  height: 100%;
  margin-bottom: 0;
  overflow: hidden;
}
.content .login_body {
  width: 80%;
  height: 100%;
  margin: 50px auto 0;
}
.login_body > div {
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
  background-color: #88c5be;
}
/*  placeholder 设置字体颜色 同时主要是要兼容 火狐，IE 和 谷歌浏览器。*/
input:-moz-placeholder {
  color: #fff;
}
input:-ms-input-placeholder {
  color: #fff;
}
input::-webkit-input-placeholder {
  color: #fff;
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
  color: #97d6c3;
  font-size: 20px;
  outline: none;
  letter-spacing:8px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #fff;
}
</style>