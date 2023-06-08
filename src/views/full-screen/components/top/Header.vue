<template lang="pug">
div.header.flex.justify-center.align-start
  dv-decoration-10.flex1(style="height:5px;")
  dv-decoration-8(:color="['#568aea', '#000000']", style="width:240px; height:50px;")
  div.title.white 
    div.tc 大数据可视化平台
    dv-decoration-6.decoration-6
  dv-decoration-8(:color="['#568aea', '#000000']", :reverse="true", style="width:240px; height:50px;")
  dv-decoration-10.decoration10-reverse.flex1(style="height:5px;")
  div.date-time.white 
    span {{ dataTime }} 
    span.ml2 {{ week }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment";

@Component({
  components: {}
})
export default class Header extends Vue {
  dataTime = "";
  week: any = "";

  timer;

  created() {
    this.timer = setInterval(() => {
      this.dataTime = moment(new Date()).format("YYYY-MM-DD  HH:mm:ss");
    });
    this.week = this.getWeek(new Date());
  }

  beforeDestroy() {
    clearInterval(this.timer);
  }

  getWeek(date) {
    // 参数时间戳
    const week = moment(date).day();
    switch (week) {
      case 1:
        return "周一";
      case 2:
        return "周二";
      case 3:
        return "周三";
      case 4:
        return "周四";
      case 5:
        return "周五";
      case 6:
        return "周六";
      case 0:
        return "周日";
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  height: 60px;
  .decoration10-reverse
    transform: rotateY(180deg);
  .title
    margin: 0px 80px;
    font-size: 24px;
    line-height: 50px;
  .date-time
    position: absolute;
    right: 12px;
    margin-top: 24px;
    font-size: 18px;
  .decoration-6
    width:200px;
    height:10px;
</style>
