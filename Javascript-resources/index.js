// 1 - Copy to clipboard 

// const copyToClipboard = (text) => navigator.clipboard.writeText(text);

// copyToClipboard('Hello world');

// 2 - Convert RGB to hex

const rgbToHex = (r, g, b) => "#" + ((1<<24) + (r<<16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(0, 51, 255);

// 3 - Check if date is valid

const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid('December 17, 1995 03:24:00');

// 4 - Generate random hex

const randomHex = ()=> `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

console.log(randomHex)

// 5 - Clear all cookies

// const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

// 6 - Find the day of year

const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date());

// 7 - Capitalize an String

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

capitalize('follow for more');

// 8 - Remove Duplicated from Array

const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1,2,3,3,4,4,5,5,6]));

// 9 - Check if number is even or odd

const isEven = num => num % 2 === 0;
console.log(isEven(2))

//10 - Scroll to top

// const goTop = () => window.scrollTo(0, 0);
// goTop();

// 11 - Numeros disponibles

function numerosDisponibles(numeros, solicitado) {
  if (numeros.indexOf(solicitado) !=-1) {
    return ( "Felicitaciones, el número " + solicitado + " está disponible");
  } else {
    return ("Lo sentimos, el número " + solicitado + " está ocupado, pero aún quedan " + numeros.length + " numeros disponibles" );
  }
}

// 12 - Funcion sumar todo

 function sumarTodo(){
  let suma = 0;
  for(let i = 0; i < arguments.length; i++){
    suma += arguments[i];
  }
  return suma;
 }

 let resultado = sumarTodo(1,2,3,4,5);


//13 - Convertir valor de input a mayusculas
 
//Html <input type='text' onchange='convertir(this)'
function convertir(nombreInput){
  nombreInput.value = nombreInput.value.toUpperCase();
}

// 14 - Get year (edad)

let anio = new Date();
let anioActual = anio.getFullYear();

function getEdad(anioNacimiento){
  let anio = new Date();
  let anioActual = anio.getFullYear();
  // let mesActual = anio.getMonth();
  // let diaActual = anio.getDay();
  
  let edad = anioActual - anioNacimiento;
  return edad;
}

console.log(getEdad(1995))
