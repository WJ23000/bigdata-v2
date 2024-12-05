<template lang="pug">
div.left-index
  RegionChart.mb2
  Ranking
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RegionChart from "./RegionChart.vue";
import Ranking from "./Ranking.vue";

@Component({
  components: { RegionChart, Ranking }
})
export default class LeftIndex extends Vue {}
</script>
<style lang="stylus" scoped>
.left-index
  width: 380px;
</style>
