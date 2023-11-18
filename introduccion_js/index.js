precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function increaseAmount() {
    cantidad = document.querySelector(".cantidad")
    number = Number(cantidad.innerHTML)
    number++
    cantidad.innerHTML = number
    // TODO : bloque de validacion de stock
    totalAmount()
}

function decreaseAmount() {
    cantidad = document.querySelector(".cantidad")
    number = Number(cantidad.innerHTML)
    number--
    if (number >=0) {
        cantidad.innerHTML = number
        totalAmount()
    }
    else {
        console.error ("ERROR: No se aceptan numeros negativos")
    }
}

function totalAmount() {
    total = document.querySelector(".valor-total")
    valor = (precio * number)
    total.innerHTML = valor
}