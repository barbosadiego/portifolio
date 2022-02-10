const horizontalScroll = document.querySelector('.container-slider');
const containerScroll = document.querySelector('.images');
const left = document.querySelector('.left-btn');
const right = document.querySelector('.right-btn');

let currentScrollPosition = 0;
let scrollAmount = 150;
let maxScroll = -containerScroll.offsetWidth + horizontalScroll.offsetWidth;


left.addEventListener('click', () => scroll(1));
right.addEventListener('click', () => scroll(-1));

left.style.opacity = '0'
function scroll(val){
  currentScrollPosition += (val * scrollAmount);
  
  if(currentScrollPosition >= 0){
    currentScrollPosition = 0;
    left.style.opacity = 0;
  } else {
    left.style.opacity = 1;
  }
  
  if(currentScrollPosition <= maxScroll){
    currentScrollPosition = maxScroll;
    right.style.opacity = 0;
  } else {
    right.style.opacity = 1;
  }
  
  containerScroll.style.left = currentScrollPosition + 'px'
}