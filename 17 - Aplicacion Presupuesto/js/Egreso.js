class Egreso extends Datos{
  static contadorEgresos = 0;
  
  constructor(descripcion, valor){
    super(descripcion, valor);
    //cada vez que se crea un objeto de esta clase aumenta el contador
    this._id = ++Egreso.contadorEgresos;
  }

  get id(){
    return this._id;
  }
}