class Dato{
  constructor(descripcion, valor){
    this._descripcion = descripcion;
    this._valor = valor;
  }

  get descripcion(){
    return this._descripcion;
  }

  set descripcion(descripcion){
    this._descripcion = descripcion;
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
  new Egreso('Ropa', 100) 
];

 let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
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

  const cargarIngresos = ()=>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
      ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
  }

  const crearIngresoHTML = ({descripcion, valor, id})=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(valor)}</div>
        <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${id})"></ion-icon>
        </button>
      </div>
    </div>
  </div>
  `;
  return ingresoHTML;
  }

  const eliminarIngreso = (id)=>{
    let eliminarIndice = ingresos.findIndex(ingreso => ingreso.id=== id);
    ingresos.splice(eliminarIndice, 1);
    cargarCabecero();
    cargarIngresos();
  }

  const cargarEgresos = ()=>{
    let egresosHTML = '';
    for(let egreso of egresos){
      egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
  }

  const crearEgresoHTML = ({descripcion, valor,id})=>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${id})"></ion-icon>
        </button>
      </div>
    </div>
  </div>
  `;
  return egresoHTML;
  };

  const eliminarEgreso = (id)=>{
    let eliminarIndice = egresos.findIndex(egreso => egreso.id=== id);
    egresos.splice(eliminarIndice, 1);
    cargarCabecero();
    cargarEgresos();
  }