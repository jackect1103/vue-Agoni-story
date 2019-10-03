<template>
  <header id="header">
    <li>
      <slot name="back" />
    </li>
    <li>{{ title }}</li>
    <router-link tag="li" to="/search" replace>
      <slot name="search" />
    </router-link>
  </header>
</template>  

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Agoni小说网"
    }
  },
  mounted() {
    console.log("sssss" + this.$refs.back);
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #B3B3B3;
  border-bottom: 1px solid #b3B3B3;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#header li {
  flex: 1;
  font-size: 18px;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#header li:nth-child(2) {
  text-align: center;
}
#header li:first-child {
  padding-left: 15px;
}
</style>