import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import VueLazyload from 'vue-lazyload'
// import { Button ,Swipe, SwipeItem ,Field,Search ,Cell,Badge,InfiniteScroll  } from 'mint-ui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import axios from 'axios'
Vue.prototype.$axios = axios;
import BScroll from "@/components/BScroll";
Vue.component('BScroll', BScroll);
import Loading from "@/components/loading";
Vue.component('Loading', Loading);



Vue.use(VueLazyload, {
  loading: './assets/loading.gif',
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
