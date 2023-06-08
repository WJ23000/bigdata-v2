function getSizeByScreen(size, defalteWidth = 1920) {
  const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (!clientWidth) return size;
  const scale = clientWidth / defalteWidth;
  return Number((size * scale).toFixed(3));
}

export default getSizeByScreen;
