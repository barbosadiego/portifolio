const colors = ['yellow', 'blue', 'red', 'green', 'brown', 'purple'];
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const color = colors[randomColor()]
  document.body.style.background = color;
  document.getElementById('colorDisplay').innerText = color;
  // console.log(color)
})

function randomColor () {
  return Math.floor(Math.random() * colors.length)
}