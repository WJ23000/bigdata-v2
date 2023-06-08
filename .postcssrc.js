module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 192,
      propList: ["*"],
      selectorBlackList: [] // 忽略转换正则匹配项
    }
  }
};
