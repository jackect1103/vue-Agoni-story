<template>
  <div class="circleBox">
    <ul class="circleBox_ul">
      <li v-for="item in dataList" :key="item.id">
        <h2>{{ item.title }}</h2>
        <div class="contentBox">
          <div class="contentImg">
            <img :src="item.img" alt />
          </div>
          <div class="conetntWord">
            <p>{{ item.content }}</p>
            <p class="date">
              {{ item.date }}
              <router-link tag="span" to="/bookcircle/comment" class="st-icon-pandora">评论</router-link>
            </p>
          </div>
        </div>
      </li>
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
          title: "孩子选书指南：《故事药丸》用故事化解成长中的疑难杂症",
          img:
            "http://n.sinaimg.cn/book/275/w165h110/20190906/95ff-ieftthx8403085.jpg",
          content:
            "《故事药丸》是继《小说药丸》后，作者埃拉·伯绍德和苏珊·埃尔德金为儿童和青少年开出的文学疗愈书单，它一方面可以帮助成年人在品类众多的童书中找到适合自己孩子阅读层次和需求的书籍，另一方面也有助...[详细]...[详细]",
          date: new Date().getMonth() + 1 + "月" + new Date().getDate() + "号"
        },
        {
          title: "“新晋奶爸”六神磊磊量身定制《给孩子的唐诗课》",
          img:
            "http://n.sinaimg.cn/book/275/w165h110/20190819/d7cb-icmpfxa3199580.jpg",
          content:
            "王亭之，香港“食神”级人物，食界引路人之一，多款食制的创立者及幕后推手。《王亭之谈食》，一部写在传统饮食文化潮起潮落时代的批评小品，一述中餐饮食砧炉盘盏间的趣秘。文笔风趣，且见性情。劝诫垂范...",
          date: new Date().getMonth() + 1 + "月" + new Date().getDate() + "号"
        },
        {
          title: "国际绘本界“流量担当”吉竹伸介系列作品引进出版",
          img:
            "http://n.sinaimg.cn/book/275/w165h110/20190825/618b-icuacrz3448353.jpg",
          content:
            "莫先生曾说：“唐诗犹如一座气象万千的深山，我曾通读过存世的全部唐诗，对唐诗这座大山的进山路径和景点方位比较熟悉。我想做那个站在山口向游客指点进山路径和解说沿途风景的导游。”自称为“导游”是莫...[详细]",
          date: new Date().getMonth() + 1 + "月"
        },
        {
          title: "第十届茅盾文学奖揭晓：李洱徐则臣梁晓声等五位作家获奖",
          img:
            "http://n.sinaimg.cn/book/275/w165h110/20190816/bbe7-ichcymv8853214.jpg",
          content:
            "第十届茅盾文学奖评奖办公室今天公布了本届茅盾文学奖的获奖作品，分别是：《人世间》（梁晓声）、《牵风记》（徐怀中）、《北上》（徐则臣）、《主角》（陈彦）和《应物兄》（李洱）。...[详细]",
          date: new Date().getMonth() + 1 + "月" + new Date().getDate() + "号"
        },
        {
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

<style lang="css">
</style>
