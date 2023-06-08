<template lang="pug">
  div.left-index
    WarnInfo.mb2 
    ClassifyChart.mb2
    TerrainChart.mb2
    IntensityChart
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WarnInfo from "./WarnInfo.vue";
import TerrainChart from "./TerrainChart.vue";
import IntensityChart from "./IntensityChart.vue";
import ClassifyChart from "./ClassifyChart.vue";

@Component({
  components: { WarnInfo, TerrainChart, IntensityChart, ClassifyChart }
})
export default class LeftIndex extends Vue {}
</script>
<style lang="stylus" scoped>
.left-index
  width: 380px;
</style>
