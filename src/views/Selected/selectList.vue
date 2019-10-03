<template>
  <div id="content">
    <ul>
      <router-link
        tag="li"
        v-for="item in selectList"
        :key="item.id"
        :to="'/selected/selectDetail/'+item.id"
      >
        <p class="title">{{ item.title }}</p>
        <div class="selectImg">
          <img :src="item.img" alt />
        </div>
        <p class="select_word">{{ item.select_word }}</p>
        <p class="select_more">
          阅读全文
          <span class="select_row">></span>
        </p>
      </router-link>
    </ul>
  </div>
</template> 

<script>
export default {
  name: "selectList",
  data() {
    return {
      selectList: [
        {
          id: 0,
          title: "他在，心就安的。他在，整个世界就在‖文/何丽",
          img:
            "http://t11.baidu.com/it/u=1560587593,3602852519&fm=173&app=49&f=JPEG?w=218&h=146&s=A2D275C86404A95BCC8FD81A030080D1",
          select_word:
            "外爷死了，我没有在他身边看到他最后一眼，他得了癌症。我妈说我还小不让我多接触病人，有细菌。当时不知道我妈为什么那样，后来长大了才发现那是一个母亲的本能。"
        },
        {
          id: 1,
          title: "他在，心就安的。他在，整个世界就在‖文/何丽",
          img:
            "http://t11.baidu.com/it/u=1560587593,3602852519&fm=173&app=49&f=JPEG?w=218&h=146&s=A2D275C86404A95BCC8FD81A030080D1",
          select_word:
            "外爷死了，我没有在他身边看到他最后一眼，他得了癌症。我妈说我还小不让我多接触病人，有细菌。当时不知道我妈为什么那样，后来长大了才发现那是一个母亲的本能。"
        },
        {
          id: 2,
          title: "他在，心就安的。他在，整个世界就在‖文/何丽",
          img:
            "http://t11.baidu.com/it/u=1560587593,3602852519&fm=173&app=49&f=JPEG?w=218&h=146&s=A2D275C86404A95BCC8FD81A030080D1",
          select_word:
            "外爷死了，我没有在他身边看到他最后一眼，他得了癌症。我妈说我还小不让我多接触病人，有细菌。当时不知道我妈为什么那样，后来长大了才发现那是一个母亲的本能。"
        }
      ]
    };
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
#content ul {
  width: 100%;
  margin-top: 5px;
}
#content ul li {
  width: 100%;
  background-color: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
  box-shadow: 0 0 2px 0 #ccc;
}
#content ul li .title {
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 40px;
  font-weight: bolder;
}
#content ul li .selectImg {
  width: 100%;
  height: 150px;
}
#content ul li .select_word {
  margin: 5px 0;
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #b3b3b3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
#content ul li .select_more {
  margin-top: 10px;
  color: #494949;
}
#content ul li .select_row {
  float: right;
}
</style>