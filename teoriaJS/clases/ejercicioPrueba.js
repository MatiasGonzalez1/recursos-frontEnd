class Persona{

  static contadorPersonas = 0;

  constructor(nombre, apellido, edad){
    this._idPersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  getPersona(){
    return this._idPersona
  }

  getNombre(){
    return this._nombre;
  }

  setNombre(nombre){
    this._nombre = nombre;
  }

  getApellido(){
    return this._apellido;
  }

  setApellido(apellido){
    this._apellido = apellido;
  }

  getEdad(){
    return this._edad;
  }

  setEdad(edad){
    this._edad = edad;
  }

  toString(){
    return `ID: ${this._idPersona} NOMBRE: ${this._nombre} APELLIDO: ${this._apellido} EDAD: ${this._edad}`
  }
}


// CLASE EMPLEADO


class Empleado extends Persona{
  static contadorEmpleados = 0;

  constructor(nombre, apellido, edad, sueldo){
    super(nombre, apellido, edad)
    this._idEmpleado = ++Empleado.contadorEmpleados;
    this._sueldo = sueldo;
  }

  get idEmpleado(){
    return this._idEmpleado;
  }

  get sueldo(){
    return this._sueldo;
  }

  set sueldo(sueldo){
    this._sueldo = this.sueldo;
  }

  toString(){
    return `${super.toString()} idEmpleado: ${this._idEmpleado} Sueldo: ${this._sueldo}`
  }
}


//CLASE CLIENTE

class Cliente extends Persona{

  static contadorClientes = 0;

  constructor(nombre, apellido, edad, fechaAlta){
    super(nombre, apellido, edad)
    this._idCliente = ++Cliente.contadorClientes;
    this._fechaAlta = fechaAlta;
  }

  get idCliente(){
    return this._idCliente;
  }

  get fechaAlta(){
    return this._fechaAlta;
  }

  set fechaAlta(fechaAlta){
    this._fechaAlta = fechaAlta;
  }

  toString(){
    return `${super.toString()} ${this._idCliente} ${this._fechaAlta}`
  }
}

let persona1 = new Persona('Juan', 'Perez', 27);
console.log(persona1.toString());

let persona2 = new Persona('Carlos', 'Ramirez', 35);
console.log(persona2.toString());

let empleado1 = new Empleado('Karla', 'Gomez', 25, 5000)

console.log(empleado1.toString());

let cliente1 = new Cliente('Matias', 'Gonzalez', 27, new Date());

console.log(cliente1.toString());

