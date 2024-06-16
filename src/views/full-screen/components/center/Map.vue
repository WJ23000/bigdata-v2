<template lang="pug">
div.map
  div.container(id="cesiumContainer")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as Cesium from 'cesium';
import "cesium/Source/Widgets/widgets.css";

@Component({
  components: {}
})
export default class Map extends Vue {

  mounted() {
    this.init();
  }
  init() {
    Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhYjA1ODJlNC1kMTQxLTQ1NWItOWUxMS1mYTFjMzllZTljNzEiLCJpZCI6MjA5NjE0LCJpYXQiOjE3MTg1NDMwNTd9.4mNreW7Iingvy_unaG8ZARUErnc2nrYRK62NW_opaHY";
    let viewer = new Cesium.Viewer("cesiumContainer");
  }
}
</script>
<style lang="stylus" scoped>
.map
  padding: 4px 0px 0px 0px;
  .container
    height: 740px;
    border-radius: 4px;
    box-sizing: border-box;
</style>
