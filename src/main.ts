import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataV from "@jiaminghi/data-view";
import "font-awesome/css/font-awesome.min.css";
import request from "@/common/utils/request";
import "./styles/common.styl";
import { BASE_API, HOST } from "../public/config/index";

Vue.use(dataV);

Vue.config.productionTip = false;

// 定义全局属性
Vue.prototype.$BASE_API = BASE_API;
Vue.prototype.$LOGIN = HOST["LOGIN"];
Vue.prototype.$HOST = HOST;
request.defaults.baseURL = BASE_API;

Vue.prototype.$px2rem = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
