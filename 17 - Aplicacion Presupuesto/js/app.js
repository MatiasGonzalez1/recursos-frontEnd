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
class Ingreso extends Dato{
  static contadorIngresos = 0;

  constructor(descripcion, valor){
    super(descripcion, valor);
    this._id = ++Ingreso.contadorIngresos;
  }

  get id(){
    return this._id;
  }
};

class Egreso extends Dato{
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

const ingresos = [
  new Ingreso('Salario', 2100),
  new Ingreso('Venta Coche', 1500)
];

const egresos = [
  new Egreso('Alquiler departamento', 1500),
  new Egreso('Ropa', 400) 
];

 let cargarApp = ()=>{
    cargarCabecero()
  }

  let totalIngresos=()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
      totalIngreso += ingreso.valor;
    }
    return totalIngreso;
  }

  let totalEgresos = ()=>{
    let totalEgreso = 0;
    for(let egreso of egresos){
      totalEgreso += egreso.valor;
    }
  return totalEgreso;
  }

  let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/ totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());  
  }

  //formato de moneda : currency
  const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits:2});
  }

  const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('en-US', {style: 'percent', minimumFractionDigits:2})
  }
