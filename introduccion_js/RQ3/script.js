function passwordVerification() {
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;
  var password3 = document.getElementById("password3").value;

  var result = document.getElementById("result");

  result.textContent =
    password1 === "9" && password2 === "1" && password3 === "1"
      ? "Password 1 correcto."
      : password1 === "7" && password2 === "1" && password3 === "4"
      ? "Password 2 correcto."
      : "Password incorrecto.";
}
