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