const typeColor = {
  bug: "#26de81",
  dragon:"#ffeaa7",
  electric: "#fed330",
  fairy: "#ff0069",
  fightling: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#efb549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190ff",
};

//Link de la pokeapi (Api gratuita)
const url = 'https://pokeapi.co/api/v2/pokemon/';

//Se selecciona el elemento con el id "card"
const card = document.getElementById("card");
//Se selecciona el elemento con el id "btn"
const btn = document.getElementById("btn");

//Selecciona aleatoriamente un numero
let getPokeData = ()=>{
  let id = Math.floor(Math.random() * 21);
  console.log(id)
  const finalUrl = url + id;
  fetch(finalUrl)
    .then((res) => res.json())
    .then((data)=>
    {
      generateCard(data);
    }
    );
};

//se genera la tarjeta por medio de los datos de la api
let generateCard = (data)=>{
  console.log(data)
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAtack = data.stats[1].base_stat;
  const statDefence = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  const themeColor = typeColor[data.types[0].type.name];
  console.log(themeColor);
  card.innerHTML = `
  <p class="hp">
    <span>HP</span>
    ${hp}
  </p>
  <img src=${imgSrc}>
  <h2 class="poke-name">${pokeName}</h2>
  <div class="types"></div>
  <div class="stats">
    <div> 
      <h3>${statAtack}</h3>
      <p>Attack</p>
    </div>
    <div>
      <h3>${statDefence}</h3>
      <p>Defence</p>
    </div>
    <div>
      <h3>${statSpeed}</h3$>
      <p>Speed</p>
    </div>
  <div>
  `;
  appendTypes(data.types);
  styleCard(themeColor)
};

let appendTypes = (types) =>{
  types.forEach((item)=>{
    let span = document.createElement('span');
    span.textContent = item.type.name;
    document.querySelector(".types").appendChild(span);
  });
};

//se agrega el color de la tarjeta dependiendo del tipo de pokemon
let styleCard = (color) =>{
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #fff 36%)`;
  card.querySelectorAll(".types span").forEach((typeColor)=>{
    typeColor.style.backgroundColor = color;
  });
};

btn.addEventListener('click', getPokeData);
window.addEventListener('load', getPokeData);