# 项目使用到的知识点

## 前台
- vue-cli
- vue-router
    1. 路由守卫
       - 组件内的守卫
          * 进入个人界面时，需要判断是否已经登录
- axios
- localStorage
  1. localStorage主要用来存储用户登录时的状态和用户信息
  2. 登录时，先判断localStorage里面是否存储了登录状态
  3. 由于localStorage没有提供过期机制，只能自己写
  ```javascript
    //存储时的时间机制
    var curtime = new Date().getTime();
    // 获取当前时间 ，转换成JSON字符串序列 
    var valueDate = JSON.stringify({
        val: value,
        timer: curtime
    });
  ```
  ```javascript
    //获取时 先判断当前时间是否超过设置的时间
    var exp = 1000 * 60 * 60 * 24; // 一天的秒数
    if (localStorage.getItem(name)) {
        // 获取本地存储的值
        var vals = localStorage.getItem(name);
        // 将字符串转换成JSON对象
        var dataObj = JSON.parse(vals);
        // 如果(当前时间 - 存储的元素在创建时候设置的时间) > 过期时间 
        var isTimed = (new Date().getTime() - dataObj.timer) > exp;
        if (isTimed) {
            console.log("存储已过期");
            localStorage.removeItem(name);
            return null;
        } else {
            var newValue = dataObj.val;
        }
        return newValue;
    }   
  ```