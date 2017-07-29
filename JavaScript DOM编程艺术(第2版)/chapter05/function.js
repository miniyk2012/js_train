window.onload = function() {
  console.log('onload '+this);
  if (!document.getElementsByTagName) return false;
  var lnks = document.getElementsByTagName("a");
  for (var i=0; i<lnks.length; i++) {
    if (lnks[i].getAttribute("class") == "popup") {
      lnks[i].onclick = function() {
        // 该回调函数在点击链接后才会执行
        console.log('onclick '+this)
        popUp(this.getAttribute("href"));
        return false;
      }
    }
  }
}

function popUp(winURL) {
  window.open(winURL,"popup","width=320,height=480");
}
