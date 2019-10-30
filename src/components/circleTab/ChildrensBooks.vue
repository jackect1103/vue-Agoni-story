<template>
  <div class="circleBox">
    <ul class="circleBox_ul">
      <router-link
        tag="li"
        :to="{path:'/bookcircle/circleDetail/'+item._id}"
        v-for="item in dataList"
        :key="item.id"
      >
        <h2>{{ item.title }}</h2>
        <div class="contentBox">
          <div class="contentImg">
            <img :src="item.articleyImg" alt /> 
          </div>
          <div class="conetntWord">
            <p>{{ item.content }}</p>
            <p class="date">
              {{ item.date }}
              <span class="st-icon-pandora">
                阅读量
                <mt-badge size="small">1564</mt-badge>
              </span>
            </p>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "newBooks",
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    this.$axios
      .post("/api2/users/getArticleBySele", { category: "ChildrensBooks" })
      .then(res => {
        var status = res.data.status;
        console.log(status);
        if (status == 0) {
          this.dataList = res.data.data.result;
        } else {
          console.log(res.data.msg);
        }
      });
  }
};
</script>

<style lang="css">
</style>
