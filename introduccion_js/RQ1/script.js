function redSquare() {
  var image = document.getElementById("centerImage");
  var hasBorder = image.style.border === "2px solid red";
  image.style.border = hasBorder ? "" : "2px solid red";
}
