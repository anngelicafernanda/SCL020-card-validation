import validator from "./validator.js";

const respuesta = document.getElementById("containerResp");
const numeroTarjeta = document.querySelector("#inputNumero");
const nombreTarjeta = document.querySelector("#inputNombre");
const formulario = document.querySelector("#formulario");
const esValida = document.querySelector(".esValida");
const mensajeResp = document.querySelector("#mensaje");

respuesta.style.visibility = "hidden";

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
  formulario.style.visibility = "hidden";
  // document.getElementById("formulario").style.visibility = "hidden";
  respuesta.style.visibility = "visible";

  if (validator.isValid(valorTarjeta) === true) {
    esValida.textContent = "La tarjeta ingresada es una tarjeta válida";
  } else {
    esValida.textContent = "La tarjeta ingresada es una tarjeta inválida";
  }

  document.querySelector("#mascara").innerHTML = validator.maskify(
    numeroTarjeta.value
  );

  if (validator.isValid(valorTarjeta) === true) {
    mensajeResp.textContent =
      "Felicidades, tu pago fué procesado exitosamente!!";
  } else {
    mensajeResp.textContent = "Por favor, ingrese un número de tarjeta válido.";
  }

  //console.log(valorInput);
  //Muestra el true o false
  //numeroTarjeta.textContent = valorInput;
});
