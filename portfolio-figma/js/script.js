const btn = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav a');

btn.addEventListener('click', () => {
  nav.classList.toggle('show');
})

links.forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('show');
}))