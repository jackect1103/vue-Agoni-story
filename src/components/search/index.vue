<template>
  <div>
      <Header />
    <mt-search v-model="keywords" cancel-text="取消" placeholder="search"></mt-search>
    <ul>
      <li v-for="(item,id) in search(keywords)" :key="id" >
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: "search",
  components:{
      Header
  },
  data() {
    return {
      keywords: "",
      result: [
        {
          id: 0,
          title: "李洱：对汉语文学来讲，库切比马尔克斯重要得多",
          img:
            "http://n.sinaimg.cn/book/275/w165h110/20190902/9c90-ieaiqii2235801.jpg",
          content:
            "人民文学出版社将库切的经典作品一网打尽，将陆续在“库切文集”中出版。文集将于2020年出齐，并且为了弥补之前版本不统一的遗憾，也为了让库切在新版本展现新的风貌，这套文集不仅是献给库切读者的惊...[详细]",
          date: new Date().getMonth() + 1 + "月" + new Date().getDate() + "号"
        },
        {
          id: 1,
          title: "《王亭之谈食》分享会：香港“食神”谈美食忆往事",
          img:
            "http://n.sinaimg.cn/book/275/w165h110/20190830/66d0-icxmqsv6831311.jpg",
          content:
            "王亭之，香港“食神”级人物，食界引路人之一，多款食制的创立者及幕后推手。《王亭之谈食》，一部写在传统饮食文化潮起潮落时代的批评小品，一述中餐饮食砧炉盘盏间的趣秘。文笔风趣，且见性情。劝诫垂范...",
          date: new Date().getMonth() + 1 + "月" + new Date().getDate() + "号"
        },
        {
          id: 2,
          title: "莫砺锋教授谈“唐诗苑的入门与探幽”：读诗最后就是读人",
          img:
            "http://n.sinaimg.cn/book/275/w165h110/20190818/18ed-icmpfwz7239191.jpg",
          content:
            "莫先生曾说：“唐诗犹如一座气象万千的深山，我曾通读过存世的全部唐诗，对唐诗这座大山的进山路径和景点方位比较熟悉。我想做那个站在山口向游客指点进山路径和解说沿途风景的导游。”自称为“导游”是莫...[详细]",
          date: new Date().getMonth() + 1 + "月"
        }
      ]
    };
  },
  methods: {
    search(keywords) {
      var newResult = [];
      if (!keywords) return;
      this.result.forEach(item => {
        if (item.title.indexOf(keywords) != -1) {
          newResult.push(item);
        }
      });
      return newResult;
    }
  }
};
</script>

<style lang="css" scoped>
.mint-search {
  height: auto;
}
li {
  line-height: 45px;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
  box-sizing: border-box;
}
li p {
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li:hover {
  color: #fda100;
}
</style>