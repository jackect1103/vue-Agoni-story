<template>
  <div class="comment">
    <!-- 头部start -->
    <Header :title="name" >
      <i class="iconfont icon-back" @touchstart="handleToBack" slot="back"></i>
    </Header>
    <!-- 某个评论的页面 -->
    <div class="someOneComment">
      <!-- 头像 -->
      <div class="commentBox_img">
        <img :src="currentComment.user_img" />
      </div>
      <!-- 内容区域 -->
      <div class="user_info">
        <p class="user_name">{{ currentComment.user_name }}</p>
        <p class="commentTime">{{ currentComment.commentTime }}</p>
        <p class="commentContent">{{ currentComment.commentContent }}</p>
      </div>
    </div>
    <!-- 显示别人的评论 -->
    <div class="showComment">
      <p class="count">
        <span>回复 {{commentList.length }}</span>
        <span>|</span>
        <span>赞 0</span>
      </p>
      <ul class="otherComment" v-if="commentList.length">
        <li v-for="otherItem in commentList" :key="otherItem.id">
          <div class="someOneComment">
            <!-- 头像 -->
            <div class="commentBox_img">
              <img :src="otherItem.user_img" />
            </div>
            <!-- 内容区域 -->
            <div class="user_info">
              <p class="user_name">{{ otherItem.user_name }}</p>
              <p class="commentTime">{{ otherItem.commentTime }}</p>
              <p class="commentContent">{{ otherItem.commentContent }}</p>
            </div>
          </div>
        </li>
      </ul>
      <ul v-else>
        <li class="noAnswer">
          <i class="iconfont icon-pinglun1"></i>
          <br />
          <br />
          <span>暂无评论</span>
        </li>
      </ul>
    </div>
    <!-- 输入框 -->
    <div class="inputText">
      <!-- 点击跳转到回复输入组件 -->
      <router-link
        tag="span"
        :to="'/bookcircle/circleDetail/'+number+'/'+name+'/editPage'"
        type="text"
        disabled
        @click="jumpRouter"
      >回复</router-link>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "comment",
  components: {
    Header
  },
  props: {
    // number,
    name: {
      type: String,
      default: "纪",
      name
    }
  },
  data() {
    return {
      currentComment: {
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
        },
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
  methods:{
    handleToBack() {
      this.$router.back();
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    jumpRouter: function() {
      this.$router.push("/");
    }
  },
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
};
</script>
<style lang='css' scoped>
.comment {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: rgb(238, 237, 237);
}
.showComment {
  background-color: #fff;
  margin-bottom: 35px;
}
.otherComment li {
  border-bottom: 1px solid rgb(233, 230, 230);
}
.count {
  padding: 5px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(233, 230, 230);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  color: #999;
}
.count span {
  margin-right: 5px;
}
/* 评论 */
.someOneComment {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 8px 0;
  padding: 5px 0;
  box-sizing: border-box;
  background-color: white;
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
/* 输入框 */
.inputText {
  width: 100%;
  height: 35px;
  padding: 5px 15px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid #ccc;
}
.inputText span {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 3px 10px;
  box-sizing: border-box;
  border: none;
  color:#888;
  font-size: 14px;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.05)
}
.noAnswer {
  width: 100%;
  height: 105px;
  text-align: center;
  margin: 35px 0;
}
</style>