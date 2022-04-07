import validator from "./validator.js";

const numeroTarjeta = document.querySelector("#inputNumero");
const nombreTarjeta = document.querySelector("#inputNombre");
const formulario = document.querySelector("#formulario");
const esValida = document.querySelector(".esValida");

nombreTarjeta.addEventListener("keyup", (e) => {
  let valorNombre = e.target.value;
  nombreTarjeta.value = valorNombre.replace(/[0-9]/g, "");
});

numeroTarjeta.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;
  numeroTarjeta.value = valorInput

    .replace(/\s/g, "")
    // Elimina las letras
    .replace(/\D/g, "");
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let valorTarjeta = numeroTarjeta.value;

  if (validator.isValid(valorTarjeta) === true) {
    esValida.textContent = "Tarjeta Valida";
  } else {
    esValida.textContent = "Tarjeta Invalida";
  }

  document.querySelector("#mascara").innerHTML = validator.maskify(
    numeroTarjeta.value
  );

  //console.log(valorInput);
  //Muestra el true o false
  //numeroTarjeta.textContent = valorInput;
});
