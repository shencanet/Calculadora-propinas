let bill = document.querySelector('.inputs-section__bill-input');
let billNumber = parseInt(bill.value)
let people = document.querySelector('.inputs-section__people-input');
let peopleNumber = parseInt(people.value)
let tipResult = document.querySelector('.results__tip-value');
let totalResult = document.querySelector('.results__total-value')
let buttons = document.querySelectorAll('.btns__button');

buttons.forEach(element => {
  element.addEventListener('click', event=>{
    //CAMBIAR ESTILOS
    buttons.forEach(element =>{
      element.classList.remove('btns__button--selected');
    } ) 
    element.classList.add('btns__button--selected');



    let tipValue = parseInt(event.target.innerText.slice(0, -1))
    //console.log(tipValue);
    //calculo de la propina
  
   tipResult.innerText = (((billNumber * tipValue) / 100) / peopleNumber);
   //calculo del total
   totalResult.innerText = (((billNumber * tipValue) / 100  + billNumber)/peopleNumber);


    
  });
})


