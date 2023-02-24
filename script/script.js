let buttonPopUp = document.querySelector('.navigation-link-menu');
let menuPopUp = document.querySelector('.media-menu');

buttonPopUp.addEventListener('click', showPopUp);

function showPopUp(evt) {
    evt.preventDefault();
    menuPopUp.classList.toggle('showpop-up');
};

let buttonClose = document.querySelector('.close-link');

buttonClose.addEventListener('click', closePopUp);

function closePopUp(evt) {
    evt.preventDefault();
    menuPopUp.classList.toggle('close');
}