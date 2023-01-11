let counter = 0;
setInterval(()=>{
  const el = document.querySelector('.number');
  const elValue = Number(el.getAttribute('.data-value'));
  if(counter !== elValue){
    counter++;
    el.innerHTML = `${counter}%`;
  }
}, 80);