let bill = document.querySelector('.inputs-section__bill-input');
let people = document.querySelector('.inputs-section__people-input');
let buttons = document.querySelectorAll('.btns__button');

buttons.forEach(element => {
  element.addEventListener('click', event=>{
    console.log(event.target.innerText.slice(0, 2));
  });
})


