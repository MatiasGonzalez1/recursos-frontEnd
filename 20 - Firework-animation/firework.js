const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');

let gravity = -0.1;

let fireworks = [];
let subFireworks = [];

class Firework{
  constructor(x,y,radius,velocityX, velocityY,color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;
    this.opacity = 1;
  }

  update(){
    this.velocityY -= gravity;
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.opacity -= 0.006;
    if(this.opacity < 0) this.opacity = 0;
  }

  draw(){
    canvasContext.save()
    canvasContext.globalAlpha = this.opacity;
    canvasContext.beginPath()
    canvasContext.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    canvasContext.fillStyle = color;
    canvasContext.fill();
    canvasContext.closePath();
    canvasContext.restore();
  }
}

let animate = ()=>{
  requestAnimationFrame(animate)
  update()
  draw()
}
let colors = ['Blue', 'Orange', 'Red', 'Purple', 'Green'];
let initializeCount = 0;
let maximumInitialize = 1;

let initDelay = 500; //ms
let particleCount = 20;
let speedMultiplier = 7;

let createSubFireworks = (x, y, count, speedMultiplier)  =>{
  let created = 0;
  let radians = (Math.PI * 2) / count;

    while(created < count){
      let firework = new Firework(x, y, fireworkRadius, 
        Math.cos(radians * created) * Math.random() * speedMultiplier,
        Math.sin(radians * created) * Math.random() * speedMultiplier)
    }

}

let update = ()=>{
  canvasContext.fillStyle = 'rgba(0,0,0,0.5)'; //tail effect
  canvasContext.fillRect(0,0,canvas.width, canvas.height);
  if(initializeCount < maximumInitialize){
    let firework = new Firework(Math.random() * canvas.width, canvas.height + Math.random() * 70, fireworkRadius, 3 * (Math.random() -0.5), -12)
  fireworks.push(firework);
  setTimeout(()=>{
    initializeCount --
  }, initDelay)
  initializeCount ++
  }
  fireworks.forEach((firework, i)=>{
    if(firework.opacity <= 0.1){
      fireworks.splice(i, 1)
      createSubFireworks()
    }
    else{
      fireworks.update()
    }
  })
}

let draw = ()=>{

}