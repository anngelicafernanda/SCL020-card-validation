const validator = {
  isvalid: function (valorInput) {
    let tarjeta = valorInput;

    let convierteTarjetaArray = tarjeta.split("");
    console.log(convierteTarjetaArray);

    let numeroTemporal = convierteTarjetaArray.filter((char) => char != " ");
    console.log(numeroTemporal);

    //let darReverseTarjeta = numeroTemporal.reverse();
    //console.log(darReverseTarjeta);

    for (let i = 0; i < numeroTemporal.length; i++) {
      if (i % 2 === 0) {
        let acumulador = numeroTemporal[i] * 2;
        if (acumulador >= 10) {
          let acumulador2 = acumulador - 9;
          numeroTemporal[i] = acumulador2;
        } else {
          numeroTemporal[i] = acumulador;
        }
      }

      let suma = 0;
      for (let i = 0; i < numeroTemporal.length; i++) {
        suma += parseInt(numeroTemporal[i]);
      }
      console.log(suma);
      //Debemos de comprobar si es multiplo de 10
      if (suma % 10 === 0) {
        console.log("tarjeta valida");
        //return "Tarjeta valida";

        return true;
      } else {
        console.log("tarjeta invalida");
        // return "Tarjeta invalida";
        return false;
      }
    }
  },

  maskify: (valorInput) => {
    let tarjetaArray = valorInput.split('');
  
    for (let i = 0; i < tarjetaArray.length - 4; i++) {
      tarjetaArray[i] = '*';
    }
  
    let tarjetaMaskify = tarjetaArray.join('');
  
    return tarjetaMaskify; 
  }
};

export default validator;
