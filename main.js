let bill = document.querySelector(".inputs-section__bill-input");
let billNumber = parseInt(bill.value);
let people = document.querySelector(".inputs-section__people-input");
let peopleNumber = parseInt(people.value);
let tipResult = document.querySelector(".results__tip-value");
let totalResult = document.querySelector(".results__total-value");
let buttons = document.querySelectorAll(".btns__button");
let tipValue = 5;
let alert = document.querySelector("#alert");

buttons.forEach((element) => {
  element.addEventListener("click", event => {
    buttons.forEach(element => {
      element.classList.remove("btns__button--selected");
    });

    element.classList.add("btns__button--selected");

    
    tipValue = parseInt(event.target.innerText.slice(0, -1));
    calculateTip();
  });
});
//actualizar factura Bill

bill.addEventListener("input", ()=>{
  billNumber = parseFloat(bill.value);
  calculateTip();
});

//VALOR custom
let custom =document.querySelector('.btns__custom');
custom.addEventListener("input", ()=>{
  tipValue = parseInt(custom.value);
 if(isNaN(tipValue)){

 }else{
  calculateTip();
 }
  
});




//actualizando personas
people.addEventListener("input", ()=>{
  peopleNumber = parseFloat(people.value);

  if(peopleNumber <= 0 || isNaN(peopleNumber)){
    people.style.borderColor = 'rgb(164, 68, 68)';
    
    alert.classList.add('error');
    
    
  }else{
    alert.classList.remove('error');
    people.style.borderColor = 'hsl(189, 41%, 97%)';
    calculateTip();
  }
  
});
//reset
 let reset = document.querySelector('.results-section__reset');


function calculateTip() {
  tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);

  totalResult.innerText =(((billNumber * tipValue / 100) + billNumber) / peopleNumber).toFixed(2);
}

