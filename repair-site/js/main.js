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
  console.log('ok')
}