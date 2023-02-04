const personas = [
  {
    nombre:'augusto',
    edad:3,
  },
  {
    nombre: 'matias',
    edad: 27
  },
  {
    nombre: 'sole',
    edad: 26
  },
  {
    nombre: 'marina',
    edad: 60
  }
];

const menores30 = personas.filter((persona)=>{
  return persona.edad  < 30;
})

console.log(menores30);

let [nombre, edad] = [ 'matias', 30];

console.log(nombre, edad)

// const {nombree, edadd, anio} = persona;

// persona.nombree = 'carlos'

const datos = new Map();

datos.set('nombre', 'matias');
datos.set('calidad', 'california');

datos.forEach((value, key)=>{
  console.log(key + ':' + value)
})