<template>
  <div class="bookList slide-enter-active">
    <ul>
      <router-link
        :to="'/bookshelf/storypage/'+item._id" 
        tag="li"
        v-for="item in storyList"
        :key="item.id"
      >
        <div class="pic_show">
          <img :src="item.storyImg" />
        </div>
        <div class="info_list">
          <h2>{{ item.name }}</h2>
          <p>作者:{{ item.author }}</p>
          <p>主角:{{ item.role }}</p>
          <p>
            <span class="person">{{ item.clickRaid || 235}}</span> 已读
          </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "bookList",
  data() {
    return {
      storyList: []
    };
  },
  mounted (){
    console.log("424224", this.$route.params);
    var target = this.$route.params;
    this.$axios
      .post("/api2/users/getStoryBySele",target )
      .then(res => {
        var status = res.data.status;
        console.log(status);
        if (status == 0) {
          this.storyList = res.data.data.storyList;
          console.log(this.storyList);
        }
      });
  }
};
</script>

<style scoped>
 .bookList {
  flex: 1;
  overflow: auto;
  z-index: 999;
  padding-top:50px;
  box-sizing: border-box;
}
.slide-enter-active {
  animation: 0.5s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.bookList > ul {
  margin: 0 12px;
  z-index: 999;
  overflow: hidden;
}
.bookList > ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.bookList .pic_show {
  width: 80px;
  height: 100px;
}
.bookList .pic_show img {
  width: 100%;
  height: 100%;
}
.bookList .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.bookList .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.bookList .info_list p {
  font-size: 12px;
  color: rgb(136, 135, 135);
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.bookList .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.bookList .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.bookList .btn_mall {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
</style>