<template lang="pug">
div.full-screen
  Header
  div.mt2.flex.align-start
    LeftIndex
    CenterIndex.ml2
    RightIndex.ml2
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/top/Header.vue";
import LeftIndex from "./components/left/Index.vue";
import CenterIndex from "./components/center/Index.vue";
import RightIndex from "./components/right/Index.vue";

@Component({
  components: {
    Header,
    LeftIndex,
    CenterIndex,
    RightIndex
  }
})
export default class FullScreen extends Vue {}
</script>
<style lang="stylus" scoped>
.full-screen
  padding 10px
  width 1900px
  height 1060px
  background #000000
  position absolute
  top 50%
  left 50%
  transform translate(-50%,-50%)
</style>
