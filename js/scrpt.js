
var load = true;
var speed = 999;
setInterval(() => {
  if(load) {
    document.getElementById('word').style.opacity = 0;
    load = false;
  }else {
    document.getElementById('word').style.opacity = 1; 
    load = true;
  }
}, speed);
