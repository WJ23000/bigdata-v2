<template lang="pug">
  div.map
    div.container(id="map-container")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AMapLoader from "@amap/amap-jsapi-loader";

(window as any)._AMapSecurityConfig = {
  securityJsCode: "8cf7c33262a64ac02b346785b6837139" // 安全密钥
};

@Component({
  components: {}
})
export default class Map extends Vue {
  longitude = ""; // 经度
  latitude = ""; // 纬度

  mounted() {
    this.init();
  }
  init() {
    AMapLoader.load({
      key: "4986aff6097aefdba4e174a1f1fd39e7", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.MapType", "AMap.CitySearch"] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then(AMap => {
        AMap.plugin("AMap.CitySearch", function() {
          const citySearch = new AMap.CitySearch();
          citySearch.getLocalCity(function(status, result) {
            if (status === "complete" && result.info === "OK") {
              // 查询成功，result即为当前所在城市信息
              const data = result.rectangle.split(";");
              const local = data[1];
              const map = new AMap.Map("map-container", {
                rotateEnable: true,
                pitchEnable: true,
                zoom: 17,
                pitch: 50,
                rotation: -15,
                viewMode: "3D", //开启3D视图,默认为关闭
                zooms: [2, 20],
                center: [local.split(",")[0], local.split(",")[1]]
              });
              map.addControl(
                new AMap.MapType({
                  defaultType: 1 // 0代表默认,1代表卫星
                })
              );
              window.addEventListener("resize", () => {
                (map as any).resize();
              });
            }
          });
        });
      })
      .catch(e => {
        console.log(e);
      });
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
