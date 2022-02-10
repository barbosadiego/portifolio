const nav = document.getElementById('nav');
const closeBtn = document.getElementById('btn-close');

closeBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
  closeBtn.classList.toggle('fa-times')
})


let time = null
window.onscroll = () => {
  // debounce
  clearTimeout(time)
  time = setTimeout(function(){
    nav.classList.remove('active');
    closeBtn.classList.add('fa-bars');
    closeBtn.classList.remove('fa-times');
    // console.log('ok')

    if (window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
    } else {
      document.querySelector('.header .navbar').classList.remove('active');
    }
    // console.log('oi')
  }, 50)
}
