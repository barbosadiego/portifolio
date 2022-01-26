const text = document.querySelector('.text');
const reloadBtn = document.getElementById('reload')


const textArray = text.innerHTML.split('');
textArray.forEach((letra, index) => {
  text.innerHTML = ''
  setTimeout(function(){
    text.innerHTML += letra
  }, 75 * index)
})

reloadBtn.addEventListener('click', ()=>{
  document.location.reload()
})

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(function(){
    reloadBtn.classList.add('show')
  }, 75 * textArray.length)
})