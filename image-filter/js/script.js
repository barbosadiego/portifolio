const menu = document.querySelector('.menu-btn');
const close = document.querySelector('.close');
const sidenav = document.querySelector('.sidenav');

menu.addEventListener('click', () => {
  sidenav.classList.add('active')
})

close.addEventListener('click', () => {
  sidenav.classList.remove('active')
})
