<template lang="pug">
  div.center-index
    Map.mb3
    CardList
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Map from "./Map.vue";
import CardList from "./CardList.vue";

@Component({
  components: {
    Map,
    CardList
  }
})
export default class CenterIndex extends Vue {}
</script>
<style lang="stylus" scoped>
.center-index
  flex: 1
</style>
