import Vue, { VNode } from "vue";
declare module "ant-design-vue/lib/locale-provider/zh_CN" {
  interface zhCN {}
}
declare module "axios" {}
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = Vue;
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
declare module "vue/types/vue" {
  interface Vue {
    $API_URL: string;
  }
}
