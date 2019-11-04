<template>
  <div>
    <Header>
      <i class="iconfont icon-back" @touchstart="handleToBack" slot="back"></i>
    </Header>
    <mt-search v-model="keywords" cancel-text="取消" placeholder="小说名称"></mt-search>
    <ul>
      <router-link
        tag="li"
        :to="'/search/detail/'+item._id"
        v-for="(item,_id) in search(keywords)"
        :key="_id"
      >
        <div class="pic_show">
          <img :src="item.storyImg" />
        </div>
        <div class="info_list">
          <h2>{{ item.name }}</h2>
          <p>作者:{{ item.author }}</p>
          <p>{{ item.role }}</p>
          <p>点击量:{{ item.clickRaid }}</p>
        </div>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { mapState, mapMutations } from "vuex";
export default {
  name: "search",
  components: {
    Header
  },
  data() {
    return {
      keywords: "",
      result: []
    };
  },
  mounted() {
    this.$axios.get("api2/users/getAllStroy").then(res => {
      var status = res.data.status;
      console.log(status);
      if (status == 0) {
        this.result = res.data.data.storyDatas;
        console.log(this.result);
        this.getstorys(this.result)
      } else {
        console.log(res.data, msg);
      }
    });
  },
  methods: {
    ...mapMutations(["GETSTROYS"]),
    // 将数据存到vuex中
    getstorys(data) {
      console.log('data:',data);
      this.GETSTROYS(data);
    },
    search(keywords) {
      var newResult = [];
      if (!keywords) return;
      this.result.forEach(item => {
        if (item.name.indexOf(keywords) != -1) {
          newResult.push(item);
        }
      });
      return newResult;
    },
    handleToBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="css" scoped>
.mint-search {
  height: auto;
}
li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
  padding-left: 15px;
  cursor: pointer;
}

.pic_show {
  width: 25%;
}
.pic_show img {
  width: 100%;
  height: 100%;
}
.info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.info_list h2 {
  font-size: 22px;
  line-height: 30px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info_list p {
  font-size: 14px;
  color: rgb(136, 135, 135);
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>