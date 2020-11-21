function openNav() {
    document.getElementById("overlay-menu").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("overlay-menu").style.height = "0";
  }


  let counter = 1;
let image = document.querySelector('.blog').getElementsByTagName('img');

let CARD_TITLE = [
    'Lorem Ipsum',
    'Colourful Offer ;',
    'Lorem Ipsum2 ;',
    'Lorem Ipsum  3',
    'Lorem Ipsum 4',
    'Lorem Ipsum 5',
    'Lorem Ipsum 6'
];

let CARD_DESCRIPTION = [
    "Lorem",
    '1 Leverage agile framewor. Organically grow the 1 ',
    '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    '4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    '5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    '6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    '7 Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
];


document.querySelector('.slider__number').textContent = '0' + counter;
document.querySelector('.blog').querySelector('.card__title').textContent = CARD_TITLE[counter];
document.querySelector('.blog').querySelector('.card__description').textContent = CARD_DESCRIPTION[counter];

let buttonBackClick = function (e){
    counter--;
    if (counter<1) {
        counter=6;
    }
    console.log('\"build/img-' + counter +'.jpg\"');
    document.querySelector('.slider__number').textContent = '0' + counter;
    document.querySelector('.blog').querySelector('.card__title').textContent = CARD_TITLE[counter];
    document.querySelector('.blog').querySelector('.card__description').textContent = CARD_DESCRIPTION[counter];
    image.setAttribute('src','image/blog-' + counter +'.jpg');
}

let buttonForwardClick = function (e){
    counter++;
    if (counter>6) {
        counter=1;
    }
    console.log('\"build/img-' + counter +'.jpg\"');
    document.querySelector('.slider__number').textContent = '0' + counter;
    document.querySelector('.blog').querySelector('.card__title').textContent = CARD_TITLE[counter];
    document.querySelector('.blog').querySelector('.card__description').textContent = CARD_DESCRIPTION[counter];
    image.setAttribute('src','image/blog-' + counter +'.jpg');}