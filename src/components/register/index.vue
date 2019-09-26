<template>
  <div id="content">
    <div class="register_body">
      <div>
        <img src="../../assets/logo.jpg" alt />
      </div>
      <div>
        <input class="register_text" type="text" placeholder="账户名/手机号/Email" />
      </div>
      <div>
        <input class="register_text" type="password" placeholder="请输入您的密码" />
      </div>
      <div class="register_btn">
        <input type="submit" value="注册" />
      </div>
      <div class="register_link">
        <router-link tag="a" to="/login">立即登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"register"
};
</script>

<style scoped>
#content {
  background: linear-gradient(#63979f, #8ec7b6);
  height: 100%;
  margin-bottom: 0;
}
#content .register_body {
  width: 80%;
  margin: 50px auto;
}
.register_body > div {
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
  color: #97d6c3;
  font-size: 20px;
  border-radius: 15px;
  letter-spacing:8px;
}
.register_body .register_link a {
  text-decoration: none;
  font-size: 12px;
  color: #fff;
  position: absolute;
  left: 50%;
  margin-left: -25px;
}
</style>