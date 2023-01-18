class Persona{

  static contadorPersonas = 0;

  constructor(idPersona, nombre, apellido, edad){
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
    return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`
  }
}
