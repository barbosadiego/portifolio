const nav = document.getElementById('nav');
const closeBtn = document.getElementById('btn-close');

closeBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
  closeBtn.classList.toggle('fa-times')
})

window.onscroll = () => {
  nav.classList.remove('active');
  closeBtn.classList.add('fa-bars');
  closeBtn.classList.remove('fa-times');

  if (window.scrollY > 60){
    document.querySelector('.header .navbar').classList.add('active');
  } else {
    document.querySelector('.header .navbar').classList.remove('active');
  }
}
