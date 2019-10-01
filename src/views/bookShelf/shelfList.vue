<template>
  <div id="content">
    <!-- 选择性别 -->
    <div class="sex">
      <h2>选择性别</h2>
      <div class="sexBox">
        <router-link tag="div" :to="'/bookshelf/category/'+categoryname[0]">
          <i class="iconfont icon-boy"></i>
          我是男生
        </router-link>
        <router-link tag="div" :to="'/bookshelf/category/'+categoryname[1]">
          <i class="iconfont icon-huabanfuben"></i>
          我是女生
        </router-link>
      </div>
    </div>
    <!-- 选择类别 -->
    <div class="classification">
      <h2>选择类别</h2>
      <ul class="shelfList">
        <router-link tag="li" :to="'/bookshelf/category/'+item.category_id" v-for="(item,id) in storyCategory" :key='id'>
          <div class="shelfBox">
            <div>{{ item.title }}</div>
            <div>
              <img
                :src="item.img"
                :alt="item.title"
              />
            </div>
          </div>
          <p>{{ item.context }}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "shelfList",
  data() {
    return {
      categoryname:['boy','girl'],
      storyCategory:[
        {
          category_id:"Fantasy",
          title:"玄幻",
          img:"http://imgsrc.baidu.com/baike/abpic/item/0dd7912397dda144f6905e65b8b7d0a20df4864f.jpg",
          context:"文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足"
        },{
           category_id:"urban",
          title:"都市",
          img:"http://imgsrc.baidu.com/baike/abpic/item/8b82b9014a90f603bf2f82853712b31bb151ed51.jpg",
          context:"文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足"
        },{
          category_id:"knightErrant",
          title:"武侠",
          img:"http://imgsrc.baidu.com/baike/abpic/item/0dd7912397dda144f6905e65b8b7d0a20df4864f.jpg",
          context:"文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足"
        },{
          category_id:"literature",
          title:"文学",
          img:"http://imgsrc.baidu.com/baike/abpic/item/0dd7912397dda144f6905e65b8b7d0a20df4864f.jpg",
          context:"文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足"
        },{
          category_id:"passThrough",
          title:"穿越",
          img:"http://imgsrc.baidu.com/baike/abpic/item/0dd7912397dda144f6905e65b8b7d0a20df4864f.jpg",
          context:"文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足"
        },{
          category_id:"suspense",
          title:"悬疑",
          img:"http://imgsrc.baidu.com/baike/abpic/item/0dd7912397dda144f6905e65b8b7d0a20df4864f.jpg",
          context:"文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足"
        },{
          category_id:"history",
          title:"历史",
          img:"http://imgsrc.baidu.com/baike/abpic/item/0dd7912397dda144f6905e65b8b7d0a20df4864f.jpg",
          context:"文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足"
        },{
          category_id:"game",
          title:"游戏",
          img:"http://imgsrc.baidu.com/baike/abpic/item/0dd7912397dda144f6905e65b8b7d0a20df4864f.jpg",
          context:"文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足"
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
/* 选择性别 */
h2 {
  margin-top: 10px;
  font-size: 16px;
}
#content .sex {
  width: 100%;
  height: 100px;
  margin: 10px 0;
  padding: 0 15px;
  box-sizing: border-box;
}
.sexBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
}
.sexBox .icon-boy {
  font-size: 25px;
  color: #00a4f4;
}
.sexBox .icon-huabanfuben {
  font-size: 25px;
  color: #fc7ab8;
}
.sexBox div {
  flex: 1;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 2px 0px #ccc;
}
.sexBox div:first-child {
  margin-right: 15px;
}
/* 选择类别 */
#content .classification {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}
.classification .shelfList {
  width: 100%;
  margin-top: 10px;
  text-decoration: none;
}
.classification .shelfList li {
  float: left;
  width: 48%;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 0 2px 0 #ccc;
}
.classification .shelfList li:nth-child(2n-1) {
  margin-right: 10px;
}
.classification .shelfList li .shelfBox {
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.classification .shelfList li .shelfBox div {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bolder;
  font-size: 16px;
  text-align: center;
  line-height: 80px;
  flex: 1;
  height: 100%;
}
.classification .shelfList li p {
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
  padding-left: 15px;
  box-sizing: border-box;
  color: #ccc;
}
</style>