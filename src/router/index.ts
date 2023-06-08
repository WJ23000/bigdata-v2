import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import FullScreen from "../views/full-screen/Index.vue";
import SpliceScreen from "../views/splice-screen/Index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "fullScreen",
    component: FullScreen,
    children: []
  },
  {
    path: "/splice-screen",
    name: "spliceScreen",
    component: SpliceScreen,
    children: []
  }
];

const router = new VueRouter({
  routes
});

// 处理去往的路由跟上次进入的路由相同
const VueRouterPush: any = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};

export default router;
