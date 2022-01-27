const titles = document.querySelectorAll('.tabTitle');
const content = document.querySelectorAll('.tabText');

content[0].classList.add('active');
titles[0].classList.add('active')

titles.forEach((item, index) => {
  item.addEventListener('click', () =>{
    activeContent(index);
  })
})

function activeContent (index){
  titles.forEach((item) => item.classList.remove('active'))
  content.forEach((item) => item.classList.remove('active'))
  titles[index].classList.add('active')
  content[index].classList.add('active')
}