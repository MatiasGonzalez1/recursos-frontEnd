const personas = [
  new Persona('Juan', 'Perez'),
  new Persona('Karla', 'Lara'),
  new Persona('Maria', 'Suarez')
]

function mostrarPersonas(){
  let texto = '';
  for(let persona of personas){
    texto += `<li> ${persona.nombre} ${persona.apellido}</li>`
  }

  let ul = document.getElementById('personas')
  ul.innerHTML = texto;
}

function agregarPersona(){
  //se recupera el formulario del html
  const forma = document.forms['forma'];
  //se recupera el input text de nombre
  const nombre = forma['nombre'];
  const apellido = forma['apellido'];
  if(nombre.value != '' && apellido.value != ''){
  const persona = new Persona(nombre.value, apellido.value);
  personas.push(persona);
  mostrarPersonas();
  apellido.value = ''
  nombre.value = ''
  }
  else{
    alert('No hay información que agregar')
  }
}