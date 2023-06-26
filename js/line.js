function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function randomThickness() {
    var minThickness = 1; 
    var maxThickness = 3; 
    return Math.floor(Math.random() * (maxThickness - minThickness + 1)) + minThickness;
  }

  window.addEventListener("DOMContentLoaded", function() {
    var lineCount = 60; 
    var container = document.querySelector(".container_line");

    for (var i = 0; i < lineCount; i++) {
      var line = document.createElement("div");
      line.classList.add("line");
      line.style.animationDuration = Math.random() * 6 + 12 + "s";
      line.style.animationDirection = Math.random() < 0.5 ? "normal" : "reverse";
      line.style.animationDelay = Math.random() * 2 + "s";
      line.style.top = Math.random() * 100 + "%";
      line.style.left = Math.random() * 100 + "%";
      line.style.backgroundColor = randomColor();
      line.style.height = randomThickness() + "px"; 
      container.appendChild(line);
    }
  });