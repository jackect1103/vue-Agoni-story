<template>
  <div class="bookList" ref="bookList">
    <div class="wrapper">
      <!-- 轮播图 -->
      <slot name="swiper1"></slot>
      <!-- 猜你在追 -->
      <div class="youLove">
        <h1 class="recommend">
          出版精品
          <router-link :to="'/bookcity/category/'+target" tag="span">查看全部></router-link>
        </h1>
        <ul>
          <router-link
            tag="li"
            :to="'/bookcity/storypage/'+item.id"
            v-for="item in youLove"
            :key="item.id"
            @tap="handleToDetail(item.id)"
          >
            <div>
              <img v-lazy="item.img" />
            </div>
            <p>{{ item.word }}</p>
          </router-link>
        </ul>
      </div>
      <h1 class="recommend">热门推荐</h1>
      <!-- 精彩推荐 list -->
      <ul>
        <router-link
          :to="'/bookcity/storypage/'+item.id"
          tag="li"
          v-for="item in storyList"
          :key="item.id"
        >
          <div class="pic_show">
            <img :src="item.img" />
          </div>
          <div class="info_list">
            <h2>{{ item.title }}</h2>
            <p>作者:{{ item.author }}</p>
            <p>{{ item.evaluate }}</p>
            <p>
              <span class="person">{{ item.number }}</span> 已读
            </p>
          </div>
        </router-link>
      </ul>
    </div>
    <!--  -->
    <!-- <router-view name="storyPage"></router-view> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import BScorll from "better-scroll";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "bookList",
  data() {
    return {
      youLove: [
        {
          id: 0,
          img:
            "https://bookcover.yuewen.com/qdbimg/349573/c_11046521703587203/90",
          word: "人活百年，总有终期，老夫老妻，也总有一人要先走一"
        },
        {
          id: 1,
          img:
            "https://bookcover.yuewen.com/qdbimg/349573/c_14178274605353604/90",
          word: "暴躁戏精小太后vs无情腹黑渣帝，双洁，无血缘，无"
        },
        {
          id: 2,
          img:
            "https://bookcover.yuewen.com/qdbimg/349573/c_13776403405545404/180",
          word:
            "一朝出车祸，她华夏顶级医师，变为毫无修炼天赋的废材！从云端跌落为人人可欺的小可怜。"
        }
      ],
      storyList: [
        {
          id: 0,
          title: "迷情",
          img:
            "https://www.wodeshucheng.com/files/article/image/72/72800/72800s.jpg",
          author: "柠檬茶不加冰",
          evaluate:
            "再见许彻时，白沫已经不是豪门的千金小姐。她知道自己该恨他，恨他欺骗了她的感情，害得她家破人亡。他抢走了她所有的一切，抢不走的也全部毁掉，包括她下半辈子的人生。可在他冰凉的目光下，她只想转身继续逃",
          number: 17746
        },
        {
          id: 1,
          title: "我曾见过星辰",
          img:
            "https://www.wodeshucheng.com/modules/article/images/nocover.jpg",
          author: "木叔",
          evaluate:
            "一场阴谋，童谣嫁给了冷若冰霜的楚氏集团总裁楚星辰。甘愿受折磨只为陪在他身边，当姐姐童珊杀回来时，这一切完全破灭。离婚、流产、失踪。当爱情破灭，童谣又该何去何从。",
          number: 19506
        },
        {
          id: 2,
          title: "假装爱你别无选择",
          img:
            "https://www.wodeshucheng.com/files/article/image/39/39485/39485s.jpg",
          author: "大土豪 ",
          evaluate:
            "与男友订婚前夕，却被设局陷害，被男友误解，婚约泡汤。本已是众叛亲离，不料那个男人找上门来。她想要逃，却被他紧紧拽住，他笑，这辈子我都不会再让你逃……他，是尊贵名门，掌握世界经济命脉的帝国总裁。传闻他",
          number: 10421
        },
        {
          id: 3,
          title: "高冷男神住隔壁：错吻55次",
          img:
            "https://www.wodeshucheng.com/files/article/image/21/21389/21389s.jpg",
          author: "叶非夜",
          evaluate:
            "本书已出版上市，书名《致我最爱的你》，签名版当当有哦，速度去抢咯~“老公，我今晚肚子有些不舒服，求休假！”“老公，我今晚好像有点感冒了，求休假！”“老公，我今晚要去朋友家陪她，求休假！”结婚前的顾倾城",
          number: 88133
        },
        {
          id: 4,
          title: "逍遥兵王混乡村",
          img:
            "https://www.wodeshucheng.com/files/article/image/38/38321/38321s.jpg",
          author: "跳过龙门不是鱼",
          evaluate:
            "绝代兵王回到乡村，村子里的年轻人都外出打工，留下一大片的荒地。白手起家开荒种地，道法种菜寻找新商机：医术高超救死扶伤：超人身手引来美女争先投入怀抱。谁说当",
          number: 8337
        }
      ]
    };
  },
  activated() {
    // console.log(this.$route.fullPath);
  },
  mounted() {
    // new BScorll(this.$refs.bookList,{
    //   tap:true
    // })
  },
  methods: {
    handleToDetail(index) {
      console.log(index);
    }
  }
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
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
.bookList .wrapper > ul {
  margin: 0 12px;
  overflow: hidden;
}
.bookList .wrapper > ul li {
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
.person {
  margin-right: 5px;
}
</style>