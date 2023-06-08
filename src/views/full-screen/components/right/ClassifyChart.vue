<template lang="pug">
  div.system
    dv-border-box-12.container 
      div.flex
        i.fa.mr2(class="fa-connectdevelop")
        div.title.mr2.f2 宏观检测分类
      div.chart-content.flex
        Echart.chart(:option="option", type="classify-chart")
        img.img.ml4(:src="imgUrl")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Echart from "@/components/echart/Echart.vue";

@Component({
  components: { Echart }
})
export default class ClassifyChart extends Vue {
  imgUrl = require("../../../../assets/earth.gif");
  option = {
    radar: {
      center: ["50%", "52%"],
      radius: "70%",
      // 名字和图形的距离
      axisNameGap: 5,
      indicator: [
        { name: "动物", max: 100, color: "#BCDCFF" },
        { name: "植物", max: 100, color: "#BCDCFF" },
        { name: "水位", max: 100, color: "#BCDCFF" },
        { name: "地热", max: 100, color: "#BCDCFF" },
        { name: "水温", max: 100, color: "#BCDCFF" }
      ],
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitArea: {
        areaStyle: {
          color: [
            "rgba(84,136,255, 0.05)",
            "rgba(84,136,255, 0.1)",
            "rgba(84,136,255, 0.2)",
            "rgba(84,136,255, 0.3)",
            "rgba(84,136,255, 0.4)",
            "rgba(84,136,255, 0.5)"
          ].reverse(),
          shadowColor: "rgba(0, 0, 0, .5)",
          shadowBlur: 5,
          shadowOffsetX: 10,
          shadowOffsetY: 10
        }
      }
    },
    textStyle: {
      fontSize: 14
    },
    series: [
      {
        type: "radar",
        symbol: "none",
        symbolSize: [6, 6],
        data: [
          {
            value: [70, 70, 90, 50, 80],
            label: {
              show: false,
              formatter: function(params) {
                return params.value;
              },
              color: "#9ae8ac",
              distance: 10,
              align: "right"
            },
            // 边缘颜色
            lineStyle: {
              color: "rgba(160,159,246, 0.6)",
              width: 2
            },
            areaStyle: {
              color: "rgba(114,113,233,.4)",
              opacity: 0.8,
              shadowColor: "rgba(115,149,255,1)",
              shadowBlur: 10
            }
          }
        ]
      }
    ]
  };
}
</script>
<style lang="stylus" scoped>
.system
  .container
    height: 220px;
    padding: 20px;
    box-sizing: border-box;
    .title
      color: #89e5ff;
      line-height: 20px;
  .chart-content
    height: 180px;
    .chart
      width: 200px;
    .img
      width: 120px;
      height: 120px;
</style>
