<template lang="pug">
div.capsule
  dv-border-box-12.container 
    div.flex
      i.fa.mr2(class="fa-align-left")
      div.title.mr2.f2 地形分布占比
    dv-capsule-chart.capsule-chart(:config="config") 
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class TerrainChart extends Vue {
  config = {
    data: [
      {
        name: "高原",
        value: 20
      },
      {
        name: "山地",
        value: 16
      },
      {
        name: "平原",
        value: 13
      },
      {
        name: "丘陵",
        value: 32
      },
      {
        name: "盆地",
        value: 19
      }
    ],
    unit: "%"
  };
}
</script>
<style lang="stylus" scoped>
.capsule
  .container
    height: 260px;
    padding: 20px;
    box-sizing: border-box;
    .title
      color: #89e5ff;
      line-height: 20px;
    .capsule-chart
      height: 210px;
</style>
