function flexible() {
  const designWidth = 1920;
  const windowWidth = window.innerWidth;
  const baseFontSize = 16;
  const rootFontSize = windowWidth / designWidth * baseFontSize;
  document.documentElement.style.fontSize = (rootFontSize < 10 ? 10 : rootFontSize) + "px";
}

flexible();
window.addEventListener("resize", flexible);
