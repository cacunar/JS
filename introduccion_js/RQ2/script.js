function verifyOrder() {
  var amountSticker1 =
    parseInt(document.getElementById("sticker1").value, 10) || 0;
  var amountSticker2 =
    parseInt(document.getElementById("sticker2").value, 10) || 0;
  var amountSticker3 =
    parseInt(document.getElementById("sticker3").value, 10) || 0;

  var totalStickers = amountSticker1 + amountSticker2 + amountSticker3;

  var result = document.getElementById("result");

  result.textContent =
    totalStickers <= 10
      ? "Llevas " + totalStickers + " stickers."
      : "Llevas demasiados stickers.";
}
