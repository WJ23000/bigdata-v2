<template lang="pug">
  div.card-list.flex.row.wrap
    div.item.flex(v-for="(item,index) in list", :key="index")
      img.card-img.mr2(:src="item.img")
      div
        div.mb1.f1 {{ item.name }}
        div.f4 
          span {{ item.count }}
          span  {{ item.unit }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Map extends Vue {
  list = [
    {
      name: "图片转化流量",
      img: require("../../../../assets/card-img1.png"),
      count: 300,
      unit: "张/小时"
    },
    {
      name: "视频转化流量",
      img: require("../../../../assets/card-img2.png"),
      count: 160,
      unit: "个/小时"
    },
    {
      name: "新闻推送流量",
      img: require("../../../../assets/card-img3.png"),
      count: 330,
      unit: "篇/小时"
    },
    {
      name: "避震知识推送",
      img: require("../../../../assets/card-img4.png"),
      count: 270,
      unit: "条/小时"
    },
    {
      name: "灾况播报推送",
      img: require("../../../../assets/card-img5.png"),
      count: 89,
      unit: "条/小时"
    },
    {
      name: "通信推送流量",
      img: require("../../../../assets/card-img6.png"),
      count: 7.1,
      unit: "G/小时"
    }
  ];
}
</script>
<style lang="stylus" scoped>
.card-list
  height: 222px;
  .item
    padding: 0px 20px;
    margin: 0px 10px 10px 0px;
    // width: 324px;
    flex-grow: 1
    height: 106px;
    border-radius: 5px;
    border: 1px solid #343f4b;
    background-color: rgba(19, 25, 47, 0.8);
    color: #bcdcff;
  .item:nth-child(4)
    margin: 0px 0px 10px 0px;
  .item:nth-child(6)
    margin: 0px 0px 10px 0px;
  .card-img
    width: 64px;
    height: 64px;
</style>
