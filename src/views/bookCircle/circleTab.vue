<template>
  <div class="circleTab">
    <!-- 轮播图 start -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="http://bpic.588ku.com/back_pic/03/66/98/5857b120313993e.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://bpic.588ku.com/back_pic/17/05/20/217b3fe228f3dd502e02326311b212eb.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://bpic.588ku.com/back_pic/17/07/08/81a85c0162a43904577d9c417b3bb89d.jpg" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 轮播图 end -->
    <!-- tab选项框 start -->
    <slot name="tabCard"></slot>
    <!-- tab选项框 end -->
  </div>
</template>

<script>
export default {
  name: "circleTab",
  data() {
    return {};
  }
};
</script>

<style scoped>
.mint-swipe {
  width: 100%;
  height: 180px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.item {
  display: inline-block;
}

.link {
  color: inherit;
  padding: 20px;
  display: block;
}
</style>