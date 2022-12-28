restartButton.addEventListener('click', ()=>{
  restartGame()
}, false);

function createGrid(){
  for (let i = 1; i<= tilesNum; i++){
    gameDiv.innerHtml = gameDiv.innerHtml + 
    '<div class="tile" data-tile="' + i + '"style="width:' + boxDimensions + '%; height: ' + boxDimensions + '%"></div>';
  }
}

function createBody(){
  for(let i = 1; i<= createBody.length; i++){
    if(i==3){
      document.querySelector('[data.tile="' + i + '"]').classList.add('head', 'body');
    } else if(i == 1 || i == 2){
      document.querySelector('[data.tile="' + i + '"]').classList.add('body');
    }
  }
}

