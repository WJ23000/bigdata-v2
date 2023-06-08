<template lang="pug">
div.area
	dv-border-box-12.container 
		div.flex
			i.fa.mr2(class="fa-pie-chart")
			div.title.mr2.f2 地震分布区域
			dv-decoration-3.decoration-icon
		Echart(:option="option", type="region-chart")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Echart from "@/components/echart/Echart.vue";
import getSizeByScreen from "@/common/utils/rem-adjust";

@Component({
	components: { Echart }
})
export default class RegionChart extends Vue {
	option = {
		legend: {
			textStyle: {
				// 图例文字的样式
				color: "#ffffff"
			},
			bottom: getSizeByScreen(50)
		},
		toolbox: {
			show: true,
			feature: {
				mark: { show: true }
			}
		},
		textStyle: {
			fontSize: getSizeByScreen(14)
		},
		series: [
			{
				name: "Nightingale Chart",
				type: "pie",
				radius: "45%",
				center: ["50%", "35%"],
				roseType: "area",
				itemStyle: {
					borderRadius: 1
				},
				data: [
					{ value: 20, name: "亚洲" },
					{ value: 18, name: "非洲" },
					{ value: 16, name: "北美洲" },
					{ value: 15, name: "南美洲" },
					{ value: 13, name: "南极洲" },
					{ value: 10, name: "欧洲" },
					{ value: 8, name: "大洋洲" }
				]
			}
		]
	};
}
</script>
<style lang="stylus" scoped>
.area
  .container
    height: 440px;
    padding: 20px;
    box-sizing: border-box;
    .title
      color: #89e5ff;
      line-height: 20px;
</style>
