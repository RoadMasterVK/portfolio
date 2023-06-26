
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = 50;
    var y = 50;    
    var speed = 2;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "blue";
      ctx.fillRect(x, y, 100, 100);
      x += speed;
      if (x + 100 > canvas.width || x < 0) {
        speed *= -1;
      }
      requestAnimationFrame(draw);
    }
    draw();