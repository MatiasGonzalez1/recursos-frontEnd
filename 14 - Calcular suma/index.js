function sumar(){
  const forma = document.getElementById('forma');
  //tambien se puede hacer document.forms
  let a = forma['operandoA'];
  let b = forma['operandoB'];
  let resultado = parseInt(a.value) + parseInt(b.value);
  if(isNaN(resultado)){
    resultado = 'La operacion no incluye numero';
  }
  
  document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}`
}