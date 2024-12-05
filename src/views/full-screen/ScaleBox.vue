<template lang="pug">
div.scale-box(
  ref="scaleBoxRef",
  :style="style")
  slot
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ScaleBox extends Vue {
  style = {
    width: "1920px",
    height: "1080px",
    backgroundColor: "#000000", // 背景颜色
    position: "fixed",
    transform: "scale(var(--scale)) translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    transformOrigin: "0 0",
    left: "50%",
    top: "50%",
    transition: "0.3s",
    zIndex: 999
  };
  delay = 100; // 防抖时间
  scale = 0;
  timer;

  @Watch("scale", { immediate: true })
  onScaleChange() {
    this.$emit("scaleChange", this.scale);
  }

  mounted() {
    this.setScale();
    window.addEventListener("resize", this.debounce(this.setScale));
  }

  getScale() {
    const wh = window.innerHeight / 1080;
    const ww = window.innerWidth / 1920;
    return ww < wh ? ww : wh;
  }
  setScale() {
    this.scale = this.getScale();
    if (this.$refs.scaleBoxRef) {
      (this.$refs as any).scaleBoxRef.style.setProperty("--scale", this.scale);
    }
  }
  debounce(fn, delay?) {
    const delays = delay || this.delay;
    const that = this;
    return function(...args: any) {
      if (that.timer) {
        clearTimeout(that.timer);
      }
      that.timer = setTimeout(function() {
        that.timer = null;
        fn.apply(that, args);
      }, delays);
    };
  }
}
</script>
<style lang="stylus" scoped>
.scale-box
  padding 20px 10px 10px 10px
</style>
