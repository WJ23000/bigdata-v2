<template lang="pug">
div.ranking
  dv-border-box-13.container
    div.mb2.flex
      i.fa.mr2(class="fa-navicon")
      div.title.f2 地震概率分析
    dv-scroll-board.scroll-board(:config="config") 
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Ranking extends Vue {
  config = {
    // 表头背景色
    headerBGC: "#556DC8",
    // 奇数行背景色
    oddRowBGC: "#070C34",
    // 偶数行背景色
    evenRowBGC: "#070C34",
    header: ["城市", "概率(%)", "时间"],
    data: [
      ["A城", "2.3", "2022-10-01 08:30:21"],
      ["B城", "7.1", "2022-10-02 05:20:01"],
      ["C城", "3.6", "2022-10-03 18:35:11"],
      ["D城", "3.9", "2022-10-04 14:41:23"],
      ["E城", "4.5", "2022-10-05 17:34:17"],
      ["F城", "9.5", "2022-10-06 09:22:43"],
      ["G城", "8.7", "2022-10-07 07:08:55"],
      ["H城", "7.7", "2022-10-08 12:46:21"],
      ["I城", "6.4", "2022-10-09 06:28:27"],
      ["J城", "5.9", "2022-10-10 11:19:29"],
      ["k城", "5.3", "2022-10-11 00:26:27"],
      ["L城", "4.7", "2022-10-12 04:28:46"],
      ["M城", "3.9", "2022-10-13 02:19:49"]
    ],
    columnWidth: [120, 120, 240],
    rowNum: 10,
    align: ["center"]
  };
}
</script>
<style lang="stylus" scoped>
.ranking
  .container
    height: 540px;
    padding: 30px 20px 0px 20px;
    box-sizing: border-box;
    .title
      color: #89e5ff;
      line-height: 20px;
    .scroll-board
      height: 460px;
</style>
