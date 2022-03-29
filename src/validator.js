//import { inputRequiresLabel } from "htmlhint";

const validator = {
  validar: function (valorInput) {
    //validar: (valorInput) => {

    let tarjeta = valorInput;

    let convierteTarjetaArray = tarjeta.split("");
    //console.log(convierteTarjetaArray)

    let numerotemporal = convierteTarjetaArray.filter((char) => char != " ");
    //console.log(numerotemporal);

    //let darReverseTarjeta = numerotemporal.reverse();
    //console.log(darReverseTarjeta);

    for (let i = 0; i < numerotemporal.length; i++) {
      if (i % 2 === 0) {
        let aux = numerotemporal[i] * 2;
        if (aux >= 10) {
          let aux2 = aux - 9;
          numerotemporal[i] = aux2;
        } else {
          numerotemporal[i] = aux;
        }
      }

      let suma = 0;
      for (let i = 0; i < numerotemporal.length; i++) {
        suma += parseInt(numerotemporal[i]);
      }
      console.log(suma);
      //Debemos de comprobar si es multiplo de 10
      if (suma % 10 === 0) {
        console.log("tarjeta valida");
        return "Tarjeta valida";
      } else {
        console.log("tarjeta invalida");
        return "Tarjeta invalida";
      }
    }
  },
};

export default validator;
