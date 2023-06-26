const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    square.style.backgroundColor = randomColor;
  });

  square.addEventListener('mouseout', () => {
    square.style.backgroundColor = 'black';
  });
});