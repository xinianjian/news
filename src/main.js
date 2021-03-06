import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import api from "./api";
import path from "./config/path";
import utils from "./lib/utils";
import 'mint-ui/lib/style.css';

import "@/common/stylus/reset.styl";
import "@/common/stylus/layout.styl";
import "@/common/stylus/editor.styl";

import { InfiniteScroll } from 'mint-ui';


Vue.config.productionTip = false;

Vue.use(api);
Vue.use(path);
Vue.use(utils);
Vue.use(InfiniteScroll);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
