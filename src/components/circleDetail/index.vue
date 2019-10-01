<template>
  <div id="circleContrainer" class="slide-enter-active">
    <!-- 头部start -->
    <Header title="文章详情" />
    <!-- 头部end -->
    <!-- 内容区域start -->
    <div class="circleText">
      <!-- 文章内容start -->
      <div class="circleTextBox">
        <h3>李洱：对汉语文学来讲，库切比马尔克斯重要得多</h3>
        <div class="circleImg">
          <img
            src="http://bpic.588ku.com/back_pic/17/07/08/81a85c0162a43904577d9c417b3bb89d.jpg"
            alt
          />
        </div>
        <div class="storyContext" :class="{'storyContextHeight':isNotMore}">
          <p>“淮楚贡橘，又被称作金丝蜜橘，其小如龙眼，皮光肉薄，汁水甜浓如蜜。我们大小姐说了，这可是只有宫里的娘娘们才吃得到的好东西，所以特地吩咐奴婢拿过来，给表姑娘尝个鲜。”</p>
          <p>穿藕荷色长裙的丫头款款说着，面上笑吟吟的，弯眉俊颜，却带了一丝显而易见的倨傲。</p>
          <p>顾锦珠目光看着手里的书，眼角都没向她瞟上一眼，只淡淡道：“放那儿吧，替我谢谢你家小姐。”</p>
          <p>她的语气在“咱们姑爷”四个字上咬得格外重，眼中隐约有一丝得意。</p>
          <p>顾锦珠眉头一皱，还不待她说话，从屋里拿了披风的贴身丫头碧菀走了过来，把缎青色蜀锦的披风披在她肩头，轻言细语的道：“小姐，这儿风凉，不如我们进屋去吧。”</p>
          <p>“淮楚贡橘，又被称作金丝蜜橘，其小如龙眼，皮光肉薄，汁水甜浓如蜜。我们大小姐说了，这可是只有宫里的娘娘们才吃得到的好东西，所以特地吩咐奴婢拿过来，给表姑娘尝个鲜。”</p>
          <p>穿藕荷色长裙的丫头款款说着，面上笑吟吟的，弯眉俊颜，却带了一丝显而易见的倨傲。</p>
          <p>顾锦珠目光看着手里的书，眼角都没向她瞟上一眼，只淡淡道：“放那儿吧，替我谢谢你家小姐。”</p>
          <p>她的语气在“咱们姑爷”四个字上咬得格外重，眼中隐约有一丝得意。</p>
          <p>顾锦珠眉头一皱，还不待她说话，从屋里拿了披风的贴身丫头碧菀走了过来，把缎青色蜀锦的披风披在她肩头，轻言细语的道：“小姐，这儿风凉，不如我们进屋去吧。”</p>
        </div>
      </div>
      <p ref="more" class="storyContextMore" @touchstart="handleMore">更多...</p>
      <!-- 文章内容end -->
      <!-- 评论区域start -->
      <div class="circleComment">
        <ul>
          <li v-for="item in commentList" :key="item.user_id">
            <div class="commentBox">
              <!-- 头像 -->
              <div class="commentBox_img">
                <img :src="item.user_img" />
              </div>
              <!-- 内容区域 -->
              <div class="user_info">
                <p class="user_name">
                  {{ item.user_name }}
                  <span style="float:right">
                      <i class="iconfont icon-pinglun"></i>
                  </span>
                  <span style="float:right;padding-right:5px;box-sizing:border-box">
                      <i class="iconfont icon-dianzan11"></i>
                  </span>
                </p>
                <p class="commentTime">{{ item.commentTime }}</p>
                <p class="commentContent">{{ item.commentContent }}</p>
                <ul class="otherComment">
                  <li v-for="otherItem in item.otherComment" :key="otherItem.id">
                    <span class="other_user">{{ otherItem.other_user }}</span>:
                    <span class="other_content">{{ otherItem.other_content }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 评论区域end -->
    </div>
    <!-- 内容区域 end -->
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "comment",
  components: {
    Header
  },
  data() {
    return {
      isNotMore: true,
      commentList: [
        {
          user_id: 0,
          user_img:
            "http://vipbook.sinaedge.com/bookcover/pics/191/cover_3074c05eea76e1cda0fb1524bdaab483.jpg",
          user_name: "妃主江山",
          commentTime: new Date().toLocaleString(),
          commentContent: "一朝穿越，两世为人，来自现代古中医世家的大小姐",
          otherComment: [
            {
              other_user: "庶女本色",
              other_content: "重来一次她不再软弱，定江山斗权臣冠宠六宫"
            },
            {
              other_user: "神医嫡女",
              other_content: "弱女子摇身一变成神医，斗渣姐惩小人，绝不手软"
            },
            {
              other_user: "医妃难求",
              other_content: "受气大小姐误惹神秘妖孽男，却稀里糊涂被宠上天"
            }
          ]
        },
        {
          user_id: 1,
          user_img:
            "http://vipbook.sinaedge.com/bookcover/pics/135/cover_ef29d9a4d37ca1090e266c3f1c4c0a2e.jpg",
          user_name: "轻狂嫡女惑乱天下轻狂嫡女惑乱天下轻狂嫡女惑乱天下",
          commentTime: new Date().toLocaleString(),
          commentContent: "一朝穿越，两世为人，来自现代古中医世家的大小姐",
          otherComment: [
            {
              other_user: "庶女本色",
              other_content: "重来一次她不再软弱，定江山斗权臣冠宠六宫"
            },
            {
              other_user: "神医嫡女",
              other_content: "弱女子摇身一变成神医，斗渣姐惩小人，绝不手软"
            },
            {
              other_user: "医妃难求",
              other_content: "受气大小姐误惹神秘妖孽男，却稀里糊涂被宠上天"
            }
          ]
        },
        {
          user_id: 2,
          user_img:
            "http://vipbook.sinaedge.com/bookcover/pics/44/cover_72a7c172bc6ca6b65b82d8de5c969de6.jpg",
          user_name: "嫡女宠妾",
          commentTime: new Date().toLocaleString(),
          commentContent: "一朝穿越，两世为人，来自现代古中医世家的大小姐",
          otherComment: [
            {
              other_user: "庶女本色",
              other_content: "重来一次她不再软弱，定江山斗权臣冠宠六宫"
            },
            {
              other_user: "神医嫡女",
              other_content: "弱女子摇身一变成神医，斗渣姐惩小人，绝不手软"
            },
            {
              other_user: "医妃难求",
              other_content: "受气大小姐误惹神秘妖孽男，却稀里糊涂被宠上天"
            }
          ]
        }
      ]
    };
  },
  props: ["id"],
  mounted() {
    console.log(this.$route.params);
  },
  methods: {
    handleMore() {
      this.isNotMore = !this.isNotMore;
      this.$refs.more.innerHTML = this.isNotMore ? "更多..." : "收起";
    }
  }
};
</script>

