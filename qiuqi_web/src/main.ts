import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Qs from 'qs';
Vue.prototype.$qs = Qs
Vue.prototype.$axios = axios
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
