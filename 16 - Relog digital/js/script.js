const mostrarReloj = ()=>{
  let fecha = new Date();
  let hora = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());
  document.getElementById('hora').innerHTML = `${hora}:${min}:${seg}`; 

  let meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let anio = fecha.getFullYear();
  let fechaActual = `${diaSemana}, ${dia} ${mes} ${anio}`;

  document.getElementById('fecha').innerHTML = fechaActual;
}
//agrega un 0 adelante si es necesario 01/02/03 
const formatoHora = (hora)=>{
  if(hora<10) hora = '0' + hora;
  return hora;
}

//se llama a la funcion cada segundo
setInterval(mostrarReloj, 1000);