<style lang="css" scoped>
#circleContrainer {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: rgb(238, 237, 237);
}
#circleContrainer.slide-enter-active {
  animation: 0.3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.circleTextBox {
  background-color: white;
}
.circleText .circleTextBox h3 {
  padding: 5px 15px;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.circleText .circleTextBox .circleImg {
  width: 100%;
}
.storyContext {
  width: 100%;
}
/* 显示更多 */
.storyContextHeight {
  width: 100%;
  height: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.storyContextMore {
  text-align: center;
  width: 100%;
  padding: 5px 0;
  box-sizing: border-box;
  background-color: #fff;
}

.circleText .circleTextBox p {
  text-indent: 30px;
  padding: 10px 10px;
  box-sizing: border-box;
}
.circleComment {
  width: 100%;
  background-color: #fff;
  margin-top: 15px;
}
.circleComment > ul {
  width: 100%;
  list-style: none;
}
.circleComment > ul > li {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  box-sizing: border-box;
}
/* 评论 */
.commentBox {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* .commentBox  */
.commentBox_img {
  width: 15%;
  height: 25%;
  /* 固定图片在顶部 */
  align-self: flex-start;
  box-sizing: border-box;
  position: relative;
}
.commentBox_img img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}
.user_info {
  width: 78%;
}
.user_info p {
  margin-bottom: 5px;
}
.user_name {
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.commentTime {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
/* 他人评论 */
.otherComment {
  width: 100%;
  font-family: "Times New Roman", Times, serif;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px;
  box-sizing: border-box;
}
.other_user {
  color: #4285f4;
  padding-right: 3px;
  box-sizing: border-box;
}
</style>