<template lang="pug">
  div.full-screen
    ScaleBox(@scaleChange="scaleChange")
      template
        Header.mt1
        div.mt2.flex.align-start
          LeftIndex
          CenterIndex.ml2
          RightIndex.ml2
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ScaleBox from "./ScaleBox.vue";
import Header from "./components/top/Header.vue";
import LeftIndex from "./components/left/Index.vue";
import CenterIndex from "./components/center/Index.vue";
import RightIndex from "./components/right/Index.vue";

@Component({
  components: {
    ScaleBox,
    Header,
    LeftIndex,
    CenterIndex,
    RightIndex
  }
})
export default class FullScreen extends Vue {
  scale = 1;

  scaleChange(scale) {
    // 缩放导致地图上偏移 解决方案
    this.scale = 1 / scale;
  }
}
</script>
<style lang="stylus" scoped></style>
