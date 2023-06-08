import getSizeByScreen from "@/common/utils/rem-adjust";

function resizeOption(option, type) {
  switch (type) {
    case "region-chart":
      option.legend.bottom = getSizeByScreen(50);
      option.textStyle.fontSize = getSizeByScreen(14);
      break;
    case "classify-chart":
      option.textStyle.fontSize = getSizeByScreen(14);
      break;
    case "intensity-chart":
      option.xAxis.axisLabel.fontSize = getSizeByScreen(14);
      option.yAxis.axisLabel.fontSize = getSizeByScreen(14);
      break;
  }
  return option;
}

export default resizeOption;
