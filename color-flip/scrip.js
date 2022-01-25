const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorDisplay = document.getElementById('colorDisplay')

btn.addEventListener("click", () => {
  const color = `#${generateColor()}`;
  document.body.style.background = color;
  colorDisplay.textContent = color
});

function generateColor() {
  let color = [];
  for (let i = 0; i < 6; i++) {
    color[i] = colors[randomNumber()];
  }
  return (color.join(''))
}

function randomNumber(){
  return Math.floor(Math.random() * colors.length)
}
