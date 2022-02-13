const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".list-container");

arrows.forEach((arrow, index) => {
  const itemNumber = movieList[index].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    clickCounter++;
    if(itemNumber - (4 + clickCounter) >= 0){
      movieList[index].style.transform = `translateX(${
        movieList[index].computedStyleMap().get("transform")[0].x.value - 320
      }px)`;
    } else {
      movieList[index].style.transform = 'translateX(0)';
      clickCounter = 0;
    }
  });
});


const items = document.querySelectorAll('.body, .header, .sidenav, .home-1, .home-2');
const toggleBtn = document.querySelector('.toggle-ball');

toggleBtn.addEventListener('click', () => {
  items.forEach(item => item.classList.toggle('active'));
  document.querySelector('.toggle').classList.toggle('active')
})