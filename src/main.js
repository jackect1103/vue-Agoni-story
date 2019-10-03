import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import 'mint-ui/lib/style.css'
import { Button ,Swipe, SwipeItem ,Field,Search ,Cell,Badge,InfiniteScroll   } from 'mint-ui';
import VueLazyload from 'vue-lazyload'

Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Field.name, Field);
Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);
Vue.component(Badge.name, Badge);
Vue.use(InfiniteScroll);//无限滚动指令。

Vue.use(VueLazyload, {
  loading: './assets/loading.gif',
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
