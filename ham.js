let mainManue = document.querySelector('.mainMenu');
let openManue = document.querySelector('.openMenu');
let closeManue = document.querySelector('.closeMenu');


openManue.addEventListener('click' , show);
closeManue.addEventListener('click' , close);

function show(){
    mainManue.style.display = 'flex';
    mainManue.style.top = '0';

}

function close(){
    mainManue.style.top='-100%';
}