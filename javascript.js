// JavaScript to change background color when the button is clicked
document.getElementById('colorButton').addEventListener('click', function() {
  // Generate a random color
  const randomColor = getRandomColor();
  // Change the background color of the body
  document.body.style.backgroundColor = randomColor;
});

// Function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
