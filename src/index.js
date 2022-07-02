//npm init
//npm start
//cambiar en package.json el primer archivo a leer el index.js
//agregar el type modules en el archivo a leer
//instalar nodemon
//ejecutar nodemon index.js

import validator from './validator.js';
console.log(validator);

//recoger los numeros de html como un array
let recoger=document.getElementById('boton')
recoger.addEventListener('click', pickUp)

let creditCardNumber = 0; //scope global

function pickUp(event) {
    event.preventDefault();
    let numeros = document.getElementById("numeros").value;  //console.log(numeros)
    creditCardNumber = numeros;  //console.log(creditCardNumber)
    //asegurar que se estan ingresando 16 numeros
    if (creditCardNumber.length != 16) {
      let respuesta = document.getElementById("respuesta");
      respuesta.innerHTML = "Debes ingresar los 16 números exactos de tu tarjeta";
    } else {
        validator.isValid(creditCardNumber)
    }
    console.log(creditCardNumber.length); //comprobar la cantidad de números ingresados.
}

//mostrar contenido container de respuesta
let show = document.getElementById('boton')
show.onclick=function showDiv() {
    document.getElementById("valido").style.display = "block";
}





