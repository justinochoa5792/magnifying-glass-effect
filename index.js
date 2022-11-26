let focus = document.getElementById("focus");
let halfWidth = focus.offsetWidth / 2;

document.onmousemove = (e) => {
  focus.style.left = e.pageX - halfWidth + "px";
  focus.style.top = e.pageY - halfWidth + "px";
};
