<template>
  <div id="content">
    <!-- 选择性别 -->
    <div class="sex">
      <h2>选择性别</h2>
      <div class="sexBox">
        <router-link tag="div" to="/bookList:boy">
          <i class="iconfont icon-boy"></i>
          我是男生
        </router-link>
        <router-link tag="div" to="/bookList:girl">
          <i class="iconfont icon-huabanfuben"></i>
          我是女生
        </router-link>
      </div>
    </div>
    <!-- 选择类别 -->
    <div class="classification">
      <h2>选择类别</h2>
      <ul class="shelfList">
        <router-link tag="li" to='/bookList:玄幻'>
          <div class="shelfBox">
            <div>玄幻</div>
            <div>
              <img
                src="http://imgsrc.baidu.com/baike/abpic/item/0dd7912397dda144f6905e65b8b7d0a20df4864f.jpg"
                alt='玄幻'
              />
            </div>
          </div>
          <p>文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足</p>
        </router-link>
        <router-link tag="li" to='/bookList:都市'>
          <div class="shelfBox">
            <div>都市</div>
            <div>
              <img
                src="http://imgsrc.baidu.com/baike/abpic/item/8b82b9014a90f603bf2f82853712b31bb151ed51.jpg"
                alt="都市"
              />
            </div>
          </div>
          <p>文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足</p>
        </router-link>
        <router-link tag="li" to='/bookList:武侠'>
          <div class="shelfBox">
            <div>武侠</div>
            <div>
              <img
                src="http://imgsrc.baidu.com/baike/abpic/item/0dd7912397dda144f6905e65b8b7d0a20df4864f.jpg"
                alt='武侠'
              />
            </div>
          </div>
          <p>文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足</p>
        </router-link>
        <router-link tag="li" to='/bookList:穿越'>
          <div class="shelfBox">
            <div>穿越</div>
            <div>
              <img
                src="http://imgsrc.baidu.com/baike/abpic/item/0823dd54564e9258c36539ac9482d158ccbf4e1a.jpg"
                alt='穿越'
              />
            </div>
          </div>
          <p>文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足</p>
        </router-link>
        <router-link tag="li" to='/bookList:悬疑'>
          <div class="shelfBox">
            <div>悬疑</div>
            <div>
              <img
                src="http://imgsrc.baidu.com/baike/abpic/item/c9fcc3cec3fdfc03813e641dd33f8794a5c226d4.jpg"
                alt='悬疑'
              />
            </div>
          </div>
          <p>文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足</p>
        </router-link>
        <router-link tag="li" to='/bookList:历史'>
          <div class="shelfBox">
            <div>历史</div>
            <div>
              <img
                src="http://imgsrc.baidu.com/baike/abpic/item/a8014c086e061d953246def577f40ad163d9caff.jpg"
                alt='历史'
              />
            </div>
          </div>
          <p>文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足</p>
        </router-link>
        <router-link tag="li" to='/bookList:游戏'>
          <div class="shelfBox">
            <div>游戏</div>
            <div>
              <img
                src="http://imgsrc.baidu.com/baike/abpic/item/34fae6cd7b899e51206ca7fa4ca7d933c9950d79.jpg"
                alt='游戏'
              />
            </div>
          </div>
          <p>文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足</p>
        </router-link>
        <router-link tag="li" to='/bookList:文学'>
          <div class="shelfBox">
            <div>文学</div>
            <div>
              <img
                src="http://imgsrc.baidu.com/baike/abpic/item/622762d0f703918f79cb435b5b3d269759eec40d.jpg"
                alt='文学'
              />
            </div>
          </div>
          <p>文体光怪陆离如穿越、东方玄幻、修真仙侠、高武，甚或改编电影动漫等等不一而足</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
  height: 110px;
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
  padding-left:15px;
  box-sizing: border-box;
  color:#ccc;
}
</style>