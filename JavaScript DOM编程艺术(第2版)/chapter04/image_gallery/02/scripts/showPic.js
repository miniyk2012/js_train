function showPic(whichpic) {
  const source = whichpic.getAttribute("href");
  const placeholder = document.getElementById("placeholder");
  // placeholder.setAttribute("src",source);
  placeholder.src = source;
}

function countBodyChildren() {
  var body_element = document.getElementsByTagName('body')[0];
  alert(body_element.childNodes.length);
}

window.onload = countBodyChildren;
