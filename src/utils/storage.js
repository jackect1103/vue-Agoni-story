/**
 * 存储localStorage
 * localStorage本身并没有提供过期机制
*/

export const setStore = (name, value) => {
    if (!name) return
    var curtime = new Date().getTime();
    // 获取当前时间 ，转换成JSON字符串序列 
    var valueDate = JSON.stringify({
        val: value,
        timer: curtime
    });

    window.localStorage.setItem(name, valueDate)
}

/**
 * 获取localStorage
 * 发回来的数据 是对象
 */
export const getStore = name => {
    if(!name) return;
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
    } else {
        console.log('name:'+name);
        return false;
    }
}


/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return
    window.localStorage.removeItem(name)
}