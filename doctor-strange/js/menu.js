const button = document.querySelector('.header__mobile');
const menu = document.querySelector('.header__links');
const links = document.querySelectorAll('.header__links a')

const active = () => {
  menu.classList.toggle('active')
}

links.forEach((link) => {
  link.addEventListener('click', ()=>{
    menu.classList.remove('active')
  })
})

button.addEventListener('click', active)