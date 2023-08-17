"Верстка +7\n Вёрстка соответствует макету +35\n Требования к css +4\nИнтерактивность элементов +6\n total: 52"

// BURGER

const burger = document.querySelector('.header__burger');
burgerMenu = document.querySelector('.header__menu');
body = document.querySelector('.body');
menu = document.querySelector('.menu__list');
overlay = document.querySelector('.overlay');



function burgerActive(){
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('overlay');
    overlay.classList.toggle('open');
    menu.classList.toggle('active');
};

burger.addEventListener('click', burgerActive);

//SLIDER
const btn_left = document.querySelector('#btn-left'),
btn_right = document.querySelector('#btn-right'),
carousel = document.querySelector('.carousel'),
leftBlock = document.querySelector('#left-block'),
rightBlock = document.querySelector('#right-block');

// function for creating a card
function createCardTemplate(){
    const card = document.createElement('div');
    card.classList.add('friends__item');
    return card;
}

//functions for buttons
let moveLeft = () =>{
    carousel.classList.add('transition-left');
    btn_left.removeEventListener('click', moveLeft);
    btn_right.removeEventListener('click', moveRight);
};
let moveRight = () =>{
    carousel.classList.add('transition-right');
    btn_right.removeEventListener('click', moveRight);
    btn_left.removeEventListener('click', moveLeft);
};

btn_left.addEventListener('click', moveLeft);
btn_right.addEventListener('click', moveRight);


carousel.addEventListener('animationend', (animationEvent)=>{
    let blockChanged;
    if(animationEvent.animationName === 'move-left'){
        carousel.classList.remove('transition-left');
        blockChanged = leftBlock;        

        document.querySelector('#active-block').innerHTML = leftBlock.innerHTML;
    }else{
        carousel.classList.remove('transition-right');
        blockChanged = rightBlock;
        document.querySelector('#active-block').innerHTML = rightBlock.innerHTML;
    }
    
    btn_left.addEventListener('click', moveLeft);
    btn_right.addEventListener('click', moveRight);
})



// --------------POP-UP
const cards = document.querySelectorAll('.friends__item'),
cardBtn = document.querySelectorAll('.friends__info'),
popUp = document.querySelector('.popup'),
closePopUp = document.querySelector('.popup__close'),
lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;



//  функция открытия поп-ап  
    function popUpActive(){
        popUp.classList.add('open');
        body.classList.add('overlay');

    };
    
//  функция закрытия поп-ап
function popUpClose(e){
    popUp.classList.remove('open');
    body.classList.remove('overlay');
    e.preventDefault()
};
    
    
    cards.forEach((e)=>{
        e.addEventListener('click', popUpActive)
    })
    closePopUp.addEventListener('click', popUpClose)