<template lang="pug">
div.warn
  dv-border-box-8.container
    div.flex.row.justify-around
      div.item.flex.column
        div.mb1.f3 本日预警数量
        dv-digital-flop.digital-flop(:config="config1")
      div.item.flex.column
        div.mb1.f3 本日预警占比
        dv-digital-flop.digital-flop(:config="config2")
      div.item.flex.column
        div.mb1.f3 历史预警总数
        dv-digital-flop.digital-flop(:config="config3")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class WarnInfo extends Vue {
  config1 = {
    number: [63],
    content: "{nt}",
    style: {
      fontSize: 20
    }
  };

  config2 = {
    number: [58],
    content: "{nt}%",
    style: {
      fontSize: 20
    }
  };

  config3 = {
    number: [2347],
    content: "{nt}",
    style: {
      fontSize: 20
    }
  };

  timer; // 计时器

  mounted() {
    this.timer = setInterval(() => {
      this.initData();
    }, 1000);
  }

  beforeDestroy() {
    clearInterval(this.timer);
  }

  initData() {
    this.config1.number[0] = 100;
    this.config1 = { ...this.config1 }; // 对象解构，更新props
    this.config2.number[0] = 2;
    this.config2 = { ...this.config2 }; // 对象解构，更新props
    this.config3.number[0] = 5000;
    this.config3 = { ...this.config3 }; // 对象解构，更新props
  }
}
</script>
<style lang="stylus" scoped>
.warn
  .container
    height: 80px;
    padding: 10px;
    box-sizing: border-box;
    .item
      color: #ffffff;
    .digital-flop
      width: 80px;
</style>
