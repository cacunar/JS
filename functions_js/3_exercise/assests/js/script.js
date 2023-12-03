let backgroundColor = (elemento, color) => {
  elemento.style.backgroundColor = color;
};

window.addEventListener("load", function () {
  backgroundColor(ele, "green");
});

const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  backgroundColor(ele, "yellow");
});
