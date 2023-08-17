@import(URL)
const cards = document.querySelectorAll('.friends__item'),
cardBtn = document.querySelectorAll('.friends__info'),
popUp = document.querySelector('.popup'),
closePopUp = document.querySelector('.popup__close'),
lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
console.log(popUp);


//  функция открытия поп-ап  
    function popUpActive(){
        popUp.classList.add('open');
        body.classList.add('overlay');

    };
    
    
    
    
    
    cards.forEach((e)=>{
        e.addEventListener('click', popUpActive)
    })