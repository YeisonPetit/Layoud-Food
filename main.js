const btn_menu_responsive = document.querySelector('.btn_menu_responsive');
const btn_close = document.querySelector('.btn_close');
const menu_mobile = document.querySelector('.menu_mobile');
const corazon = document.getElementById('corazon');


btn_menu_responsive.addEventListener('click', () => {
    menu_mobile.classList.add('active');
});

btn_close.addEventListener('click', () => {
    menu_mobile.classList.remove('active');
});

corazon.addEventListener('click', () => {
    corazon.classList.toggle('active');
});
