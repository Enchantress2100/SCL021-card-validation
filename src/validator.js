const validator = {
  isValid(creditCardNumber) {
    // console.log(creditCardNumber)
    // transformar a un array
    let arrayCreditCard = String(creditCardNumber)
      .split("")
      .map((creditCardNumber) => {
        return Number(creditCardNumber);
      });
    // console.log(arrayCreditCard);
    // filtrar buscando las posiciones pares
    let filterEven = arrayCreditCard.filter((number, index) => {
      return index % 2 === 0;
    });
    // console.log(filterEven);
    // filtrar buscando las posiciones impares
    let filterUneven = arrayCreditCard.filter((number, index) => {
      return index % 2 !== 0;
    });
    // console.log(filterUneven);
    // ejecutar la multiplicacion *2 en las posiciones pares del array, desde 0
    let evenMulti = filterEven.map(function (currentNumber, index) {
      return currentNumber * 2;
    });
   // console.log(evenMulti);

    // filtrar resultados mayores a 9 de la multiplicacion
    let findValue = evenMulti.filter((i) => i > 9);
    // console.log(findValue);

    // estructurar digitos individuales
    let digits = findValue.toString().split("");
    // eliminar los nAn
    let realDigits = digits.map(Number).filter(Number);
    // console.log(realDigits);

    // sumar los digitos entre si
    function sumar(realDigits) {
      let suma = 0;
      for (let i = 0; i < realDigits.length; i++) {
        suma += parseInt(realDigits[i]);
      }
      // console.log(suma)
    }
    sumar(realDigits)

    // se deben sumar todos los numeros del array
    // reunir los arrays
    // evenMulti
    // realDigits
    let arrayEven = evenMulti.concat(realDigits).filter((i) => i < 9);
    // console.log(arrayEven)
    // agregar filterUneven
    let arrayDef = arrayEven.concat(filterUneven)
    // console.log(arrayDef)
    // sumar los digitos
       function sumarFinal(arrayDef) {
         let sumar = 0;
         for (let i = 0; i < arrayDef.length; i++) {
           sumar += parseInt(arrayDef[i]);
         }
         // console.log(sumar);
         return sumar
       }
    // si el numero final es multiplo de 10, la tarjeta es valida. 
    let final = sumarFinal(arrayDef)
    
    if ((final % 10) == 0) {
      respuesta.innerHTML="La tarjeta de crédito es válida"
    } else {
      respuesta.innerHTML="La tarjeta de crédito es inválida"
    }
  },
  maskify(creditCardNumber) {
    let tarjeta;
    tarjeta = document.getElementById("numeroTarjeta");
    tarjeta.innerHTML = creditCardNumber.replace(
      /\d(?=\d{4})/mg,"#"
    );
  },
};

export default validator;
