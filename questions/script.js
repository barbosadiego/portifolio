const buttons = document.querySelectorAll('.btn');
const questions = document.querySelectorAll('.card p')

buttons.forEach((btn, index) => {
  btn.addEventListener('click', ()=>{     
    activeItem(index)
  })
})


function activeItem(index){
  console.log(index)
}


// const element  = e.target.parentElement.parentElement;
    // element.querySelector('p').style.display = 'block';
    // element.querySelector('.fa-minus').classList.add('show')
    // element.querySelector('.fa-plus').classList.add('hide')
    // console.log(element)