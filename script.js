let burger = document.querySelector('.hamburger');
let line = document.querySelectorAll('.line');
let cross = document.querySelector('.cross');
let list = document.querySelector('.list');

burger.addEventListener('click', () => {
    line[0].classList.toggle('v');
    line[1].classList.toggle('v');
    line[2].classList.toggle('v');
    cross.classList.toggle('v');
    list.classList.toggle('v');
});