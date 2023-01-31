class Dato{
  constructor(desripcion, valor){
    this._descripcion = desripcion;
    this._valor = valor;
  }

  get desripcion(){
    return this._descripcion;
  }

  set desripcion(desripcion){
    this._descripcion = desripcion;
  }

  get valor(){
    return this._valor;
  }

  set valor(valor){
    this._valor = valor;
  }
}