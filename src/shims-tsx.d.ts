import Vue, { VNode } from "vue";

declare module "vue/types/vue" {}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
  const __static: any;

  interface Page {
    pno?: number;
    perpage?: number;
    pageTotal?: number;
  }
}
