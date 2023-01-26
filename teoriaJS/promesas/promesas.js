// let miPromesa = new Promise((resolved, rejected) =>{
//   let expresion = true;
//   if(!expresion)
//     resolved('Resolved');
//   else
//     rejected('Se produjo un error')
// });

// miPromesa.then(
//   valor => console.log(valor))
//   .catch(error => console.log(error)
// );

// let promesa = new Promise((resolver)=>{
//   // console.log('Inicio promesa');
//   setTimeout(()=>resolver('Saludos con promesa y timeout'), 3000);
//   // console.log('Fin promesa')
// });

// promesa.then(valor=> console.log(valor));

//async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
  return 'saludo con promesa y async'
}

// miFuncionConPromesa().then(valor=> console.log(valor));

async function miFuncionConPromesaYAwait(){
  let miPromesa = new Promise(resolver=> {
    resolver('Promesa con await')
  });
  console.log(await miPromesa);
}

// miFuncionConPromesaYAwait()

//promesas, await, async y setTimeOut

async function nuevaFuncion(){
  let miPromesa = new Promise(resolver=>{
    setTimeout(() => resolver('promesa con await y sto'), 3000);
  });
  console.log(await miPromesa);
}

nuevaFuncion()
