<template>
  <div class="bookList">
    <slot name="swiper1"></slot>
    <div class="youLove">
      <h1 class="recommend">
        猜你在追
        <router-link to="/more" tag="span">查看全部></router-link>
      </h1>
      <ul>
        <li>
          <div>
            <img src="https://bookcover.yuewen.com/qdbimg/349573/c_11046521703587203/90" />
          </div>
          <p>人活百年，总有终期，老夫老妻，也总有一人要先走一</p>
        </li>
        <li>
          <div>
            <img src="https://bookcover.yuewen.com/qdbimg/349573/c_14178274605353604/90" />
          </div>
          <p>暴躁戏精小太后vs无情腹黑渣帝，双洁，无血缘，无</p>
        </li>
        <li>
          <div>
            <img src="https://bookcover.yuewen.com/qdbimg/349573/c_13776403405545404/180" />
          </div>
          <p>一朝出车祸，她华夏顶级医师，变为毫无修炼天赋的废材！从云端跌落为人人可欺的小可怜。</p>
        </li>
      </ul>
    </div>
    <h1 class="recommend">精彩推荐</h1>
    <ul>
      <li>
        <div class="pic_show">
          <img src="../../assets/logo.jpg" />
        </div>
        <div class="info_list">
          <h2>朝花夕拾</h2>
          <p>作者: 鲁迅</p>
          <p>现代文学家鲁迅的散文集，收录鲁迅于1926年创作的10篇回忆性散文</p>
          <p>
            <span class="person">17746</span> 已读
          </p>
        </div>
      </li>
      <li>
        <div class="pic_show">
          <img src="../../assets/logo.jpg" />
        </div>
        <div class="info_list">
          <h2>朝花夕拾</h2>
          <p>作者: 鲁迅</p>
          <p>现代文学家鲁迅的散文集，收录鲁迅于1926年创作的10篇回忆性散文</p>
          <p>
            <span class="person">17746</span> 已读
          </p>
        </div>
      </li>
      <li>
        <div class="pic_show">
          <img src="../../assets/logo.jpg" />
        </div>
        <div class="info_list">
          <h2>朝花夕拾</h2>
          <p>作者: 鲁迅</p>
          <p>现代文学家鲁迅的散文集，收录鲁迅于1926年创作的10篇回忆性散文</p>
          <p>
            <span class="person">17746</span> 已读
          </p>
        </div>
      </li>
      <li>
        <div class="pic_show">
          <img src="../../assets/logo.jpg" />
        </div>
        <div class="info_list">
          <h2>朝花夕拾</h2>
          <p>作者: 鲁迅</p>
          <p>现代文学家鲁迅的散文集，收录鲁迅于1926年创作的10篇回忆性散文</p>
          <p>
            <span class="person">17746</span> 已读
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "bookList",
  activated() {
    console.log(this.$route.fullPath);
  }
};
</script>

<style scoped>
#content .bookList {
  flex: 1;
  overflow: auto;
}
.bookList .recommend {
  margin-top: 10px;
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 16px;
}
.bookList > ul {
  margin: 0 12px;
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
.youLove span {
  font-size: 12px;
  color: #999;
  float: right;
  font-weight: 100;
  padding-right: 10px;
  box-sizing: border-box;
}
.youLove ul {
  width: 100%;
  height: 160px;
  display: flex;
  margin-top: 5px;
}
.youLove ul li {
  flex: 1;
  height: 100%;
  margin: 0 8px;
  overflow: hidden;
}
.youLove ul li div {
  width: 100%;
  height: 80%;
  box-shadow: 0 0 3px 2px #ccc;
}
.youLove ul li img {
  width: 100%;
  height: 100%;
}
.youLove ul li p {
  font-size: 12px;
  color: rgb(136, 135, 135);
  line-height: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>