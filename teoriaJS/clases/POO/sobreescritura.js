class Empleado{
  constructor(nombre, sueldo){
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  obtenerDetalles(){
    return `Empleado: \nnombre: ${this._nombre} \n sueldo:${this._sueldo}`;
  }
}

class Gerente extends Empleado{
  constructor(nombre, sueldo, departamento){
    super(nombre, sueldo)
    this._departamento = departamento; 
  }

  obtenerDetalles(){
    return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`
}
}

function imprimirTipo(tipo){
  console.log(tipo.obtenerDetalles())
  if(tipo instanceof Empleado){
    console.log('Es un objeto de tipo Empleado')
  }
} 

let gerente1 = new Gerente('Matias', 100, 'sistemas')
// console.log(gerente1.obtenerDetalles())

let empleado1 = new Empleado('Juan', 200);

imprimirTipo(empleado1)