var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 20;
var y = 20;
var speed = 2;
var color = "blue"; 

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color; 
  ctx.fillRect(x, y, 100, 100);
  x += speed;
  
 
  if (x + 100 > canvas.width) {
    color = "red"; 
  } else if (x < 0) {
    color = "blue"; 
  }

  if (x + 100 > canvas.width || x < 0) {
    speed *= -1;
  }
  requestAnimationFrame(draw);
}

draw(); 
