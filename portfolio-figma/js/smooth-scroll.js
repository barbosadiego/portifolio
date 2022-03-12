export default function initSmoothScroll() {}

const links = document.querySelectorAll('nav a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const link = event.target.getAttribute("href");
  const section = document.querySelector(link);
  const sectionTop = section.getBoundingClientRect().top;

  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  });
}
