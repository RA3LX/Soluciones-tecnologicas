function sumarDigitos() {
  let numero = document.getElementById("numero").value;
  let suma = 0;

  for (let digito of numero) {
    if (!isNaN(digito) && digito !== " ") {
      suma += parseInt(digito);
    }
  }

  document.getElementById("resultadoSuma").innerText =
    "La suma de los dígitos es: " + suma;
}
