<template>
  <div class="circleBox">
    <ul class="circleBox_ul">
      <router-link
        tag="li"
        :to="{path:'/bookcircle/circleDetail/'+item.id}"
        v-for="item in dataList"
        :key="item.id"
      >
        <h2>{{ item.title }}</h2>
        <div class="contentBox">
          <div class="contentImg">
            <img :src="item.img" alt /> 
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
      dataList: [
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
        },
        {
          id: 3,
          title: "第十届茅盾文学奖揭晓：李洱徐则臣梁晓声等五位作家获奖",
          img:
            "http://n.sinaimg.cn/book/275/w165h110/20190816/bbe7-ichcymv8853214.jpg",
          content:
            "第十届茅盾文学奖评奖办公室今天公布了本届茅盾文学奖的获奖作品，分别是：《人世间》（梁晓声）、《牵风记》（徐怀中）、《北上》（徐则臣）、《主角》（陈彦）和《应物兄》（李洱）。...[详细]",
          date: new Date().getMonth() + 1 + "月" + new Date().getDate() + "号"
        },
        {
          id: 4,
          title: "长居六十年笔耕四十载：南京人叶兆言立《南京传》",
          img:
            "http://n.sinaimg.cn/book/275/w165h110/20190815/210d-ichcymv2131515.jpg",
          content:
            "在这部集其四十年写作大成的《南京传》中，叶兆言以史为纲爬梳剔抉南京历史：从公元211年孙权迁治秣陵，到1949年百万雄师过大江，历经东吴霸业、六朝金粉、南唐偏安、明清隆替、民国风云，南京如何...[详细]",
          date: new Date().getMonth() + 1 + "月" + new Date().getDate() + "号"
        }
      ]
    };
  }
}; 
</script>

<style lang="css" scoped>
.circleBox{
  flex: 1;
  overflow: auto;
}
.circleBox_ul{
  overflow: hidden;
}
</style>