'use strict'
//intenta ejecutar el código
try{
  let x=-1;
  if(isNaN(x)) throw 'Solo se aceptan numeros';
  else if(x < 0) throw 'No se aceptan valores negativos';
  else if(x === '') throw 'No se aceptan valores vacios'
}
//si hay algun error lo imprime
catch(err){ 
  console.log(err)
  // console.log(err.name);
  // console.log(err.message);
}
//se ejecuta siempre haya o no errores este bloque es opcional
finally{
console.log('Se acabo')
}

console.log('Continuamos...')