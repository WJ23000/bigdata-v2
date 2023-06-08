<template lang="pug">
  div.echart-container.w100.h100(
    ref="echart")
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import * as echarts from "echarts";
import resizeOption from "./option";

@Component({
  components: {}
})
export default class Echart extends Vue {
  @Prop()
  option: any;
  @Prop()
  type!: string;

  echartData: any = "";

  @Watch("option", { deep: true })
  onOptionChange() {
    this.echartData.clear(); // 消除当前实例，重新渲染
    this.echartData && this.echartData.setOption(this.option, true);
  }

  mounted() {
    const dom = this.$refs.echart;
    this.echartData = echarts.init(dom as HTMLElement);
    this.echartData.clear(); // 消除当前实例，重新渲染
    this.echartData.setOption(this.option, true);
    window.addEventListener("resize", () => {
      const option = resizeOption(this.option, this.type);
      this.echartData.clear(); // 消除当前实例，重新渲染
      this.echartData.setOption(option, true); // 重新渲染
      (this.echartData as any).resize();
    });
    this.onColumnChange();
  }

  // 柱形图点击事件
  onColumnChange() {
    this.echartData.on("click", params => {
      const data = {
        seriesIndex: params.seriesIndex,
        dataIndex: params.dataIndex,
        seriesName: params.seriesName,
        name: params.name,
        data: params.data,
        value: params.value
      };
      this.$emit("onColumnChange", data);
    });
  }
}
</script>

<style scoped lang="stylus" scoped></style>
