<template lang="pug">
div.magnetic-field
  dv-border-box-13.container 
    div.flex
      i.fa.mr2(class="fa-bar-chart")
      div.title.mr2.f2 磁场活跃强度(A/m)
      dv-decoration-1.decoration-icon
    Echart.scroll-board(:option="option", type="intensity-chart")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Echart from "@/components/echart/Echart.vue";

@Component({
  components: { Echart }
})
export default class IntensityChart extends Vue {
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      top: "4%",
      left: "2%",
      right: "3%",
      bottom: "8%",
      containLabel: true
    },
    xAxis: {
      show: true,
      axisLabel: {
        color: "#ffffff",
        formatter: "{value}",
        show: true,
        fontSize: 14
      },
      splitLine: { show: false },
      axisLine: {
        show: true
      }
    },
    yAxis: {
      type: "category",
      inverse: true, // 倒叙
      axisLabel: {
        color: "#ffffff",
        formatter: val => {
          return `${val}`;
        },
        fontSize: 14
      },
      data: ["亚洲", "非洲", "北美洲", "南美洲", "南极洲", "欧洲", "大洋洲"]
    },
    series: [
      {
        name: "强度",
        type: "bar",
        barWidth: 20,
        showBackground: true,
        itemStyle: {
          // 这里是颜色
          color: function(params) {
            // 注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
            const colorList = ["#556DC8", "#91CC75", "#FAC858", "#EE6666", "#74C0DE", "#3CA374", "#FF8750"];
            return colorList[params.dataIndex];
          }
        },
        data: [10, 20, 30, 35, 25, 50, 15]
      }
    ]
  };
}
</script>
<style lang="stylus" scoped>
.magnetic-field
  .container
    height: 400px;
    padding: 30px 20px 0px 20px;
    box-sizing: border-box;
    .title
      color: #89e5ff;
    .scroll-board
      height: 350px;
</style>
