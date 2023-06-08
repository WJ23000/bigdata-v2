<template lang="pug">
  div.splice-screen
    div 主页
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class SpliceScreen extends Vue {}
</script>
<style lang="stylus" scoped>
.splice-screen
  display flex
  flex-direction column
  height 100%
  .content
    background #ffffff
    flex 1
    overflow-y auto
</style>
