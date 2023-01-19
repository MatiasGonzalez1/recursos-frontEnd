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