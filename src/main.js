import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem ,Field,Search ,Cell,Badge  } from 'mint-ui';
import VueLazyload from 'vue-lazyload'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Field.name, Field);
Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);
Vue.component(Badge.name, Badge);

Vue.use(VueLazyload, {
  loading: './assets/loading.gif',
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
